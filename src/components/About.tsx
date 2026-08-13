import { motion } from 'motion/react';
import { Target, Shield, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: "Our Mission",
      description: "To empower individuals to reach their peak physical and mental potential through world-class fitness facilities."
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Core Values",
      description: "Discipline, consistency, and a supportive community are the pillars of everything we do at Emerge Private Fitness Studio."
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: "Expert Staff",
      description: "Our certified trainers bring years of experience to guide you safely and effectively toward your goals."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4 md:mb-6">
              More Than Just <br/>
              <span className="text-orange-500">A Gym.</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed">
              Located in the heart of Jayanagar, Emerge Private Fitness Studio is designed for those who take their fitness seriously. Whether you're a beginner taking your first steps or a seasoned athlete looking to shatter plateaus, our expansive facility provides the perfect environment.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              {values.map((item, index) => (
                <div key={index} className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-1 bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop" 
                alt="Gym facility" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-zinc-900 p-4 md:p-6 rounded-2xl border border-zinc-800 shadow-2xl">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">5,000+</div>
              <div className="text-orange-500 font-bold uppercase tracking-wider text-xs md:text-sm">Active Members</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
