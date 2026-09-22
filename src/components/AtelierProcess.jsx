import React from 'react';

export default function AtelierProcess() {
  const points = [
    { title: 'Conception & Design Graphique', desc: 'Création Visuelle, Chartes Graphiques et Modélisation 3D de Vos Projets.' },
    { title: 'Fabrication & Aménagement des Showrooms sur Mesure', desc: "Création d'Espaces Commerciaux Exclusifs, Agencement et Mobilier Dédié." },
    { title: 'Enseignes Lumineuses & Signalétique', desc: 'Fabrication de Caissons Lumineux, Lettres Boîtiers Relief LED et Totems.' },
    { title: 'Usinage CNC & Découpe sur Mesure', desc: 'Usinage de Panneaux Bois, Aluminium et Plastiques sur Machine CNC.' }
  ];

  const steps = [
    { num: '01', title: 'Brief & Cahier des charges', desc: 'Analyse de Vos Objectifs et de Votre Identité.' },
    { num: '02', title: 'Conception 3D & Plans cotés', desc: 'Rendus Photoréalistes et Validation Visuelle.' },
    { num: '03', title: 'Fabrication en Atelier', desc: 'Usinage CNC, Éclairage LED et Finitions.' },
    { num: '04', title: 'Pose & Installation sur site', desc: 'Installation Clé en Main sur Votre Site ou Salon.' }
  ];

  return (
    <section id="atelier" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-[#FF6B00] font-bold text-sm uppercase tracking-wider">Savoir-Faire Local</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] mt-2 mb-6">Notre Atelier et Showroom à Bachdjerah, Alger</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Contrairement aux intermédiaires, nous maîtrisons l'intégralité de la chaîne de production. De la première esquisse sur écran jusqu'à l'assemblage final en atelier et l'installation sur site.
            </p>
            <div className="space-y-4">
              {points.map((p, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center font-bold text-sm shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-[#0B132B]">{p.title}</h4>
                    <p className="text-sm text-slate-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 bg-[#0B132B] text-white p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#FF6B00]/10 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-black mb-4">Notre Méthode en 4 Étapes</h3>
            <ul className="space-y-6 relative z-10">
              {steps.map((s, i) => (
                <li key={i} className={`flex items-center space-x-4 ${i < steps.length - 1 ? 'border-b border-slate-800 pb-4' : ''}`}>
                  <span className="text-[#FF6B00] font-black text-xl">{s.num}</span>
                  <div>
                    <strong className="block text-white">{s.title}</strong>
                    <span className="text-sm text-slate-400">{s.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}