import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
              Find <span className="text-orange-500">Us</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg mb-8 md:mb-10">
              Ready to start? Drop by our facility or give us a call. We're here to help you begin your journey.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-zinc-900 p-3 rounded-full text-orange-500 shrink-0 border border-zinc-800">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Address</h4>
                  <p className="text-zinc-400 text-sm md:text-base">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-zinc-900 p-3 rounded-full text-orange-500 shrink-0 border border-zinc-800">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Phone</h4>
                  <p className="text-zinc-400 text-sm md:text-base">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-zinc-900 p-3 rounded-full text-orange-500 shrink-0 border border-zinc-800">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Email</h4>
                  <p className="text-zinc-400 text-sm md:text-base">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-zinc-900 p-3 rounded-full text-orange-500 shrink-0 border border-zinc-800">
                  <Clock className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="w-full">
                  <h4 className="text-white font-bold mb-2 md:mb-3 text-sm md:text-base">Operating Hours</h4>
                  <div className="space-y-2">
                    {CONTACT_INFO.hours.map((h, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800 pb-2 last:border-0 text-sm md:text-base">
                        <span className="text-zinc-300 font-medium">{h.days}</span>
                        <span className="text-orange-500">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[300px] md:h-[400px] lg:h-auto min-h-[300px] md:min-h-[400px] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 relative grayscale hover:grayscale-0 transition-all duration-500"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.623404757461!2d77.57331787484065!3d12.931909087379829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159a8426861f%3A0x8c394a88337c7f30!2sEmerge%20private%20fitness%20studio!5e0!3m2!1sen!2sin!4v1786607041269!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
