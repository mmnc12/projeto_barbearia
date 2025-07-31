// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://foshaedpvshlzixfovtg.supabase.co'; // Base URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvc2hhZWRwdnNobHppeGZvdnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNzYwODMsImV4cCI6MjA2ODk1MjA4M30.80tDZSQFaG-o3wE027_cN9ritCCB-fVrze3FPdw9KRI';

export const supabase = createClient(supabaseUrl, supabaseKey);