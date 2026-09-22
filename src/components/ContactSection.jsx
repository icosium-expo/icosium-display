import React, { useState } from 'react';

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    setSubmitting(true);
    // On laisse le formulaire HTML se soumettre normalement
    // FormSubmit va recevoir les données et rediriger vers _next
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#FF6B00] font-bold text-sm uppercase tracking-wider">Parlons de votre projet</span>
          <h2 className="text-3xl font-extrabold text-[#0B132B] mt-2 mb-3">Obtenez votre devis sous 24h</h2>
          <p className="text-slate-600">Remplissez ce formulaire ou contactez-nous directement.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-700">
            <span>📞 +213 (0) 550 88 66 40</span>
            <span>📞 +213 (0) 552 94 00 09</span>
            <span>✉️ contact@icosium-expo.com</span>
          </div>
        </div>

        <form
          action="https://formsubmit.co/contact@icosium-expo.com"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl"
        >
          {/* Configuration FormSubmit */}
          <input type="hidden" name="_subject" value="Nouvelle demande de devis - Icosium Display" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://icosium-expo.github.io/icosium-display/" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Nom / Entreprise *</label>
              <input
                type="text"
                name="nom"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Téléphone *</label>
              <input
                type="tel"
                name="telephone"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white"
                placeholder="+213 ..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">E-mail *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white"
              placeholder="contact@exemple.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Description de votre besoin</label>
            <textarea
              name="description"
              rows="4"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white"
              placeholder="Détails..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#FF6B00] hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 rounded-xl transition cursor-pointer"
          >
            {submitting ? "Redirection..." : "Envoyer ma demande"}
          </button>
        </form>
      </div>
    </section>
  );
}