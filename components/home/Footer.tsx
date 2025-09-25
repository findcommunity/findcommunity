import React from 'react'
import { Link } from "@heroui/link";
const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Find</h3>
              <p className="text-gray-300 mb-4">
                Platform pembelajaran keuangan terdepan untuk Gen Z. Pelajari investasi, saham, dan manajemen keuangan dengan mudah.
              </p>
              <div className="flex gap-4">
                <Link href="https://instagram.com/find_finance" className="text-gray-300 hover:text-yellow-400">
                  Instagram
                </Link>
                <Link href="https://twitter.com/find_finance" className="text-gray-300 hover:text-yellow-400">
                  Twitter
                </Link>
                <Link href="https://youtube.com/find_finance" className="text-gray-300 hover:text-yellow-400">
                  YouTube
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kelas</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-yellow-400">
                  Investasi Saham
                </Link>
                <Link href="/" className="block text-gray-300 hover:text-yellow-400">
                  Crypto
                </Link>
                <Link href="/kelas/financial-planning" className="block text-gray-300 hover:text-yellow-400">
                  Financial Planning
                </Link>
                <Link href="/" className="block text-gray-300 hover:text-yellow-400">
                  Reksadana
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-300 hover:text-yellow-400">
                  Tentang Kami
                </Link>
            
                <Link href="/webinar" className="block text-gray-300 hover:text-yellow-400">
                  Webinar
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Bantuan</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-yellow-400">
                  FAQ
                </Link>
                <Link href="/" className="block text-gray-300 hover:text-yellow-400">
                  Kebijakan Privasi
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
               2025 Find. All rights reserved. | Platform pembelajaran keuangan untuk Gen Z
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
