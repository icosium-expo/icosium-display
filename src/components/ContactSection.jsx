import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    salon: '',
    surface: '',
    description: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '41acdb97-ec77-43d9-a9ac-b291ff583925',
          subject: `Nouvelle demande de devis - ${formData.nom}`,
          from_name: 'Site Icosium Display',
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ nom: '', telephone: '', email: '', salon: '', surface: '', description: '' });
      } else {
        setError("Erreur lors de l'envoi. Veuillez nous contacter par téléphone.");
      }
    } catch (err) {
      setError("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#FF6B00] font-bold text-sm uppercase tracking-wider">Parlons de votre projet</span>
          <h2 className="text-3xl font-extrabold text-[#0B132B] mt-2 mb-3">Obtenez votre devis sous 24&nbsp;h</h2>
          <p className="text-slate-600">Remplissez ce formulaire ou contactez-nous directement.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-700">
            <a href="tel:+213550886640"><span aria-hidden="true">📞</span> +213 (0) 550 88 66 40</a>
            <a href="tel:+213552940009"><span aria-hidden="true">📞</span> +213 (0) 552 94 00 09</a>
            <a href="mailto:contact@icosium-expo.com"><span aria-hidden="true">✉️</span> contact@icosium-expo.com</a>
          </div>
        </div>

        {submitted ? (
          <div role="status" aria-live="polite" className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-3xl text-center space-y-3">
            <h3 className="text-xl font-bold">Demande bien reçue !</h3>
            <p className="text-sm">Notre équipe commerciale vous contactera rapidement.</p>
            <button onClick={() => setSubmitted(false)} className="mt-4 text-xs font-semibold underline cursor-pointer">
              Envoyer une autre demande
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {error && <div role="alert" className="bg-red-50 text-red-700 p-4 rounded-xl text-sm">{error}</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-semibold text-slate-700 mb-2">Nom / Entreprise *</label>
                <input type="text" id="nom" name="nom" autoComplete="name" required value={formData.nom} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00]" placeholder="Votre nom" />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-slate-700 mb-2">Téléphone *</label>
                <input type="tel" id="telephone" name="telephone" autoComplete="tel" inputMode="tel" required value={formData.telephone} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00]" placeholder="+213 5XX XX XX XX" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">E-mail *</label>
              <input type="email" id="email" name="email" autoComplete="email" spellCheck={false} required value={formData.email} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00]" placeholder="contact@exemple.com" />
            </div>
            <div>
              <label htmlFor="salon" className="block text-sm font-semibold text-slate-700 mb-2">Projet (Salon / Enseigne / Showroom)</label>
              <input type="text" id="salon" name="salon" autoComplete="off" value={formData.salon} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00]" placeholder="ex: DJAZAGRO, FPA, FIA…" />
            </div>
            <div>
              <label htmlFor="surface" className="block text-sm font-semibold text-slate-700 mb-2">Dimensions / Surface estimée</label>
              <input type="text" id="surface" name="surface" autoComplete="off" value={formData.surface} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00]" placeholder="ex: Stand 36 m²" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-2">Description de votre besoin</label>
              <textarea id="description" name="description" autoComplete="off" rows="4" value={formData.description} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00]" placeholder="Détails du projet…"></textarea>
            </div>
            <button type="submit" disabled={submitting} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF6B00] w-full bg-[#FF6B00] hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 rounded-xl transition cursor-pointer">
              {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}