const products = [
  // ---------------- Necklace ----------------
  {
    name: "Diamond Floral Necklace",
    type: "Necklace",
    description: "A delicate diamond-studded floral necklace crafted for elegance.",
    price: "₹15000",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=60&w=600"
  },
  {
    name: "Royal Gold Necklace",
    type: "Necklace",
    description: "A traditional handcrafted gold necklace featuring intricate artistry.",
    price: "₹13000",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=60&w=600"
  },
  {
    name: "Contemporary Gold Necklace",
    type: "Necklace",
    description: "A modern-style necklace designed for a chic everyday look.",
    price: "₹14500",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=60&w=600"
  },
  {
    name: "Majestic Bridal Necklace",
    type: "Necklace",
    description: "A premium wedding necklace featuring royal design details.",
    price: "₹18000",
    image: "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?q=60&w=600"
  },
  {
    name: "Heritage Gold Necklace",
    type: "Necklace",
    description: "A classic Indian gold necklace crafted with traditional motifs.",
    price: "₹14000",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Timeless Gold Necklace",
    type: "Necklace",
    description: "A beautifully detailed gold necklace for festive occasions.",
    price: "₹12500",
    image: "https://images.unsplash.com/photo-1600862754152-80a263dd564f?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Designer Layered Necklace",
    type: "Necklace",
    description: "A contemporary layered necklace crafted with modern aesthetics.",
    price: "₹15500",
    image: "https://images.unsplash.com/photo-1722410180687-b05b50922362?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Luxury Handcrafted Gold Necklace",
    type: "Necklace",
    description: "A premium handmade necklace featuring exquisite gold detailing.",
    price: "₹16000",
    image: "https://images.unsplash.com/photo-1705326454924-f6777522b030?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Colorful Beaded Necklace",
    type: "Necklace",
    description: "A vibrant beaded necklace perfect for casual and festive wear.",
    price: "₹7000",
    image: "https://plus.unsplash.com/premium_photo-1681276170758-d6ca6e6e276a?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Rose Gold Chain Necklace",
    type: "Necklace",
    description: "A chic and modern rose gold necklace for daily elegance.",
    price: "₹13500",
    image: "https://images.unsplash.com/photo-1676329945867-01c9975aa9d1?auto=format&fit=crop&q=60&w=600"
  },

  // ---------------- Bracelet / Bangle ----------------
  {
    name: "Elegant Gold Bracelet",
    type: "Bracelet",
    description: "A sleek gold bracelet crafted to complement every outfit.",
    price: "₹7000",
    image: "https://plus.unsplash.com/premium_photo-1681276168324-a6f1958aa191?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Silver Charm Bracelet",
    type: "Bracelet",
    description: "A stylish bracelet featuring decorative silver charms.",
    price: "₹6500",
    image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&q=60&w=1000"
  },
  {
    name: "Diamond Accent Bracelet",
    type: "Bracelet",
    description: "A luxury bracelet embellished with sparkling diamonds.",
    price: "₹12000",
    image: "https://images.unsplash.com/photo-1676120963306-8969fa6a810e?auto=format&fit=crop&q=60&w=1000"
  },
  {
    name: "Modern Gold Bracelet",
    type: "Bracelet",
    description: "A fine gold bracelet with a contemporary touch.",
    price: "₹9500",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=60&w=1000"
  },
  {
    name: "Handcrafted Artistic Bracelet",
    type: "Bracelet",
    description: "A unique designer bracelet made with artistic craftsmanship.",
    price: "₹8500",
    image: "https://images.unsplash.com/photo-1721206624468-2b3496c3bcfc?auto=format&fit=crop&q=60&w=1000"
  },
  {
    name: "Chakra Style Silver Bracelet",
    type: "Bracelet",
    description: "A trendy silver bracelet inspired by chakra patterns.",
    price: "₹6000",
    image: "https://media.istockphoto.com/id/1163354085/photo/silver-bracelets-chakra-hippie-style.webp"
  },
  {
    name: "Antique Golden Bracelet",
    type: "Bracelet",
    description: "A beautifully carved antique-style golden bracelet.",
    price: "₹10500",
    image: "https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.webp"
  },
  {
    name: "Diamond Sparkle Bracelet",
    type: "Bracelet",
    description: "A silver bracelet decorated with shimmering diamonds.",
    price: "₹11000",
    image: "https://media.istockphoto.com/id/1300823870/photo/silver-diamond-bracelet-isolated-on-white-background.webp"
  },
  {
    name: "Slim Daily Gold Bangle",
    type: "Bracelet",
    description: "A lightweight gold bangle perfect for everyday wear.",
    price: "₹6500",
    image: "https://images.unsplash.com/photo-1721103428054-6bcf4f655594?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Heavy Bridal Bangle Set",
    type: "Bracelet",
    description: "A richly designed bridal bangle set for grand occasions.",
    price: "₹22000",
    image: "https://images.unsplash.com/photo-1721206624492-3d05631471ea?auto=format&fit=crop&q=60&w=600"
  },

  // ---------------- Earrings ----------------
  {
    name: "Golden Drop Earrings",
    type: "Earrings",
    description: "Elegant drop-style earrings crafted in fine gold.",
    price: "₹5500",
    image: "https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Diamond Royal Earrings",
    type: "Earrings",
    description: "A pair of beautifully cut diamond earrings for special events.",
    price: "₹8200",
    image: "https://images.unsplash.com/photo-1588444650733-d0767b753fc8?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Modern Pearl Earrings",
    type: "Earrings",
    description: "Stylish pearl earrings blending modern and classic design.",
    price: "₹6200",
    image: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Classic Gold Studs",
    type: "Earrings",
    description: "Timeless stud earrings ideal for daily elegance.",
    price: "₹4800",
    image: "https://images.unsplash.com/photo-1674329042475-de1a95b4ca62?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Luxury Diamond Earrings",
    type: "Earrings",
    description: "Premium diamond earrings designed for luxury styling.",
    price: "₹8800",
    image: "https://plus.unsplash.com/premium_photo-1681276170610-8d9264aaccd8?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Silver Shine Earrings",
    type: "Earrings",
    description: "Elegant silver earrings offering a premium finish.",
    price: "₹5600",
    image: "https://images.unsplash.com/photo-1725266698864-d762b3f23a96?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Golden Hoop Earrings",
    type: "Earrings",
    description: "Trendy hoop earrings crafted in quality gold.",
    price: "₹6400",
    image: "https://images.unsplash.com/photo-1714700513036-558227ceabc4?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Diamond Stud Earrings",
    type: "Earrings",
    description: "Everyday diamond studs with a luxurious shine.",
    price: "₹9300",
    image: "https://images.unsplash.com/photo-1721103418236-3e314539f849?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Antique Gold Earrings",
    type: "Earrings",
    description: "Traditional gold earrings with detailed craftsmanship.",
    price: "₹7900",
    image: "https://plus.unsplash.com/premium_photo-1680181362119-5c9bf196805f?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Crystal Silver Earrings",
    type: "Earrings",
    description: "Shiny silver earrings featuring crystal accents.",
    price: "₹6700",
    image: "https://images.unsplash.com/photo-1724937798223-720f8956cb12?auto=format&fit=crop&q=60&w=600"
  },

  // ---------------- Chain ----------------
  {
    name: "Classic Gold Chain",
    type: "Chain",
    description: "A simple and elegant gold chain ideal for everyday styling.",
    price: "₹10000",
    image: "https://images.unsplash.com/photo-1570891836868-673ee4818f81?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Bold Silver Chain",
    type: "Chain",
    description: "A modern silver chain designed for a stylish look.",
    price: "₹5000",
    image: "https://plus.unsplash.com/premium_photo-1678730056371-eff9c5356a48?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Gold Box Chain",
    type: "Chain",
    description: "A sturdy box-pattern chain crafted in pure gold.",
    price: "₹8000",
    image: "https://images.unsplash.com/photo-1679973298076-07d422275c7a?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Classic Link Chain",
    type: "Chain",
    description: "A traditional link-style gold chain suitable for daily wear.",
    price: "₹9500",
    image: "https://images.unsplash.com/photo-1721807550875-f76de8503a30?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Snake Pattern Chain",
    type: "Chain",
    description: "A smooth and elegant snake-pattern gold chain.",
    price: "₹11000",
    image: "https://images.unsplash.com/photo-1724937721130-c9a9a4ee477e?auto=format&fit=crop&q=80&w=863"
  },
  {
    name: "Figaro Gold Chain",
    type: "Chain",
    description: "A fashionable Figaro-style chain crafted for a premium look.",
    price: "₹12500",
    image: "https://images.unsplash.com/photo-1713208176122-b39f594cc00c?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Rope Twist Chain",
    type: "Chain",
    description: "A stylish rope-pattern chain with a polished finish.",
    price: "₹10500",
    image: "https://images.unsplash.com/photo-1641494684667-b8c56b03a764?auto=format&fit=crop&q=80&w=1170"
  },
  {
    name: "Gold Beaded Chain",
    type: "Chain",
    description: "A unique gold chain featuring elegant bead detailing.",
    price: "₹11500",
    image: "https://images.unsplash.com/photo-1638073694489-6238362ab66f?auto=format&fit=crop&q=80&w=764"
  },
  {
    name: "Diamond Cut Chain",
    type: "Chain",
    description: "A luxurious chain featuring diamond-inspired cuts.",
    price: "₹18000",
    image: "https://plus.unsplash.com/premium_photo-1681276170069-36fa70186f7b?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Rose Gold Chain",
    type: "Chain",
    description: "A modern rose gold chain with a smooth finish.",
    price: "₹9500",
    image: "https://images.unsplash.com/photo-1679973296808-ff5fd4e29b61?auto=format&fit=crop&q=60&w=600"
  },

  // ---------------- Rings ----------------
  {
    name: "Classic Gold Ring",
    type: "Ring",
    description: "A beautiful gold ring suitable for men and women.",
    price: "₹5000",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Diamond Solitaire Ring",
    type: "Ring",
    description: "A stylish solitaire diamond ring with a refined finish.",
    price: "₹12000",
    image: "https://plus.unsplash.com/premium_photo-1678749105286-9970ba61a724?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Minimal Silver Band",
    type: "Ring",
    description: "A sleek silver band ring perfect for daily use.",
    price: "₹3500",
    image: "https://images.unsplash.com/photo-1561995734-ef4b62bb6586?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Ruby Stone Ring",
    type: "Ring",
    description: "A premium gold ring featuring a vibrant ruby stone.",
    price: "₹8500",
    image: "https://plus.unsplash.com/premium_photo-1674700256963-895810455dd4?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Couple’s Gold Ring Set",
    type: "Ring",
    description: "A romantic matching ring set for couples.",
    price: "₹9500",
    image: "https://images.unsplash.com/photo-1723522938769-4f26effdd1f1?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Rose Gold Band Ring",
    type: "Ring",
    description: "A modern rose gold ring with a smooth polished surface.",
    price: "₹6000",
    image: "https://images.unsplash.com/photo-1677045419454-e8b201856472?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Emerald Stone Ring",
    type: "Ring",
    description: "A stunning emerald ring crafted in fine gold.",
    price: "₹7800",
    image: "https://images.unsplash.com/photo-1721034909472-390b9325f415?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Antique Gold Ring",
    type: "Ring",
    description: "A vintage-style gold ring featuring handcrafted detailing.",
    price: "₹7200",
    image: "https://images.unsplash.com/photo-1719924998065-0c60e329ef58?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Heart Diamond Ring",
    type: "Ring",
    description: "A romantic heart-shaped diamond ring for special occasions.",
    price: "₹8900",
    image: "https://images.unsplash.com/photo-1683245597322-79659ee86fb3?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Premium Platinum Ring",
    type: "Ring",
    description: "A luxurious platinum ring with a clean, modern finish.",
    price: "₹25000",
    image: "https://images.unsplash.com/photo-1629201688905-697730d24490?auto=format&fit=crop&q=60&w=600"
  },

  // ---------------- Diamond Category ----------------
  {
    name: "Diamond Pendant Necklace",
    type: "Diamond",
    description: "A beautifully crafted diamond pendant hung on a gold chain.",
    price: "₹13000",
    image: "https://plus.unsplash.com/premium_photo-1678727212341-eb0a264a6800?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Diamond Party Bracelet",
    type: "Diamond",
    description: "A sparkling diamond bracelet perfect for parties and events.",
    price: "₹16000",
    image: "https://images.unsplash.com/photo-1551947391-249dcb8ed976?auto=format&fit=crop&q=80&w=1074"
  },
  {
    name: "Diamond Solitaire Ring",
    type: "Diamond",
    description: "A premium solitaire diamond ring designed for luxury.",
    price: "₹20000",
    image: "https://images.unsplash.com/photo-1645201233154-80125533a32c?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Classic Diamond Studs",
    type: "Diamond",
    description: "Elegant diamond stud earrings suitable for daily wear.",
    price: "₹14000",
    image: "https://i.redd.it/xa50sz8j9mqa1.jpeg"
  },
  {
    name: "Bridal Diamond Necklace",
    type: "Diamond",
    description: "A luxurious diamond necklace designed for wedding occasions.",
    price: "₹55000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9mBTdG5tUoMhDXJXLtZ1oqzvk2AUxKpxw80kwlY7CWul2GfshUG9r427GGqyrPS2MLM"
  },
  {
    name: "Diamond Embedded Chain",
    type: "Diamond",
    description: "A stylish gold chain featuring a diamond-studded finish.",
    price: "₹28000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVwADWqM3KV87QT8p9XBTruoYFeqAwdvTPQ&s"
  },
  {
    name: "Diamond Bangle Pair",
    type: "Diamond",
    description: "An exquisite pair of diamond-studded bangles.",
    price: "₹45000",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/10/UC/PK/WM/70249436/heart-shaped-diamond.jpg"
  },
  {
    name: "Diamond Drop Earrings",
    type: "Diamond",
    description: "Stylish diamond drop earrings with a luxury finish.",
    price: "₹17000",
    image: "https://i.etsystatic.com/16200267/r/il/597308/4412752022/il_fullxfull.4412752022_7sdl.jpg"
  },
  {
    name: "Radiant Diamond Brooch",
    type: "Diamond",
    description: "A premium diamond brooch designed for formal wear.",
    price: "₹24000",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438370206/IE/WS/WJ/189914666/radiant-shape-diamond-500x500.jpeg"
  }
];

export default products;
