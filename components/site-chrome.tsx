import { navItems } from "@/lib/content";

export function AmbientOrbs() {
  return (
    <>
      <div
        data-ambient
        className="pointer-events-none fixed left-[-12vw] top-[8vh] -z-10 h-[40vw] w-[40vw] rounded-full bg-[rgba(198,160,108,0.28)] blur-[90px]"
      />
      <div
        data-ambient
        className="pointer-events-none fixed bottom-[10vh] right-[-10vw] -z-10 h-[38vw] w-[38vw] rounded-full bg-[rgba(255,232,204,0.14)] blur-[90px]"
      />
      <div
        data-ambient
        className="pointer-events-none fixed left-[34vw] top-[12vh] -z-10 h-[24vw] w-[24vw] rounded-full bg-[rgba(255,244,225,0.14)] blur-[100px]"
      />
    </>
  );
}

export function TopBar() {
  return (
    <header className="section-shell luminous-ring sticky top-4 z-30 mt-4 flex items-center justify-between gap-4 rounded-full border border-[var(--line)] bg-[rgba(13,10,8,0.66)] px-4 py-3 backdrop-blur-xl md:px-5">
      <a href="#hero" className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(198,160,108,0.34),rgba(255,255,255,0.08))] font-serif text-xl tracking-[0.18em]">
          KC
        </span>
        <span className="flex flex-col leading-none">
          <strong className="text-sm font-semibold md:text-base">Kivu Creative</strong>
          <span className="hidden text-[0.7rem] text-[var(--muted)] md:block">
            Interior artistry & heirloom furniture
          </span>
        </span>
      </a>

      <nav className="hidden items-center gap-6 lg:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-link text-sm">
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="hidden rounded-full border border-[var(--line)] px-5 py-3 text-sm transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(198,160,108,0.55)] md:inline-flex"
      >
        Book a Consultation
      </a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="section-shell py-10 text-sm text-[var(--muted)]">
      <div className="panel luminous-ring flex flex-col gap-6 rounded-[2rem] px-6 py-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-3">Kivu Creative</p>
          <p className="max-w-xl leading-7">
            Luxury furniture, full-home furnishing, and restoration with a distinctly artistic
            point of view.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function SectionHero({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="panel luminous-ring reveal relative overflow-hidden rounded-[2.4rem] px-6 py-12 md:px-10 md:py-16">
        <div className="pointer-events-none absolute -right-10 top-0 h-40 w-52 rounded-full bg-[radial-gradient(circle,rgba(255,245,226,0.18),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[12%] h-36 w-60 rounded-full bg-[radial-gradient(circle,rgba(198,160,108,0.16),transparent_72%)] blur-3xl" />
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="heading-section max-w-[12ch]">{title}</h1>
        <p className="copy-muted mt-6 max-w-3xl text-lg">{description}</p>
      </div>
    </section>
  );
}
