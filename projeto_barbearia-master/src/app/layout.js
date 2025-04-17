import "./globals.css";

export const metadata = {
  title: "Barbearia do João",
  description: "A melhor barbearia da região",

  icons: {
    icon: "/banner3.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
