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
      // FormSubmit : envoie vers contact@icosium-expo.com
      // Pour envoyer aussi à info@icosium-expo.com, change l'URL par :
      // https://formsubmit.co/ajax/contact@icosium-expo.com,info@icosium-expo.com
      const response = await fetch('https://formsubmit.co/ajax/contact@icosium-expo.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nouvelle demande de devis - ${formData.nom}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nom: '', telephone: '', email: '', salon: '', surface: '', description: '' });
      } else {
        setError("Erreur lors de l'envoi. Veuillez nous contacter par téléphone.");
      }
    } catch (err) {
      setError("Erreur de connexion internet.");
    } finally {
      setSubmitting(false);
    }
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

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-3xl text-center space-y-3">
            <h3 className="text-xl font-bold">Demande bien reçue !</h3>
            <p className="text-sm">Notre équipe commerciale vous contactera rapidement.</p>
            <button onClick={() => setSubmitted(false)} className="mt-4 text-xs font-semibold underline cursor-pointer">
              Envoyer une autre demande
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {error && <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm">{error}</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nom / Entreprise *</label>
                <input type="text" id="nom" required value={formData.nom} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Téléphone *</label>
                <input type="tel" id="telephone" required value={formData.telephone} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white" placeholder="+213 ..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">E-mail *</label>
              <input type="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white" placeholder="contact@exemple.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description de votre besoin</label>
              <textarea id="description" rows="4" value={formData.description} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white" placeholder="Détails..."></textarea>
            </div>
            <button type="submit" disabled={submitting} className="w-full bg-[#FF6B00] hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition cursor-pointer">
              {submitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}