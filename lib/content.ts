export const products = [
  {
    category: "Tables",
    title: "Monolith Dining Table",
    description: "Marble, brushed brass, and sculpted oak in a gallery-scale silhouette.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "Beds",
    title: "Halo Upholstered Bed",
    description: "Soft geometry, tailored linen, and hospitality-inspired comfort.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "Sofas",
    title: "Atelier Crescent Sofa",
    description: "Deep seating and a curving profile that softens large open-plan rooms.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "Decor",
    title: "Collected Accent Series",
    description: "Objects, lighting, and finishing details that complete a layered interior.",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80"
  }
];

export const services = [
  {
    index: "01",
    title: "Furniture Sales",
    description:
      "Source heirloom-worthy tables, beds, sofas, accent seating, and finishing decor with a concierge-led buying experience."
  },
  {
    index: "02",
    title: "Full Home Furnishing",
    description:
      "We plan the visual rhythm of each room, selecting furnishings, textiles, art direction, and spatial flow across the full home."
  },
  {
    index: "03",
    title: "Furniture Renovation",
    description:
      "Beloved pieces are restored through reupholstery, refinishing, detailing, and material upgrades that preserve character."
  }
];

export const portfolio = [
  {
    title: "Townhouse Living Room",
    label: "Before / After",
    layout: "wide",
    images: [
      {
        state: "After",
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
      },
      {
        state: "Before",
        src: "https://images.unsplash.com/photo-1505693416388-c8b8392d4d47?auto=format&fit=crop&w=1400&q=80"
      }
    ]
  },
  {
    title: "Heirloom Chair Restoration",
    label: "Craft Revival",
    layout: "stacked",
    images: [
      {
        state: "Restored",
        src: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1400&q=80"
      },
      {
        state: "Original",
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80"
      }
    ]
  }
] as const;

export const metrics = [
  { value: "240+", label: "Luxury pieces curated annually" },
  { value: "38", label: "Residences furnished end-to-end" },
  { value: "12 yrs", label: "Of restoration craftsmanship" }
];

export const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#collection", label: "Collection" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "Philosophy" },
  { href: "#contact", label: "Contact" }
];
