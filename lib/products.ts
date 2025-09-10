export interface Product {
  slug: string;
  name: string;
  image: string;
  badge: string;
  price: string;
  size: string;
  description: string;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
}

export const products: Product[] = [
  {
    slug: "solstice-bloom",
    name: "Solstice Bloom",
    image: "/images/solstice.jpg",
    badge: "Bestseller",
    price: "$80",
    size: "50ml",
    description: "Bright citrus bouquet perfect for summer.",
    notes: {
      top: "Lemon, Mandarin",
      heart: "Jasmine, Neroli",
      base: "Cedarwood",
    },
  },
  {
    slug: "midnight-ember",
    name: "Midnight Ember",
    image: "/images/midnight.jpg",
    badge: "Limited",
    price: "$95",
    size: "50ml",
    description: "Smoky amber wrapped in vanilla.",
    notes: {
      top: "Bergamot",
      heart: "Amber",
      base: "Vanilla",
    },
  },
  {
    slug: "forest-whisper",
    name: "Forest Whisper",
    image: "/images/forest.jpg",
    badge: "New",
    price: "$75",
    size: "50ml",
    description: "Green woods and earthy musk.",
    notes: {
      top: "Pine",
      heart: "Cedar",
      base: "Musk",
    },
  },
  {
    slug: "discovery-set",
    name: "Discovery Set",
    image: "/images/discovery.jpg",
    badge: "Sampler",
    price: "$35",
    size: "4 x 2ml",
    description: "Try our core collection.",
    notes: {
      top: "",
      heart: "",
      base: "",
    },
  },
];
