export const metadata = {
  title: 'مرحباً - تطبيق عربي',
  description: 'تطبيق ويب بسيط باللغة العربية',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
