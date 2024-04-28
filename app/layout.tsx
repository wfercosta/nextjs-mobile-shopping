import "./globals.css";
import Navigation from "./components/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer />
      </body>
    </html>
  );
}
