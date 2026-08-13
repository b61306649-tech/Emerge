import { motion, AnimatePresence } from 'motion/react';
import { MEMBERSHIP_PLANS } from '../data';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

export function Memberships() {
  const [selectedPlanId, setSelectedPlanId] = useState('pro'); // default to pro
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePlanForWhatsApp, setActivePlanForWhatsApp] = useState('');
  const [modalData, setModalData] = useState({ name: '', date: '' });

  const handleOpenModal = (planName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePlanForWhatsApp(planName);
    setIsModalOpen(true);
  };

  const handleWhatsAppRedirect = () => {
    if (!modalData.name || !modalData.date || !activePlanForWhatsApp) return;
    const message = `Hi, my name is ${modalData.name}, I'm interested in the ${activePlanForWhatsApp} plan, and I will be joining on ${modalData.date}.`;
    const url = `https://wa.me/919606885111?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsModalOpen(false);
    setModalData({ name: '', date: '' });
  };

  return (
    <section id="memberships" className="py-16 md:py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4"
          >
            Membership <span className="text-orange-500">Plans</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-base md:text-lg"
          >
            Flexible tiers to match your dedication. No hidden fees, just raw progress.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {MEMBERSHIP_PLANS.map((plan, index) => {
            const isSelected = selectedPlanId === plan.id;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative rounded-3xl p-6 md:p-8 flex flex-col cursor-pointer ${
                  plan.highlight 
                    ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-2xl shadow-orange-500/10' 
                    : 'bg-zinc-900'
                }`}
              >
                {/* The animated selection ring */}
                {isSelected && (
                  <motion.div
                    layoutId="plan-selection-ring"
                    className="absolute inset-0 border-4 border-orange-500 rounded-3xl z-0 pointer-events-none"
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
                
                {/* Base border if not selected to prevent layout shift */}
                {!isSelected && (
                   <div className="absolute inset-0 border border-zinc-800 rounded-3xl z-0 pointer-events-none transition-colors group-hover:border-zinc-700" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {plan.highlight && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-orange-500 text-zinc-950 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-6 md:mb-8 mt-4 text-center">
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors ${isSelected ? 'text-orange-500' : 'text-white'}`}>{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl md:text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-zinc-400 text-sm md:text-base font-medium">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 md:space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm md:text-base">
                        <Check className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 transition-colors ${isSelected ? 'text-orange-500' : 'text-zinc-500'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={(e) => handleOpenModal(plan.name, e)}
                    className={`w-full py-3 md:py-4 rounded-xl font-bold uppercase tracking-wide transition-all text-center block text-sm md:text-base ${
                      isSelected 
                        ? 'bg-orange-500 text-zinc-950 hover:bg-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)]' 
                        : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                    }`}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* WhatsApp Lead Form Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl relative"
              >
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <h3 className="text-2xl font-bold text-white mb-2">Join {activePlanForWhatsApp} Plan</h3>
                <p className="text-zinc-400 mb-6">Enter your details to continue to WhatsApp.</p>
                
                <div className="space-y-4 mb-8 text-left">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      value={modalData.name}
                      onChange={(e) => setModalData({...modalData, name: e.target.value})}
                      placeholder="e.g. John Doe"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Joining Date</label>
                    <input 
                      type="date" 
                      value={modalData.date}
                      onChange={(e) => setModalData({...modalData, date: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-300 focus:outline-none focus:border-orange-500 transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <button 
                  onClick={handleWhatsAppRedirect}
                  disabled={!modalData.name || !modalData.date}
                  className="w-full bg-orange-500 text-zinc-950 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-orange-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send to WhatsApp
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
