import "./globals.css";

export const metadata = {
  title: "Academia Fácil",
  description: "Gestão simples para academias e personal trainers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
