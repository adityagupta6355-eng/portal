import "./globals.css";

export const metadata = {
  title: "TradeMatchly Supplier Portal",
  description: "Supplier marketplace dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}