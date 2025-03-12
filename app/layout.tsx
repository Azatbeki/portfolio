import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import { ModalProvider } from '@/context/modal-context';
import HeaderWrapper from '@/components/HeaderWrapper';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Maksat | Portfolio',
  description: 'Maksat is a Front-End developer with 3 years of experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-stone-50 text-stone-950 relative pt-28 sm:pt-36 dark:bg-stone-900 dark:text-stone-50 dark:text-opacity-90`}
      >
        <div className="bg-stone-500 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#1b1515]"></div>
        <div className="bg-stone-200 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#545350]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ModalProvider>
              <HeaderWrapper />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
            </ModalProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
