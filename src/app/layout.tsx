import { inter, roboto } from '../styles/fonts';
import "../styles/globals.css";
import Header from '../Components/Header';

export const metadata = {
  title: 'Next.js Project Manager',
  description: 'Next.js app to manage projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
