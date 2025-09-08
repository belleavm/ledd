export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="absolute -inset-8 -z-10 bg-emerald-100/50 rounded-[2rem] rotate-2" />
                {/* LOGO */}
                  <a href="/" className="inline-flex items-center gap-2">
                    <img
                      src="/la-energia-del-dinero-logo.png" 
                      alt="La energía del dinero"
                      className="h-8 w-8 object-contain rounded-md"
                    />
                    <span className="font-semibold tracking-tight">La energía del dinero</span>
                  </a>
            </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#que-es" className="hover:text-emerald-600">El libro</a>
            <a href="#contenido" className="hover:text-emerald-600">Contenido</a>
            <a href="#qr" className="hover:text-emerald-600">QRs interactivos</a>
            <a href="#autor" className="hover:text-emerald-600">Autor(a)</a>
            <Button href="#comprar">Comprar</Button>
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
              <Button href="#comprar">Comprar ahora</Button>
              <ButtonOutline href="#muestra">Leer muestra</ButtonOutline>
            </div>
            <p className="mt-4 text-xs text-neutral-500">Disponible en físico, ebook y audiolibro.</p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-[420px] max-w-full">
              <div className="absolute -inset-8 -z-10 bg-emerald-100/50 rounded-[2rem] rotate-2" />
                <img
                  src="/la-energia-del-dinero-mockup.png"
                  alt="La energía del dinero Mockup del libro"
                  className="w-full h-auto rounded-2xl"
                />
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
            <Li>Energía, creencias y dinero: cómo reescribir tu guion financiero.</Li>
            <Li>Método de presupuesto consciente (con plantilla descargable).</Li>
            <Li>Deuda inteligente y plan de salida paso a paso.</Li>
            <Li>Hábitos diarios: micro‑acciones que cambian tus finanzas.</Li>
            <Li>Ingresos: diseñar nuevas fuentes alineadas a tu propósito.</Li>
            <Li>Rituales de enfoque y visualización para ejecutar con calma.</Li>
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
            <div className="mt-6 flex flex-wrap gap-3">
              <Tag>Plantillas</Tag>
              <Tag>Calculadoras</Tag>
              <Tag>Audios</Tag>
              <Tag>Referencias</Tag>
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
            <img
              src="/la-energia-del-dinero-mockup-2.png"
              alt="La energía del dinero"
              className="h-120 w-120 object-contain"
            />
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
            <Button href="https://www.amazon.com/-/es/Claudio-Morgan-ebook/dp/B088JWV5K2/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=la+energia+del+dinero&qid=1634493874&sr=8-1">Comprar eBook</Button>
            <ButtonOutline href="https://www.amazon.com/Energ%C3%ADa-del-Dinero-Creer-conscientemente/dp/B0CY4TCGQD/ref=tmm_aud_swatch_0?_encoding=UTF8&qid=1634493874&sr=8-1">Comprar Audiolibro</ButtonOutline>
          </div>
          <p className="mt-3 text-sm text-neutral-500">Pago seguro. Acceso inmediato a los recursos digitales.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold">
                <img
                  src="/la-energia-del-dinero-logo.png"
                  alt="La energía del dinero"
                  className="h-5 w-5 object-contain rounded"
                />
                La energía del dinero</div>
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
            <div className="mt-3">
              <a
                href="https://tally.so/r/3yONyp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-emerald-600 bg-emerald-600 px-6 py-3 text-white font-medium hover:bg-emerald-700 transition"
                >
                Regístrate aquí
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ------- Subcomponentes sin TypeScript ni styled-jsx -------
function Button({ href = '#', children }) {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-xl border border-emerald-600 bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700 transition">
      {children}
    </a>
  );
}

function ButtonOutline({ href = '#', children }) {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-xl border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50 font-medium transition">
      {children}
    </a>
  );
}

function Tag({ children }) {
  return <div className="rounded-full border px-3 py-1 text-sm">{children}</div>;
}

function Li({ children }) {
  return (
    <li className="relative pl-6">
      <span className="absolute left-0 top-0.5 text-emerald-600" aria-hidden>✓</span>
      {children}
    </li>
  );
}

function Sparkles() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-600" fill="currentColor" aria-hidden>
      <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zm6 10l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM6 12l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
    </svg>
  );
}

function Gauge() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
      <path d="M12 12l4-4" />
    </svg>
  );
}

function QRIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-600" fill="currentColor" aria-hidden>
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
          <svg viewBox="0 0 24 24" className="w-24 h-24" fill="currentColor" aria-hidden>
            <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 8v-4h-2v-2h4v6h-2zm6-6h-2v-2h2v2z" />
          </svg>
        </div>
        <ul className="text-sm space-y-2">
          <Li>Instrucciones paso a paso</Li>
          <Li>Descarga en Google Sheets</Li>
          <Li>Video guía (10 min)</Li>
          <Li>Bibliografía ampliada</Li>
        </ul>
      </div>
      <Button className="w-full mt-6" href="#">Abrir recurso</Button>
    </div>
  );
}

function Card({ title, desc, icon }) {
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

function Testimonial({ text, name }) {
  return (
    <figure className="rounded-2xl border p-5 bg-white shadow-sm">
      <blockquote className="text-neutral-800 leading-relaxed">“{text}”</blockquote>
      <figcaption className="mt-3 text-sm text-neutral-600">— {name}</figcaption>
    </figure>
  );
}
