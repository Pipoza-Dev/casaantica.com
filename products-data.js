/**
 * XYZ FURNITURES — PRODUCT CATALOG DATABASE
 * Direct Artisan Craftsmanship & Heirloom Quality
 * Crafted by PipoZa Dev Studio (https://pipoza.s.gy/pipoza.in)
 */

const XYZ_PRODUCTS = [
  {
    id: "sofa-monaco",
    name: "The Monaco Bouclé Curve Sectional",
    category: "living",
    categoryLabel: "Living Room",
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
    dimensions: "108\"W x 42\"D x 30\"H",
    description: "An architectural masterpiece crafted with gentle organic curves. Wrapped in ultra-plush French textured bouclé fabric atop a kiln-dried, FSC-certified solid teak core.",
    finishes: ["boucle", "cognac", "espresso", "walnut"]
  },
  {
    id: "chair-nordic",
    name: "The Oslo Cognac Italian Leather Armchair",
    category: "living",
    categoryLabel: "Living Room",
    rating: 4.92,
    reviewsCount: 98,
    badge: "Master Guild",
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
    id: "table-walnut",
    name: "The Kyoto Live-Edge Walnut Dining Table",
    category: "dining",
    categoryLabel: "Dining Room",
    rating: 4.98,
    reviewsCount: 114,
    badge: "Artisan Edition",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Single-Slab Sustainable Solid American Walnut · Butterfly Key Joinery · Matte Organic Oil Finish",
    dimensions: "84\"L x 38\"W x 30\"H (Seats 8)",
    description: "Every table is unique, celebrating the natural flowing grain, knots, and live contours of sustainable 60-year-old American Walnut with zero synthetic veneers.",
    finishes: ["walnut", "teak", "oak"]
  },
  {
    id: "bed-floating",
    name: "The Elysium Platform Bed & Floating Nightstands",
    category: "bedroom",
    categoryLabel: "Bedroom Suite",
    rating: 4.97,
    reviewsCount: 86,
    badge: "Handcrafted",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Kiln-Dried White Oak & Teak · Integrated Headboard Ambient LED Channel · Solid Wood Slat System",
    dimensions: "King Size: 82\"W x 88\"L x 40\"H",
    description: "An ethereal floating platform aesthetic inspired by minimalist Japanese ryokan architecture. Features integrated soft-glow ambient LED lighting channels.",
    finishes: ["oak", "walnut", "teak"]
  },
  {
    id: "desk-oberoi",
    name: "The Oberoi Executive Architectural Desk",
    category: "office",
    categoryLabel: "Home Office",
    rating: 4.94,
    reviewsCount: 73,
    badge: "Crafted for Leaders",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Smoked American Walnut · Brushed Champagne Brass Hardware · Concealed Cable Conduit",
    dimensions: "66\"W x 32\"D x 30\"H",
    description: "Engineered for uncompromising productivity. Concealed magnetic wire management, soft-close velvet lined drawers, and book-matched walnut grain.",
    finishes: ["walnut", "espresso", "oak"]
  },
  {
    id: "credenza-nord",
    name: "The Stockholm Fluted Oak Credenza",
    category: "living",
    categoryLabel: "Storage & Living",
    rating: 4.91,
    reviewsCount: 65,
    badge: "Trending",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Solid Fluted White Oak · Soft-close German Blum Hinges · Cast Brass Legs",
    dimensions: "72\"W x 19\"D x 31\"H",
    description: "Textural vertical fluting that casts elegant shadows throughout the day. Ample storage with adjustable solid wood shelving and integrated media ventilation.",
    finishes: ["oak", "walnut", "espresso"]
  },
  {
    id: "chair-dining-set",
    name: "The Bauhaus Sculptural Dining Chairs (Set of 2)",
    category: "dining",
    categoryLabel: "Dining Room",
    rating: 4.89,
    reviewsCount: 88,
    badge: "Ergonomic Icon",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Steam-bent Solid Ash Wood · Hand-woven Natural Danish Cord Seat",
    dimensions: "22\"W x 21\"D x 30\"H (Seat 18\"H)",
    description: "An icon of ergonomic comfort. Each chair requires over 120 meters of continuous durable natural cord hand-woven by master weavers.",
    finishes: ["oak", "walnut", "espresso"]
  },
  {
    id: "table-travertine",
    name: "The Aurelia Travertine & Walnut Coffee Table",
    category: "living",
    categoryLabel: "Living Room",
    rating: 4.96,
    reviewsCount: 104,
    badge: "Natural Stone",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Honed Italian Roman Travertine Marble · Solid Walnut Cantilever Base",
    dimensions: "44\"L x 28\"W x 15\"H",
    description: "A striking tactile contrast between honed Italian travertine stone and warm, hand-rubbed organic walnut wood.",
    finishes: ["walnut", "oak", "teak"]
  },
  {
    id: "lamp-amber",
    name: "The Solis Amber Fluted Floor Luminaire",
    category: "decor",
    categoryLabel: "Lighting & Decor",
    rating: 4.93,
    reviewsCount: 52,
    badge: "Hand-Blown Glass",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Artisanal Hand-Blown Amber Glass · Aged Patina Brass Column · Marble Base",
    dimensions: "16\"Dia x 58\"H",
    description: "Casts a warm, soothing golden sunset glow across any living space. Dimmable warm LED system with foot-activated brass toggle.",
    finishes: ["brass", "walnut"]
  },
  {
    id: "lounge-verona",
    name: "The Verona Caramel Saddle Leather Chaise",
    category: "living",
    categoryLabel: "Living Room",
    rating: 4.96,
    reviewsCount: 78,
    badge: "Luxury Comfort",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Vegetable-Tanned Saddle Leather · Solid Oak Frame · Brass Accents",
    dimensions: "64\"L x 30\"W x 32\"H",
    description: "Designed for peaceful afternoon reading and tranquil rest. Hand-patinated saddle leather softens and beautifies gracefully over decades.",
    finishes: ["cognac", "walnut", "espresso"]
  },
  {
    id: "bedside-zenith",
    name: "The Zenith Solid Teak Floating Nightstand",
    category: "bedroom",
    categoryLabel: "Bedroom Suite",
    rating: 4.88,
    reviewsCount: 47,
    badge: "Compact Luxury",
    badgeType: "green",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "100% Plantation Solid Teak · Concealed Soft-Push Drawer Runner",
    dimensions: "20\"W x 15\"D x 12\"H",
    description: "Wall-mounted minimalist nightstand that maintains clear floor aesthetics while providing ample bedside storage.",
    finishes: ["teak", "walnut", "oak"]
  },
  {
    id: "bookshelf-arch",
    name: "The Arcos Architectural Smoked Glass Bookshelf",
    category: "office",
    categoryLabel: "Home Office & Living",
    rating: 4.95,
    reviewsCount: 61,
    badge: "Statement Piece",
    badgeType: "amber",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: "Solid American Walnut Framework · Tempered Smoked Glass Shelves · Brass Corner Brackets",
    dimensions: "48\"W x 16\"D x 78\"H",
    description: "A stunning open architectural shelving unit designed to display curated art, books, and ceramic treasures with timeless balance.",
    finishes: ["walnut", "oak", "espresso"]
  }
];
