import Navbar from "@/components/ui/Navbar"
import HeroSection from "@/components/ui/HeroSection"
// import About from "@/components/ui/About"
import StudentsSection from "@/components/ui/StudentsSection"
import Footer from "@/components/ui/Footer"
import Contact from '@/components/ui/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <div className="mt-16">
        <HeroSection />
        {/* <About /> */}
        <StudentsSection />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

