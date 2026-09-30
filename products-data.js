/**
 * CASA ANTICA — PRODUCT CATALOG DATABASE
 * Importer & Customized Modular Furniture Maker
 * Crafted As Per Customer's Design, Ideas & Living
 * Email: casaanticasurat@gmail.com | WhatsApp: +91 832 001 2921
 * Engineered by PipoZa Dev Studio (https://pipoza.s.gy/pipoza.in)
 */

const CASA_PRODUCTS = [
  {
    id: "bed-modular-lumina",
    name: "The Lumina Customized Modular Hydraulic Bed",
    category: "beds",
    categoryLabel: "Customized Modular Beds",
    rating: 4.98,
    reviewsCount: 168,
    badge: "Bespoke Design",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Custom Imported German Hydraulic Lift System · Fluted Velvet or Italian Leather Headboard · Solid Teak Structural Frame",
    dimensions: "Tailored to King / Queen / California King or Custom Architectural Room Blueprints",
    description: "Customized modular bed engineered as per your exact bedroom dimensions and aesthetic ideas. Features effortless heavy-duty hydraulic underbed storage, integrated ambient headboard LED channels, and plush acoustic wall panel extensions.",
    finishes: ["boucle", "cognac", "espresso", "walnut"]
  },
  {
    id: "kitchen-aurora-modular",
    name: "The Aurora Bespoke Modular Kitchen Suite",
    category: "kitchens",
    categoryLabel: "Modular Luxury Kitchens",
    rating: 4.99,
    reviewsCount: 142,
    badge: "Direct Importer",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Imported Anti-Fingerprint Acrylic & Natural Wood Veneers · Blum Soft-Close Systems · Seamless Sintered Stone Countertops",
    dimensions: "Precision Custom 3D Space-Planned for Island, L-Shape, Parallel, or U-Shape Architecture",
    description: "Architectural modular kitchen handcrafted as per your family's cooking style and living space. Built with imported waterproof marine-grade carcases, smart pull-out pantries, concealed spice carousels, and integrated profile lighting.",
    finishes: ["espresso", "oak", "walnut"]
  },
  {
    id: "dining-verona-marble",
    name: "The Verona Imported Marble & Walnut Dining Set",
    category: "dining",
    categoryLabel: "Bespoke Dining Sets",
    rating: 4.97,
    reviewsCount: 124,
    badge: "Imported Italian Stone",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Imported Italian Calacatta / Statuario Marble Top · Solid American Walnut Base · Ergonomic Sculpted Dining Chairs",
    dimensions: "Custom 6-Seater (78\"), 8-Seater (96\"), 10-Seater (118\"), or 12-Seater Custom Lengths",
    description: "Commanding dining centerpiece combining the cool, dramatic veins of hand-selected imported Italian marble with warm hand-finished solid American walnut. Custom fabricated with coordinated dining chairs wrapped in stain-resistant performance bouclé.",
    finishes: ["walnut", "teak", "oak"]
  },
  {
    id: "table-arch-center",
    name: "The Arcos Sculptural Fluted Center Table",
    category: "tables",
    categoryLabel: "Designer Center Tables",
    rating: 4.95,
    reviewsCount: 96,
    badge: "Living Focal Point",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Solid Fluted Teak Pedestal · Honed Italian Roman Travertine Marble · Brushed Brass Accent Reveal",
    dimensions: "Round (42\" Dia x 16\"H) or Organic Freeform Custom Sizing",
    description: "Sculptural luxury coffee table crafted to elevate your living room conversation. The fluted wooden base provides rich architectural shadows, topped with a velvety honed natural travertine stone plate.",
    finishes: ["walnut", "oak", "teak"]
  },
  {
    id: "wardrobe-celeste-glass",
    name: "The Celeste Walk-In Modular Wardrobe System",
    category: "wardrobes",
    categoryLabel: "Custom Modular Wardrobes",
    rating: 4.98,
    reviewsCount: 156,
    badge: "Smart Modular Storage",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Smoked Bronze Aluminum Framing · Imported Fluted / Tinted Toughened Glass · Textured Leatherette Drawer Liners",
    dimensions: "Floor-to-Ceiling Customized to Any Room Height & Linear Running Foot",
    description: "Bespoke modular wardrobe tailored to your clothing collection, jewelry storage, and lifestyle habits. Features whisper-quiet imported sliding gear, integrated motion-sensor warm LED illumination, and velvet accessory drawers.",
    finishes: ["espresso", "walnut", "oak"]
  },
  {
    id: "corporate-apex-executive",
    name: "The Apex Corporate Executive Boardroom Table",
    category: "corporate",
    categoryLabel: "Corporate & Office Furniture",
    rating: 4.96,
    reviewsCount: 88,
    badge: "Commercial Luxury",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Book-Matched American Walnut Veneer · Laser-Cut Heavy Gauge Steel Underframe · Concealed Smart Wire Conduits",
    dimensions: "12-Foot (Seats 10), 16-Foot (Seats 14), or 24-Foot Custom Corporate Specifications",
    description: "Engineered for high-stakes executive boardrooms and modern corporate headquarters. Integrates flip-up pop-up power boxes, HDMI/USB-C data hubs, and acoustic privacy dividers crafted as per corporate architectural blueprints.",
    finishes: ["walnut", "espresso", "oak"]
  },
  {
    id: "sofa-monaco",
    name: "The Monaco Curved Bouclé Sectional",
    category: "living",
    categoryLabel: "Customized Living Suites",
    rating: 4.95,
    reviewsCount: 142,
    badge: "Signature Design",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Kiln-Dried Solid Teak Frame · French Bouclé Upholstery · High-Resilience Feather Blend Cushioning",
    dimensions: "108\"W x 42\"D x 30\"H (Custom modular section combinations available)",
    description: "An architectural masterpiece crafted with gentle organic curves. Wrapped in ultra-plush French textured bouclé fabric atop a kiln-dried, FSC-certified solid teak core.",
    finishes: ["boucle", "cognac", "espresso", "walnut"]
  },
  {
    id: "chair-nordic",
    name: "The Oslo Cognac Italian Leather Armchair",
    category: "living",
    categoryLabel: "Customized Living Suites",
    rating: 4.92,
    reviewsCount: 98,
    badge: "Imported Leather",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Full-Grain Italian Tuscan Leather · Solid American Walnut Base · Brass Accents",
    dimensions: "34\"W x 36\"D x 33\"H",
    description: "Hand-stitched full-grain Italian leather with hand-finished patina. Supported by sculpted solid American Walnut legs with acoustic vibration dampeners.",
    finishes: ["cognac", "walnut", "espresso"]
  },
  {
    id: "table-travertine-nest",
    name: "The Aurelia Travertine Nesting Center Tables",
    category: "tables",
    categoryLabel: "Designer Center Tables",
    rating: 4.96,
    reviewsCount: 104,
    badge: "Natural Italian Stone",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Honed Italian Roman Travertine Marble · Solid Walnut Cantilever Base",
    dimensions: "Primary: 38\"Dia x 16\"H · Satellite: 24\"Dia x 19\"H",
    description: "A striking pair of nesting center tables that tuck together or spread across your living lounge for flexible hosting and architectural balance.",
    finishes: ["walnut", "oak", "teak"]
  },
  {
    id: "bookshelf-arch",
    name: "The Arcos Architectural Smoked Glass Bookshelf",
    category: "corporate",
    categoryLabel: "Corporate & Office Furniture",
    rating: 4.95,
    reviewsCount: 61,
    badge: "Executive Statement",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Solid American Walnut Framework · Tempered Smoked Glass Shelves · Brass Corner Brackets",
    dimensions: "48\"W x 16\"D x 78\"H",
    description: "A stunning open architectural shelving unit designed for luxury executive cabins and private residences to display awards, books, and ceramic treasures.",
    finishes: ["walnut", "oak", "espresso"]
  }
];

// Backward compatibility alias
const XYZ_PRODUCTS = CASA_PRODUCTS;
