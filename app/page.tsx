import Navbar from "@/components/ui/Navbar"
import HeroSection from "@/components/ui/HeroSection"
// import About from "@/components/ui/About"
import Layout from '../components/ui/Layout';
import StudentsSection from "@/components/ui/StudentsSection"
import Footer from "@/components/ui/Footer"
import Contact from '@/components/ui/Contact'
import { AppProps } from 'next/app'; // Import AppProps from Next.js


export default function Home({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
