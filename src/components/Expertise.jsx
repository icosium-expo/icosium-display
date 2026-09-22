import React from 'react';

export default function Expertise() {
  const items = [
    {
      num: '01',
      color: 'bg-orange-50 text-[#FF6B00] border-orange-100',
      title: 'Stands & Showrooms sur Mesure',
      desc: 'Conception architecturale pour salons professionnels (DJAZAGRO, FPA, FIA) et aménagement permanent de vos espaces commerciaux.'
    },
    {
      num: '02',
      color: 'bg-blue-50 text-[#3A86FF] border-blue-100',
      title: 'Enseignes Lumineuses & Signalétique',
      desc: 'Fabrication de caissons lumineux, lettres en relief (LED), totems et signalétique extérieure pour une visibilité optimale de jour comme de nuit.'
    },
    {
      num: '03',
      color: 'bg-slate-100 text-[#0B132B] border-slate-200',
      title: 'Modélisation 3D & Découpe CNC',
      desc: 'Visualisation 3D photoréaliste avant fabrication. Usinage de précision sur bois, PVC, aluminium et panneaux pour des finitions irréprochables.'
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FF6B00] font-bold text-sm uppercase tracking-wider">Solutions Sur Mesure</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] mt-2 mb-4">L'Excellence de la Conception à l'Installation</h2>
          <p className="text-slate-600">Des Espaces et des Enseignes Pensés Pour Maximiser Votre Visibilité et Refléter Votre Identité Visuelle.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.num} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center font-black text-xl mb-6 border`}>
                {item.num}
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}