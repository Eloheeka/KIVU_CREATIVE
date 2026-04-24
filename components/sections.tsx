import Image from "next/image";
import { metrics, portfolio, products, services } from "@/lib/content";

export function HomeHero() {
  return (
    <section id="hero" className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-10 py-10 md:py-16 lg:grid-cols-[1.04fr_0.96fr]">
      <div className="reveal">
        <p className="eyebrow">Luxury Interiors, Curated with Intent</p>
        <h1 className="heading-display max-w-[10ch]">
          Sculptural furniture and complete home styling for spaces that feel collected and cinematic.
        </h1>
        <p className="copy-muted mt-6 max-w-2xl text-[1rem] md:text-[1.05rem]">
          From statement tables and refined sofas to full-house furnishing and artisan restoration,
          Kivu Creative transforms interiors into living galleries.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#collection"
            className="light-sweep rounded-full bg-[linear-gradient(135deg,#e2c496_0%,#c59a61_100%)] px-6 py-3.5 font-semibold text-[#17120d] shadow-[0_16px_40px_rgba(184,143,87,0.34)] transition duration-200 hover:-translate-y-1"
          >
            Explore the Collection
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full px-1 py-3 text-[var(--muted)] transition duration-200 hover:-translate-y-1 hover:text-[var(--text)]"
          >
            View Transformations <span aria-hidden="true">-&gt;</span>
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="panel luminous-ring rounded-[1.25rem] p-5">
              <strong className="block text-2xl font-semibold">{metric.value}</strong>
              <span className="mt-1 block text-sm text-[var(--muted)]">{metric.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="reveal reveal-delay-1">
        <div className="relative pb-20 pl-0 md:pl-8">
          <div className="tilt-card image-shine panel luminous-ring relative aspect-[0.88] overflow-hidden rounded-[2rem] border border-white/10">
            <div className="pointer-events-none absolute inset-x-[8%] top-0 z-10 h-24 rounded-full bg-[radial-gradient(circle,rgba(255,246,230,0.34),transparent_72%)] blur-2xl" />
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
              alt="Elegant luxury bedroom interior"
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="tilt-card image-shine panel luminous-ring absolute bottom-4 right-0 aspect-[0.78] w-[42%] overflow-hidden rounded-[1.75rem] border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
              alt="Minimal lounge space with designer sofa"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="luminous-ring absolute bottom-0 left-4 w-[calc(100%-2rem)] rounded-[1.25rem] border border-white/10 bg-[rgba(13,10,8,0.7)] p-5 backdrop-blur-xl md:left-0 md:w-[18rem]">
            <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]">
              Curated for refined living
            </span>
            <strong className="font-serif text-3xl font-semibold leading-tight">
              Art gallery calm. Boutique hotel warmth.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntroSection() {
  return (
    <section className="section-shell reveal grid gap-8 py-14 md:grid-cols-[0.95fr_1.05fr] md:items-end">
      <div>
        <p className="eyebrow">Signature Offering</p>
        <h2 className="heading-section max-w-[12ch]">Objects with presence. Rooms with a story.</h2>
      </div>
      <p className="copy-muted max-w-3xl text-lg">
        We create elevated interiors through a blend of collectible furniture, layered styling,
        and sensitive restoration. Every room is treated as a composition of texture, proportion,
        and emotional atmosphere.
      </p>
    </section>
  );
}

export function ProductSection({ preview = false, id }: { preview?: boolean; id?: string }) {
  const items = preview ? products.slice(0, 3) : products;

  return (
    <section id={id} className="section-shell py-16">
      <div className="reveal max-w-4xl">
        <p className="eyebrow">Furniture Catalog</p>
        <h2 className="heading-section">
          Luxury forms designed to anchor exceptional interiors.
        </h2>
      </div>

      <div className={`mt-8 grid gap-5 ${preview ? "md:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-4"}`}>
        {items.map((product, index) => (
          <article
            key={product.title}
            className={`panel tilt-card luminous-ring overflow-hidden rounded-[1.6rem] transition duration-300 hover:-translate-y-2 hover:border-[rgba(198,160,108,0.45)] ${index > 0 ? "reveal reveal-delay-1" : "reveal"}`}
          >
            <div className="image-shine relative aspect-[0.88] overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition duration-700 hover:scale-110 hover:saturate-110"
              />
            </div>
            <div className="p-6">
              <span className="inline-flex rounded-full bg-[var(--gold-soft)] px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--gold)]">
                {product.category}
              </span>
              <h3 className="mt-4 font-serif text-[2rem] leading-none font-semibold">{product.title}</h3>
              <p className="copy-muted mt-3 text-sm">{product.description}</p>
            </div>
          </article>
        ))}
      </div>

      {preview ? (
        <div className="mt-8 reveal">
          <a href="#collection" className="nav-link text-sm">
            View full collection
          </a>
        </div>
      ) : null}
    </section>
  );
}

export function ServicesSection({ preview = false, id }: { preview?: boolean; id?: string }) {
  const items = preview ? services.slice(0, 2) : services;

  return (
    <section id={id} className="section-shell py-16">
      <div className="reveal max-w-4xl">
        <p className="eyebrow">Services</p>
        <h2 className="heading-section">
          From a single statement piece to a fully furnished home.
        </h2>
      </div>

      <div className={`mt-8 grid gap-5 ${preview ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
        {items.map((service, index) => (
          <article
            key={service.title}
            className={`panel luminous-ring reveal relative min-h-[18rem] overflow-hidden rounded-[1.7rem] p-7 transition duration-300 hover:-translate-y-2 ${index === 1 ? "reveal-delay-1" : ""} ${index === 2 ? "reveal-delay-2" : ""}`}
          >
            <div className="pointer-events-none absolute -bottom-14 -right-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(198,160,108,0.28),transparent_70%)] opacity-90 transition duration-300" />
            <span className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">{service.index}</span>
            <h3 className="mt-5 font-serif text-[2rem] leading-none font-semibold">{service.title}</h3>
            <p className="copy-muted mt-4 text-sm">{service.description}</p>
          </article>
        ))}
      </div>

      {preview ? (
        <div className="mt-8 reveal">
          <a href="#services" className="nav-link text-sm">
            Explore all services
          </a>
        </div>
      ) : null}
    </section>
  );
}

export function PortfolioSection({ preview = false, id }: { preview?: boolean; id?: string }) {
  const items = preview ? portfolio.slice(0, 1) : portfolio;

  return (
    <section id={id} className="section-shell py-16">
      <div className="reveal max-w-4xl">
        <p className="eyebrow">Portfolio</p>
        <h2 className="heading-section">
          Before-and-after transformations with warmth, depth, and clarity.
        </h2>
      </div>

      <div className={`mt-8 grid gap-5 ${preview ? "" : "xl:grid-cols-[1.08fr_0.92fr]"}`}>
        {items.map((project, index) => (
          <article
            key={project.title}
            className={`panel luminous-ring reveal rounded-[2rem] p-4 ${index === 1 ? "reveal-delay-1" : ""}`}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="text-sm text-[var(--muted)]">{project.title}</span>
              <strong className="text-sm font-semibold">{project.label}</strong>
            </div>

            <div className={`grid gap-4 ${project.layout === "wide" ? "md:grid-cols-[1.2fr_0.8fr]" : ""}`}>
              {project.images.map((image) => (
                <div
                  key={image.state}
                  className="image-shine relative min-h-[20rem] overflow-hidden rounded-[1.5rem]"
                >
                  <Image
                    src={image.src}
                    alt={`${project.title} ${image.state}`}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[rgba(13,10,8,0.78)] px-3 py-1.5 text-sm">
                    {image.state}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      {preview ? (
        <div className="mt-8 reveal">
          <a href="#portfolio" className="nav-link text-sm">
            See the full portfolio
          </a>
        </div>
      ) : null}
    </section>
  );
}

export function AboutSection({ id }: { id?: string }) {
  return (
    <section id={id} className="section-shell grid gap-5 py-16 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="reveal pr-0 lg:pr-6">
        <p className="eyebrow">Design Philosophy</p>
        <h2 className="heading-section max-w-[12ch]">
          We treat every interior as an atmosphere, not just a layout.
        </h2>
        <p className="copy-muted mt-6">
          Kivu Creative is guided by restraint, tactility, and emotional depth. We favor
          sculptural silhouettes, natural materials, and a quiet confidence that lets
          craftsmanship take the lead.
        </p>
        <p className="copy-muted mt-4">
          Our work blends the discipline of interior design with the sensitivity of curatorial
          storytelling, creating rooms that feel both elevated and deeply lived in.
        </p>
      </div>

      <div className="reveal reveal-delay-1">
        <div className="panel luminous-ring relative min-h-[22rem] overflow-hidden rounded-[2rem] p-8">
          <div className="pointer-events-none absolute inset-x-[10%] top-0 z-10 h-28 rounded-full bg-[radial-gradient(circle,rgba(255,246,230,0.28),transparent_72%)] blur-3xl" />
          <Image
            src="https://images.unsplash.com/photo-1505693416388-c8b8392d4d47?auto=format&fit=crop&w=1400&q=80"
            alt="Moody luxury interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end">
            <p className="max-w-[11ch] font-serif text-4xl leading-[0.94] font-semibold md:text-6xl">
              Luxury should feel inevitable, balanced, and impossible to forget.
            </p>
            <span className="mt-5 text-sm text-[#eadfce]">Founder, Kivu Creative</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ id }: { id?: string }) {
  return (
    <section id={id} className="section-shell py-16 pb-20">
      <div className="panel luminous-ring reveal relative grid gap-8 overflow-hidden rounded-[2.25rem] p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="pointer-events-none absolute -right-12 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,245,226,0.2),transparent_68%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[18%] h-32 w-52 rounded-full bg-[radial-gradient(circle,rgba(198,160,108,0.16),transparent_70%)] blur-3xl" />
        <div>
          <p className="eyebrow">Start Your Project</p>
          <h2 className="heading-section max-w-[12ch]">
            Bring an artful calm to your next room, residence, or restoration.
          </h2>
          <p className="copy-muted mt-5">
            Share your vision and we&apos;ll shape a furnishing strategy tailored to your home,
            lifestyle, and architectural mood.
          </p>
        </div>

        <form className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-[var(--muted)]">
            Name
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-[var(--line)] bg-white/[0.05] px-4 py-3.5 text-[var(--text)] outline-none transition focus:border-[rgba(198,160,108,0.55)] focus:bg-white/[0.08]"
            />
          </label>
          <label className="grid gap-2 text-sm text-[var(--muted)]">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-2xl border border-[var(--line)] bg-white/[0.05] px-4 py-3.5 text-[var(--text)] outline-none transition focus:border-[rgba(198,160,108,0.55)] focus:bg-white/[0.08]"
            />
          </label>
          <label className="grid gap-2 text-sm text-[var(--muted)]">
            Project Type
            <select className="rounded-2xl border border-[var(--line)] bg-white/[0.05] px-4 py-3.5 text-[var(--text)] outline-none transition focus:border-[rgba(198,160,108,0.55)] focus:bg-white/[0.08]">
              <option>Furniture Purchase</option>
              <option>Full Home Furnishing</option>
              <option>Furniture Renovation</option>
            </select>
          </label>
          <div className="hidden md:block" />
          <label className="grid gap-2 text-sm text-[var(--muted)] md:col-span-2">
            Vision
            <textarea
              rows={5}
              placeholder="Tell us about your space, style, or renovation goals."
              className="rounded-2xl border border-[var(--line)] bg-white/[0.05] px-4 py-3.5 text-[var(--text)] outline-none transition focus:border-[rgba(198,160,108,0.55)] focus:bg-white/[0.08]"
            />
          </label>
          <button
            type="submit"
            className="light-sweep inline-flex w-fit rounded-full bg-[linear-gradient(135deg,#e2c496_0%,#c59a61_100%)] px-6 py-3.5 font-semibold text-[#17120d] shadow-[0_16px_40px_rgba(184,143,87,0.34)] transition duration-200 hover:-translate-y-1 md:col-span-2"
          >
            Request a Design Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
