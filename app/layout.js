import Navbar from '@/components/navbar/Navbar';
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
 
})



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
