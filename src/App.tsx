/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Memberships } from './components/Memberships';
import { Trainers } from './components/Trainers';
import { Extras } from './components/Extras';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Memberships />
        <Trainers />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
