const products = [
  // ---------------- Necklace ----------------
   {
    name: "Diamond Necklace",
    type: "Necklace",
    description: "Beautiful diamond necklace.",
    price: "₹15000",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=60&w=600"
  },
  {
    name: "Gold Necklace",
    type: "Necklace",
    description: "Elegant gold necklace with intricate design.",
    price: "₹13000",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=60&w=600"
  },
  {
    name: "Modern Necklace",
    type: "Necklace",
    description: "Stylish modern necklace for all occasions.",
    price: "₹14500",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=60&w=600"
  },
  {
    name: "Royal Necklace",
    type: "Necklace",
    description: "Premium necklace with royal finish.",
    price: "₹18000",
    image: "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?q=60&w=600"
  },
  {
    name: "Elegant Gold Necklace",
    type: "Necklace",
    description: "Traditional gold necklace crafted with precision.",
    price: "₹14000",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Classic Gold Necklace",
    type: "Necklace",
    description: "Timeless gold necklace for special occasions.",
    price: "₹12500",
    image: "https://images.unsplash.com/photo-1600862754152-80a263dd564f?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Designer Necklace",
    type: "Necklace",
    description: "Designer gold necklace with modern artistry.",
    price: "₹15500",
    image: "https://images.unsplash.com/photo-1722410180687-b05b50922362?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Luxury Gold Necklace",
    type: "Necklace",
    description: "Luxurious handcrafted necklace with fine details.",
    price: "₹16000",
    image: "https://images.unsplash.com/photo-1705326454924-f6777522b030?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Beaded Necklace",
    type: "Necklace",
    description: "Colorful beaded necklace for casual wear.",
    price: "₹7000",
    image: "/Photos/necklace.jpg"
  },
  {
    name: "Rose Gold Necklace",
    type: "Necklace",
    description: "Chic rose gold chain necklace.",
    price: "₹13500",
    image: "/Photos/necklace.jpg"
  },

  // ---------------- Bangle ----------------
  {
    name: "Gold Bangle",
    type: "Bangle",
    description: "Traditional gold bangle set for women.",
    price: "₹8000",
    image: "/Photos/bangle.jpg"
  },
  {
    name: "Silver Bangle",
    type: "Bangle",
    description: "Elegant silver bangle with shine finish.",
    price: "₹5000",
    image: "/Photos/bangle.jpg"
  },
  {
    name: "Kundan Bangle",
    type: "Bangle",
    description: "Designer kundan studded bangle set.",
    price: "₹10000",
    image: "/Photos/bangle.jpg"
  },
  {
    name: "Diamond Bangle",
    type: "Bangle",
    description: "Beautiful diamond cut bangle pair.",
    price: "₹18000",
    image: "/Photos/bangle.jpg"
  },
  {
    name: "Rose Gold Bangle",
    type: "Bangle",
    description: "Trendy rose gold plated bangles.",
    price: "₹9500",
    image: "/Photos/bangle.jpg"
  },
  {
    name: "Floral Design Bangle",
    type: "Bangle",
    description: "Floral motif bangle for festive wear.",
    price: "₹10500",
    image: "/Photos/bangle.jpg"
  },
  {
    name: "Antique Gold Bangle",
    type: "Bangle",
    description: "Vintage style antique gold bangle set.",
    price: "₹12500",
    image: "/Photos/bangle.jpg"
  },
  {
    name: "Stone Studded Bangle",
    type: "Bangle",
    description: "Multi-stone studded designer bangle.",
    price: "₹8500",
    image: "/Photos/bangle.jpg"
  },
  {
    name: "Thin Gold Bangle",
    type: "Bangle",
    description: "Slim and elegant daily wear bangles.",
    price: "₹6500",
    image: "/Photos/bangle.jpg"
  },
  {
    name: "Heavy Bridal Bangle",
    type: "Bangle",
    description: "Traditional heavy bridal bangle set.",
    price: "₹22000",
    image: "/Photos/bangle.jpg"
  },

  // ---------------- Earring ----------------
  {
    name: "Gold Stud Earrings",
    type: "Earring",
    description: "Simple and elegant gold stud earrings.",
    price: "₹4500",
    image: "/Photos/earring.jpg"
  },
  {
    name: "Diamond Drop Earrings",
    type: "Earring",
    description: "Stylish diamond drop earrings.",
    price: "₹9000",
    image: "/Photos/earring.jpg"
  },
  {
    name: "Silver Hoop Earrings",
    type: "Earring",
    description: "Trendy silver hoop earrings for casual wear.",
    price: "₹2500",
    image: "/Photos/earring.jpg"
  },
  {
    name: "Pearl Stud Earrings",
    type: "Earring",
    description: "Classic pearl earrings for any occasion.",
    price: "₹4000",
    image: "/Photos/earring.jpg"
  },
  {
    name: "Rose Gold Earrings",
    type: "Earring",
    description: "Beautiful rose gold plated earrings.",
    price: "₹5500",
    image: "/Photos/earring.jpg"
  },
  {
    name: "Kundan Earrings",
    type: "Earring",
    description: "Traditional kundan earrings for ethnic look.",
    price: "₹7000",
    image: "/Photos/earring.jpg"
  },
  {
    name: "Antique Jhumka",
    type: "Earring",
    description: "Antique style gold jhumka earrings.",
    price: "₹8500",
    image: "/Photos/earring.jpg"
  },
  {
    name: "Stone Earrings",
    type: "Earring",
    description: "Colorful stone earrings for festive wear.",
    price: "₹3000",
    image: "/Photos/earring.jpg"
  },
  {
    name: "Minimal Earrings",
    type: "Earring",
    description: "Simple daily wear gold plated earrings.",
    price: "₹3500",
    image: "/Photos/earring.jpg"
  },
  {
    name: "Chandelier Earrings",
    type: "Earring",
    description: "Elegant chandelier earrings for party wear.",
    price: "₹6500",
    image: "/Photos/earring.jpg"
  },

  // ---------------- Chain ----------------
  {
    name: "Gold Chain",
    type: "Chain",
    description: "Simple and elegant gold chain.",
    price: "₹10000",
    image: "/Photos/chain.jpg"
  },
  {
    name: "Silver Chain",
    type: "Chain",
    description: "Stylish silver chain for men.",
    price: "₹5000",
    image: "/Photos/chain.jpg"
  },
  {
    name: "Box Chain",
    type: "Chain",
    description: "Sturdy box style gold chain.",
    price: "₹8000",
    image: "/Photos/chain.jpg"
  },
  {
    name: "Link Chain",
    type: "Chain",
    description: "Classic gold link chain for daily wear.",
    price: "₹9500",
    image: "/Photos/chain.jpg"
  },
  {
    name: "Snake Chain",
    type: "Chain",
    description: "Smooth snake pattern gold chain.",
    price: "₹11000",
    image: "/Photos/chain.jpg"
  },
  {
    name: "Figaro Chain",
    type: "Chain",
    description: "Modern figaro style gold chain.",
    price: "₹12500",
    image: "/Photos/chain.jpg"
  },
  {
    name: "Rope Chain",
    type: "Chain",
    description: "Twisted rope pattern gold chain.",
    price: "₹10500",
    image: "/Photos/chain.jpg"
  },
  {
    name: "Beaded Chain",
    type: "Chain",
    description: "Unique beaded gold chain.",
    price: "₹11500",
    image: "/Photos/chain.jpg"
  },
  {
    name: "Diamond Chain",
    type: "Chain",
    description: "Diamond studded gold chain.",
    price: "₹18000",
    image: "/Photos/chain.jpg"
  },
  {
    name: "Rose Gold Chain",
    type: "Chain",
    description: "Chic rose gold plated chain.",
    price: "₹9500",
    image: "/Photos/chain.jpg"
  },

  // ---------------- Ring ----------------
  {
    name: "Gold Ring",
    type: "Ring",
    description: "Elegant gold ring for men and women.",
    price: "₹5000",
    image: "/Photos/ring.jpg"
  },
  {
    name: "Diamond Ring",
    type: "Ring",
    description: "Stylish diamond ring with fine finish.",
    price: "₹12000",
    image: "/Photos/ring.jpg"
  },
  {
    name: "Silver Band Ring",
    type: "Ring",
    description: "Simple silver band ring for daily wear.",
    price: "₹3500",
    image: "/Photos/ring.jpg"
  },
  {
    name: "Ruby Ring",
    type: "Ring",
    description: "Beautiful ruby stone gold ring.",
    price: "₹8500",
    image: "/Photos/ring.jpg"
  },
  {
    name: "Couple Ring Set",
    type: "Ring",
    description: "Matching gold couple rings.",
    price: "₹9500",
    image: "/Photos/ring.jpg"
  },
  {
    name: "Rose Gold Ring",
    type: "Ring",
    description: "Trendy rose gold plated ring.",
    price: "₹6000",
    image: "/Photos/ring.jpg"
  },
  {
    name: "Emerald Ring",
    type: "Ring",
    description: "Gold ring with green emerald stone.",
    price: "₹7800",
    image: "/Photos/ring.jpg"
  },
  {
    name: "Antique Gold Ring",
    type: "Ring",
    description: "Antique finish gold ring design.",
    price: "₹7200",
    image: "/Photos/ring.jpg"
  },
  {
    name: "Heart Shape Ring",
    type: "Ring",
    description: "Romantic heart-shaped diamond ring.",
    price: "₹8900",
    image: "/Photos/ring.jpg"
  },
  {
    name: "Platinum Ring",
    type: "Ring",
    description: "Stylish platinum band ring.",
    price: "₹25000",
    image: "/Photos/ring.jpg"
  },

  // ---------------- Diamond ----------------
  {
    name: "Diamond Pendant",
    type: "Diamond",
    description: "Elegant diamond pendant in gold chain.",
    price: "₹13000",
    image: "/Photos/diamond.jpg"
  },
  {
    name: "Diamond Bracelet",
    type: "Diamond",
    description: "Sparkling diamond bracelet for parties.",
    price: "₹16000",
    image: "/Photos/diamond.jpg"
  },
  {
    name: "Diamond Ring",
    type: "Diamond",
    description: "Classic diamond solitaire ring.",
    price: "₹20000",
    image: "/Photos/diamond.jpg"
  },
  {
    name: "Diamond Studs",
    type: "Diamond",
    description: "Simple and elegant diamond stud earrings.",
    price: "₹14000",
    image: "/Photos/diamond.jpg"
  },
  {
    name: "Diamond Necklace",
    type: "Diamond",
    description: "Premium diamond necklace for weddings.",
    price: "₹55000",
    image: "/Photos/diamond.jpg"
  },
  {
    name: "Diamond Chain",
    type: "Diamond",
    description: "Diamond embedded gold chain.",
    price: "₹28000",
    image: "/Photos/diamond.jpg"
  },
  {
    name: "Diamond Bangles",
    type: "Diamond",
    description: "Pair of elegant diamond-studded bangles.",
    price: "₹45000",
    image: "/Photos/diamond.jpg"
  },
  {
    name: "Diamond Earrings",
    type: "Diamond",
    description: "Stylish diamond drop earrings.",
    price: "₹17000",
    image: "/Photos/diamond.jpg"
  },
  {
    name: "Diamond Brooch",
    type: "Diamond",
    description: "Luxury diamond brooch for formal wear.",
    price: "₹24000",
    image: "/Photos/diamond.jpg"
  },
  {
    name: "Diamond Anklet",
    type: "Diamond",
    description: "Beautiful anklet with diamond detailing.",
    price: "₹18000",
    image: "/Photos/diamond.jpg"
  }
];

export default products;
