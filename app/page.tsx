export default function LaEnergiaDelDineroLanding() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoPig size={28} />
            <span className="font-semibold tracking-tight">La energía del dinero</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#que-es" className="hover:text-emerald-600">El libro</a>
            <a href="#contenido" className="hover:text-emerald-600">Contenido</a>
            <a href="#qr" className="hover:text-emerald-600">QRs interactivos</a>
            <a href="#autor" className="hover:text-emerald-600">Autor(a)</a>
            <a href="#comprar" className="btn">Comprar</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              La <span className="text-emerald-600">energía</span> del dinero
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              <em>Creer es Crear conscientemente el éxito.</em> Un método práctico y amable para
              reprogramar tu relación con el dinero, tomar decisiones más inteligentes y diseñar una vida
              en equilibrio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#comprar" className="btn">Comprar ahora</a>
              <a href="#muestra" className="btn-outline">Leer muestra</a>
            </div>
            <p className="mt-4 text-xs text-neutral-500">
              Disponible en físico, ebook y audiolibro.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-[420px] max-w-full">
              <div className="absolute -inset-8 -z-10 bg-emerald-100/50 rounded-[2rem] rotate-2" />
              <CoverArt />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section id="que-es" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">¿Qué hace diferente a este libro?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card title="Lenguaje claro y cercano" desc="Nada de jerga técnica: ejemplos cotidianos y ejercicios guiados para que cualquier persona pueda aplicarlo desde el día 1." icon={<Sparkles />} />
            <Card title="Marco práctico" desc="Herramientas para presupuesto consciente, hábitos financieros y mentalidad de abundancia con resultados medibles." icon={<Gauge />} />
            <Card title="Contenido vivo" desc="Cada capítulo conecta con recursos dinámicos mediante códigos QR: plantillas, calculadoras y audios complementarios." icon={<QRIcon />} />
          </div>
        </div>
      </section>

      {/* ÍNDICE / CONTENIDO */}
      <section id="contenido" className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Dentro encontrarás</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-4 text-neutral-700">
            <li className="li">Energía, creencias y dinero: cómo reescribir tu guion financiero.</li>
            <li className="li">Método de presupuesto consciente (con plantilla descargable).</li>
            <li className="li">Deuda inteligente y plan de salida paso a paso.</li>
            <li className="li">Hábitos diarios: micro?acciones que cambian tus finanzas.</li>
            <li className="li">Ingresos: diseñar nuevas fuentes alineadas a tu propósito.</li>
            <li className="li">Rituales de enfoque y visualización para ejecutar con calma.</li>
          </ul>
        </div>
      </section>

      {/* QRs INTERACTIVOS */}
      <section id="qr" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Una lectura que continúa online</h2>
            <p className="mt-4 text-neutral-700">
              Cada capítulo incluye códigos QR que te llevan a una <span className="text-emerald-600 font-semibold">landing exclusiva</span>
              con recursos: calculadoras, ejercicios guiados, audios y bibliografía ampliada. Todo se actualiza con el tiempo
              para que siempre tengas la versión más útil.
            </p>
            <div className="mt-6 flex gap-3">
              <div className="tag">Plantillas</div>
              <div className="tag">Calculadoras</div>
              <div className="tag">Audios</div>
              <div className="tag">Referencias</div>
            </div>
          </div>
          <div className="flex justify-center">
            <QRMockup />
          </div>
        </div>
      </section>

      {/* AUTOR(A) */}
      <section id="autor" className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold">Sobre el autor(a)</h2>
            <p className="mt-4 text-neutral-700">
              Claudio Morgan comparte un enfoque práctico y consciente para ordenar las finanzas personales sin perder de vista
              el bienestar. Esta edición digital ampliada suma recursos interactivos creados por el equipo de <em>La energía del dinero</em>.
            </p>
          </div>
          <div className="flex md:justify-end">
            <LogoPig size={88} />
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Lo que dicen lectores</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Testimonial text="Por fin entendí mi relación con el dinero sin culpas. Los ejercicios me ordenaron la cabeza." name="Valeria P." />
            <Testimonial text="Las plantillas y QRs son oro. Apliqué el método y en 6 semanas salí del sobregiro." name="Diego R." />
            <Testimonial text="Lenguaje sencillo, cero sermones. Se siente como tener un coach amable a tu lado." name="María F." />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="comprar" className="border-t bg-emerald-50/40">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold">Empieza hoy</h2>
          <p className="mt-3 text-neutral-700">El mejor momento para ordenar tus finanzas era ayer. El segundo mejor es ahora.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#" className="btn">Comprar edición física</a>
            <a href="#" className="btn-outline">Ebook / Audiolibro</a>
          </div>
          <p className="mt-3 text-sm text-neutral-500">Pago seguro. Acceso inmediato a los recursos digitales.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold"><LogoPig size={22} /> La energía del dinero</div>
            <p>© {new Date().getFullYear()} La Energía del Dinero. Todos los derechos reservados.</p>
          </div>
          <div>
            <p className="font-semibold">Enlaces</p>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-emerald-600" href="#muestra">Muestra</a></li>
              <li><a className="hover:text-emerald-600" href="#qr">Recursos</a></li>
              <li><a className="hover:text-emerald-600" href="#">Políticas</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Suscríbete</p>
            <p className="mt-2 text-neutral-600">Recibe nuevos ejercicios y actualizaciones de los QRs.</p>
            <form className="mt-3 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input className="w-full border rounded-xl px-3 py-2" placeholder="tu@correo.com" />
              <button className="btn" type="submit">Unirme</button>
            </form>
          </div>
        </div>
      </footer>

      {/* Utility styles */}
      <style jsx global>{`
        .btn { @apply inline-flex items-center justify-center rounded-xl border border-emerald-600 bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700 transition; }
        .btn-outline { @apply inline-flex items-center justify-center rounded-xl border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50 font-medium transition; }
        .li { @apply relative pl-6; }
        .li::before { content: '\\2713'; position: absolute; left: 0; top: 0.15rem; @apply text-emerald-600; }
        .tag { @apply rounded-full border px-3 py-1 text-sm; }
      `}</style>
    </main>
  );
}

// ------- Simple, friendly piggy bank cover in line-art to emular el estilo general (no reproduce el arte exacto) -------
function CoverArt() {
  return (
    <svg viewBox="0 0 520 380" className="w-full h-auto drop-shadow-sm">
      {/* suelo */}
      <path d="M10 300 Q 260 340 510 300" fill="none" stroke="#0f172a" strokeWidth="3" />
      {/* billetes */}
      <g>
        <path d="M270 90 l 30 -20 l 40 25 l -35 25 z" fill="#10b981" opacity=".9" />
        <path d="M250 70 l 25 -18 l 36 20 l -28 22 z" fill="#059669" opacity=".9" />
      </g>
      {/* cuerpo */}
      <path d="M120 170 q 30 -60 120 -60 q 140 0 170 110 q 10 40 -10 70 q -30 40 -170 40 q -140 0 -170 -60 q -20 -40 30 -100 z" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinejoin="round" />
      {/* oreja */}
      <path d="M210 120 q -10 25 10 35" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
      {/* ojo */}
      <circle cx="210" cy="210" r="10" fill="#0f172a" />
      {/* hocico */}
      <circle cx="180" cy="245" r="18" fill="white" stroke="#0f172a" strokeWidth="6" />
      <circle cx="172" cy="245" r="4" fill="#0f172a" />
      <circle cx="188" cy="245" r="4" fill="#0f172a" />
      {/* patas */}
      <path d="M220 315 l 0 20" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
      <path d="M360 315 l 0 20" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
      {/* gafas pixel */}
      <rect x="180" y="190" width="120" height="28" rx="4" fill="#0f172a" />
      <rect x="200" y="196" width="8" height="8" fill="white" />
      <rect x="208" y="204" width="8" height="8" fill="white" />
      <rect x="232" y="196" width="8" height="8" fill="white" />
      <rect x="240" y="204" width="8" height="8" fill="white" />
      {/* cadena */}
      <g stroke="#f59e0b" fill="none" strokeWidth="8">
        <path d="M210 150 q 20 10 10 30 q -10 20 -35 25 q -20 5 -35 -10" />
      </g>
      {/* brillos */}
      <path d="M120 260 l 10 -16 l 10 16 l -10 16 z" fill="none" stroke="#0f172a" strokeWidth="4" />
    </svg>
  );
}

function LogoPig({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden>
      <circle cx="32" cy="36" r="22" fill="none" stroke="#0f172a" strokeWidth="3" />
      <circle cx="26" cy="40" r="2" fill="#0f172a" />
      <circle cx="38" cy="40" r="2" fill="#0f172a" />
      <path d="M24 30 q 6 -6 16 0" fill="none" stroke="#0f172a" strokeWidth="3" />
      <rect x="20" y="28" width="24" height="6" rx="2" fill="#0f172a" />
      <path d="M34 16 l 8 -6 l 10 6 l -9 6 z" fill="#10b981" />
    </svg>
  );
}

function Sparkles() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-600" fill="currentColor">
      <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zm6 10l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM6 12l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
    </svg>
  );
}

function Gauge() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
      <path d="M12 12l4-4" />
    </svg>
  );
}

function QRIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-600" fill="currentColor">
      <path d="M3 3h6v6H3V3zm12 0h6v6h-6V3zM3 15h6v6H3v-6zm12 6v-4h-2v-2h4v6h-2zm6-6h-2v-2h2v2z" />
    </svg>
  );
}

function QRMockup() {
  return (
    <div className="relative w-80 max-w-full rounded-2xl border p-5 bg-white shadow-sm">
      <div className="text-sm font-semibold">Recurso del Capítulo 2</div>
      <div className="mt-2 text-xs text-neutral-600">Presupuesto consciente (plantilla)</div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="aspect-square rounded-xl border grid place-content-center">
          {/* QR simple */}
          <svg viewBox="0 0 24 24" className="w-24 h-24" fill="currentColor">
            <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 8v-4h-2v-2h4v6h-2zm6-6h-2v-2h2v2z" />
          </svg>
        </div>
        <ul className="text-sm space-y-2">
          <li className="li">Instrucciones paso a paso</li>
          <li className="li">Descarga en Google Sheets</li>
          <li className="li">Video guía (10 min)</li>
          <li className="li">Bibliografía ampliada</li>
        </ul>
      </div>
      <button className="btn w-full mt-6">Abrir recurso</button>
    </div>
  );
}

function Card({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-5 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="shrink-0">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="mt-2 text-neutral-700">{desc}</p>
    </div>
  );
}

function Testimonial({ text, name }: { text: string; name: string }) {
  return (
    <figure className="rounded-2xl border p-5 bg-white shadow-sm">
      <blockquote className="text-neutral-800 leading-relaxed">?{text}?</blockquote>
      <figcaption className="mt-3 text-sm text-neutral-600">? {name}</figcaption>
    </figure>
  );
}
