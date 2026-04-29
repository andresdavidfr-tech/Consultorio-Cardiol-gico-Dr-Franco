/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SpecialConsultationForm from "./components/SpecialConsultationForm";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <div id="testimonios">
          <Testimonials />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-med-light/20 selection:text-med-dark">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consulta-especial" element={<SpecialConsultationForm />} />
      </Routes>
    </div>
  );
}

