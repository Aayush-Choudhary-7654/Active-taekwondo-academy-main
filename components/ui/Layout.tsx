import Navbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode; // Explicitly type children
  }
export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}