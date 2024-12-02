import { Instagram, Facebook, Linkedin, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Academy Info */}
        <div className="space-y-4">
          <h3 className="font-cinzel text-2xl font-bold text-red-500">Our Academy</h3>
          <p className="text-gray-300">
            Dedicated to excellence in martial arts training since 2000. 
            We focus on building strength, character, and discipline through 
            traditional and modern martial arts techniques.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-cinzel text-2xl font-bold text-red-500">Connect With Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-red-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-cinzel text-2xl font-bold text-red-500">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <MapPin className="text-red-500" size={20} />
            <p className="text-gray-300">
              MIG Ground, Padmnabhpur<br />
              Durg,491001
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="text-red-500" size={20} />
            <p className="text-gray-300">+91 98765 43210</p>
          </div>
        </div>
      </div>
    </footer>
  )
}