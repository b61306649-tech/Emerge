import { Dumbbell, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-zinc-950" />
              </div>
              <span className="text-xl font-bold text-white tracking-wider uppercase">Emerge</span>
            </div>
            <p className="text-zinc-400 max-w-md leading-relaxed mb-6 text-sm md:text-base">
              Dedicated to building stronger bodies and sharper minds. Join Emerge and transform your life with our world-class facilities and expert guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Classes</a></li>
              <li><a href="#memberships" className="hover:text-orange-500 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 text-center text-zinc-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Emerge Private Fitness Studio. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for future growth & scalability.</p>
        </div>
      </div>
    </footer>
  );
}
