import "./globals.css";

export const metadata = {
  title: "Jasim ALi Resume",
  description: "Build a resume for my job",
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
