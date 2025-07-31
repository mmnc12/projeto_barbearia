// src/app/componentes/CapturaLeads/index.jsx
"use client";

import React, { useState, useCallback, useRef } from 'react';
import { supabase } from '../../../supabaseClient'; // <-- Changed from '../../' to '../../../'
import estilo from './CapturaLeads.module.css';// Renamed `styles` to `estilo` as per your error trace, ensure this matches

export default function CapturaLeads() {
    // --- State Management ---
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

    // Ref to store the actual digits of the phone number, without formatting
    const rawPhoneNumberRef = useRef('');

    // --- Utility Functions ---

    const formatPhoneNumber = useCallback((rawDigits) => {
        let formatted = '';
        if (rawDigits.length > 0) {
            if (rawDigits.length >= 2) {
                formatted += `(${rawDigits.substring(0, 2)})`;
                if (rawDigits.length > 2) {
                    formatted += ' ';
                }
            } else {
                formatted += `(${rawDigits}`;
            }

            let numPart = rawDigits.substring(2);
            if (numPart.length > 0) {
                if (numPart.length > 5) {
                    formatted += `${numPart.substring(0, 5)}-${numPart.substring(5, 9)}`;
                } else if (numPart.length > 4) {
                    formatted += `${numPart.substring(0, 4)}-${numPart.substring(4)}`;
                } else {
                    formatted += numPart;
                }
            }
        }
        return formatted;
    }, []);

    const validateNome = useCallback(() => {
        const nome = formData.nome.trim();
        if (!nome) {
            setErrors(prev => ({ ...prev, nome: 'Nome é obrigatório' }));
            return false;
        } else if (nome.length < 2) {
            setErrors(prev => ({ ...prev, nome: 'Nome deve ter pelo menos 2 caracteres' }));
            return false;
        }
        setErrors(prev => ({ ...prev, nome: '' }));
        return true;
    }, [formData.nome]);

    const validateEmail = useCallback(() => {
        const email = formData.email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setErrors(prev => ({ ...prev, email: 'E-mail é obrigatório' }));
            return false;
        } else if (!emailRegex.test(email)) {
            setErrors(prev => ({ ...prev, email: 'E-mail inválido' }));
            return false;
        }
        setErrors(prev => ({ ...prev, email: '' }));
        return true;
    }, [formData.email]);

    const validateTelefone = useCallback(() => {
        const telefoneNumeros = rawPhoneNumberRef.current;
        if (!telefoneNumeros) {
            setErrors(prev => ({ ...prev, telefone: 'Telefone é obrigatório' }));
            return false;
        }
        if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
            setErrors(prev => ({ ...prev, telefone: 'Telefone inválido. Utilize o formato (99) 99999-9999.' }));
            return false;
        }
        const ddd = telefoneNumeros.substring(0, 2);
        if (parseInt(ddd) < 11 || parseInt(ddd) > 99) {
            setErrors(prev => ({ ...prev, telefone: 'DDD inválido.' }));
            return false;
        }
        setErrors(prev => ({ ...prev, telefone: '' }));
        return true;
    }, []);

    // --- Handlers ---

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (submitMessage.text) {
            setSubmitMessage({ type: '', text: '' });
        }

        if (name === 'telefone') {
            let newRawValue = value.replace(/\D/g, '');

            if (newRawValue.length > 11) {
                newRawValue = newRawValue.substring(0, 11);
            }

            rawPhoneNumberRef.current = newRawValue;
            setFormData(prev => ({ ...prev, [name]: formatPhoneNumber(newRawValue) }));

            if (errors.telefone) {
                validateTelefone();
            }

        } else {
            setFormData(prev => ({ ...prev, [name]: value }));

            if (errors[name]) {
                if (name === 'nome') validateNome();
                if (name === 'email') validateEmail();
            }
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        if (name === 'nome') validateNome();
        if (name === 'email') validateEmail();
        if (name === 'telefone') validateTelefone();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitMessage({ type: '', text: '' });

        const isNomeValid = validateNome();
        const isEmailValid = validateEmail();
        const isTelefoneValid = validateTelefone();

        if (!isNomeValid || !isEmailValid || !isTelefoneValid) {
            setSubmitMessage({ type: 'error', text: 'Por favor, corrija os erros no formulário.' });
            setLoading(false);
            return;
        }

        const leadData = {
            nome: formData.nome.trim(),
            email: formData.email.trim(),
            telefone: formData.telefone,
        };

        try {
            const { error } = await supabase
                .from('Leads')
                .insert([leadData]);

            if (error) {
                if (error.code === '23505') {
                    throw new Error('Telefone ou E-mail já cadastrado. Por favor, utilize dados diferentes.');
                }
                throw new Error(error.message || 'Erro desconhecido ao conectar com o banco de dados.');
            }

            setSubmitMessage({ type: 'success', text: 'Dados cadastrados com sucesso! Entraremos em contato assim que tivermos novidades.' });
            setFormData({ nome: '', email: '', telefone: '' });
            rawPhoneNumberRef.current = '';
            setErrors({});
            setTimeout(() => setSubmitMessage({ type: '', text: '' }), 5000);

        } catch (error) {
            console.error('Error submitting lead:', error);
            setSubmitMessage({ type: 'error', text: error.message || 'Erro ao cadastrar lead. Tente novamente em alguns instantes.' });
            setTimeout(() => setSubmitMessage({ type: '', text: '' }), 8000);
        } finally {
            setLoading(false);
        }
    };

    // --- Render ---
    return (
        <div className={estilo.container}>
            <h1 className={estilo.titulo}>NEWSLETTER</h1>
            <p className={estilo.paragrafo}>Preencha o formulário para receber nossas novidades</p>
            <div className={estilo.formWrapper}>
                <div className={estilo.formHeader}>
                    <h2>Informe seus dados</h2>
                </div>

                <form className={estilo.leadForm} onSubmit={handleSubmit}>
                    <div className={estilo.formGroup}>
                        <label htmlFor="nome">Nome Completo</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                            placeholder="Digite seu nome completo"
                            autoComplete="name"
                            value={formData.nome}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.nome ? estilo.invalid : ''}
                        />
                        <span className={`${estilo.errorMessage} ${errors.nome ? estilo.show : ''}`} id="nomeError">{errors.nome}</span>
                    </div>

                    <div className={estilo.formGroup}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Digite seu e-mail"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email ? estilo.invalid : ''}
                        />
                        <span className={`${estilo.errorMessage} ${errors.email ? estilo.show : ''}`} id="emailError">{errors.email}</span>
                    </div>

                    <div className={estilo.formGroup}>
                        <label htmlFor="telefone">WhatsApp</label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            required
                            placeholder="(99) 99999-9999"
                            maxLength="15"
                            inputMode="numeric"
                            value={formData.telefone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.telefone ? estilo.invalid : ''}
                        />
                        <span className={`${estilo.errorMessage} ${errors.telefone ? estilo.show : ''}`} id="telefoneError">{errors.telefone}</span>
                    </div>

                    <button type="submit" className={estilo.submitBtn} disabled={loading}>
                        <span className={loading ? estilo.hidden : ''}>Enviar</span>
                        <div className={`${estilo.loader} ${loading ? '' : estilo.hidden}`}></div>
                    </button>
                </form>

                {submitMessage.type === 'success' && (
                    <div className={`${estilo.message} ${estilo.success}`}>
                        <div className={estilo.messageIcon}>✓</div>
                        <div className={estilo.messageContent}>
                            <h3>Lead cadastrado com sucesso!</h3>
                            <p>{submitMessage.text}</p>
                        </div>
                    </div>
                )}

                {submitMessage.type === 'error' && (
                    <div className={`${estilo.message} ${estilo.error}`}>
                        <div className={estilo.messageIcon}>✕</div>
                        <div className={estilo.messageContent}>
                            <h3>Erro ao cadastrar lead</h3>
                            <p>{submitMessage.text}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};