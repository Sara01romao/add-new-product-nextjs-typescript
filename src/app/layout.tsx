import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";


const font_body = Roboto({
  
  weight: ["100","400", "700"],
  style:['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Registro de Produtos",
  description: "Sistema de Produtos: Adicionar, Editar e Remover ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${font_body.className}`}
      >
        {children}
      </body>
    </html>
  );
}
