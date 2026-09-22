import { salonsSafexImages } from '../galerie/imagesConfig';
const { fpaImg, jazagroImg, fiaImg, algeriaImg } = salonsSafexImages;

export default function SalonsSection() {
  const salons = [
    {
      badge: 'Production Nationale',
      badgeColor: 'bg-slate-700',
      img: fpaImg,
      alt: 'Foire de la Production Algérienne FPA',
      title: 'FPA 2026',
      subtitle: 'Industrie & Économie',
      date: 'Fin 2026',
      footer: 'Safex, Alger',
      border: 'border-slate-700'
    },
    {
      badge: 'Agroalimentaire',
      badgeColor: 'bg-[#FF6B00]',
      img: jazagroImg,
      alt: 'Salon DJAZAGRO',
      title: 'Salon DJAZAGRO',
      subtitle: 'Production Agroalimentaire',
      date: 'Printemps 2027',
      footer: 'Safex, Alger',
      border: 'border-[#FF6B00]'
    },
    {
      badge: 'Événement Phare',
      badgeColor: 'bg-slate-700',
      img: fiaImg,
      alt: "58e Édition Algiers International Fair",
      title: "FIA (Foire d'Alger)",
      subtitle: 'Commerce & Industrie',
      date: 'Juin 2027',
      footer: 'Exhibition Center, Pins Maritimes',
      border: 'border-slate-700'
    }
  ];

  return (
    <section id="salons" className="py-24 bg-[#0B132B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-[#FF6B00] font-bold text-sm uppercase tracking-wider">Présence Nationale</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">Au cœur des grands rendez-vous professionnels</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">De la FPA à DJAZAGRO et la FIA, nous accompagnons les exposants avec une rigueur absolue sur les délais.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* ====== 3 CARTES SALONS SAFEX ====== */}
        {salons.map((s, i) => (
          <div key={i} className={`bg-[#16223d] rounded-2xl border-2 ${s.border} text-center flex flex-col justify-between relative shadow-xl overflow-hidden`}>
            <span className={`absolute top-2 left-1/2 transform -translate-x-1/2 ${s.badgeColor} text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-widest z-10`}>
              {s.badge}
            </span>
            <div className="w-full h-36 bg-slate-900 overflow-hidden relative">
              <img src={s.img} alt={s.alt} className="w-full h-full object-cover opacity-90 hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16223d] via-transparent to-transparent"></div>
            </div>
            <div className="p-6 pt-2">
              <p className="text-base font-bold text-white mb-1">{s.title}</p>
              <span className="text-xs text-[#FF6B00] font-semibold uppercase tracking-wider block mb-2">{s.subtitle}</span>
              <p className="text-xs text-slate-300 font-medium bg-black/30 py-1.5 px-2 rounded-lg mt-2">{s.date}</p>
            </div>
            <div className="mx-6 mb-6 pt-4 border-t border-slate-700/60 text-xs text-slate-400">{s.footer}</div>
          </div>
        ))}

        {/* ====== 4ème CARTE : SALONS RÉGIONAUX AVEC ALGERIA MAP ====== */}
        <div className="bg-[#1C2541] rounded-2xl border border-slate-800 text-center flex flex-col justify-between relative overflow-hidden">
          <span className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-[#FF6B00] text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-widest z-10">
            Déploiement National
          </span>
          <div className="w-full h-36 bg-slate-900 overflow-hidden relative">
            {algeriaImg && (
              <>
                <img
                  src={algeriaImg}
                  alt="Carte de l'Algérie - 58 Wilayas couvertes"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2541] via-transparent to-transparent"></div>
              </>
            )}
          </div>
          <div className="p-6 pt-2">
            <p className="text-lg font-bold text-white mb-1">Salons Régionaux</p>
            <span className="text-xs text-[#FF6B00] font-semibold uppercase tracking-wider block mb-2">Événements sur mesure</span>
            <p className="text-xs text-slate-300 font-medium bg-black/30 py-1.5 px-2 rounded-lg mt-2">69 Wilayas couvertes</p>
          </div>
          <div className="mx-6 mb-6 pt-4 border-t border-slate-700/60 text-xs text-slate-400">
            Logistique intégrée · Déploiement national
          </div>
        </div>

      </div>
    </section>
  );
}