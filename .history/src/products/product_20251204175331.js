const products = [
  // ---------------- Diamond ----------------
  {
    name: "princess-cut Diamond",
    type: "Diamond",
    description: "Elegant princess-cut Diamond lab-grown.",
    price: "₹13000",
    image: "https://plus.unsplash.com/premium_photo-1678727212341-eb0a264a6800?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Pear Diamond",
    type: "Diamond",
    description: "pear diamond with high clarity.",
    price: "₹16000",
    image: "https://images.unsplash.com/photo-1551947391-249dcb8ed976?auto=format&fit=crop&q=80&w=1074"
  },
  {
    name: "Asscher cut Diamond",
    type: "Diamond",
    description: "Asscher cut diamond with excellent brilliance.",
    price: "₹20000",
    image: "https://images.unsplash.com/photo-1645201233154-80125533a32c?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Kite-cut Diamond",
    type: "Diamond",
    description: "Kite-cut diamond with unique facets.",
    price: "₹14000",
    image: "https://i.redd.it/xa50sz8j9mqa1.jpeg"
  },
  {
    name: "lozenge-cut Diamond",
    type: "Diamond",
    description: "lozenge-cut diamond with exceptional fire.",
    price: "₹55000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9mBTdG5tUoMhDXJXLtZ1oqzvk2AUxKpxw80kwlY7CWul2GfshUG9r427GGqyrPS2MLM"
  },
  {
    name: "triangle-cut Diamond",
    type: "Diamond",
    description: "triangle-cut diamond with sharp edges.",
    price: "₹28000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVwADWqM3KV87QT8p9XBTruoYFeqAwdvTPQ"
  },
  {
    name: "heart-cut Diamond",
    type: "Diamond",
    description: "heart-cut diamond symbolizing love and affection.",
    price: "₹45000",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/10/UC/PK/WM/70249436/heart-shaped-diamond.jpg"
  },
  {
    name: "marquise cut Diamond",
    type: "Diamond",
    description: "marquise cut diamond with elongated shape.",
    price: "₹17000",
    image: "https://i.etsystatic.com/16200267/r/il/597308/4412752022/il_fullxfull.4412752022_7sdl.jpg"
  },
  {
    name: "radiant-cut Diamond",
    type: "Diamond",
    description: "radiant-cut diamond with brilliant facets.",
    price: "₹24000",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438370206/IE/WS/WJ/189914666/radiant-shape-diamond-500x500.jpeg"
  },
  {
    name: "Round Diamond",
    type: "Diamond",
    description: "Classic round diamond with timeless appeal.",
    price: "₹15000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGIM9OkBuZJEc3fDPsMmFNCi2Hd1igU6mb1A&s"
  },
  {
    name: "Ovel Diamond",
    type: "Diamond",
    description: "Elegant ovel diamond with smooth curves.",
    price: "₹19000",
    image: "https://www.brilliance.com/cdn-cgi/image/f=webp,width=720,height=720,quality=90/sites/default/files/engagement-rings/5x3.5-mm-oval-diamond-premium/3.5x5.0mm-oval-diamond-premium-melee-diamonds-v1.jpg"
  },
  {
    name: "Cushion Diamond",
    type: "Diamond",
    description: "Cushion diamond with a vintage charm.",
    price: "₹22000",
    image: "https://3.imimg.com/data3/XI/SA/MY-5505765/cushion-cut-diamond-500x500.jpg"
  },
  {
    name: "Emerald-cut Diamond",
    type: "Diamond",
    description: "Emerald-cut diamond with step-cut facets.",
    price: "₹26000",
    image: "https://gridpx.com/wp-content/uploads/2023/08/blue-diamond-emerald-cut-1.jpg"
  },
  {
    name: "Square Diamond",
    type: "Diamond",
    description: "Square diamond with modern elegance.",
    price: "₹21000",
    image: "https://app.dropinblog.com/uploaded/blogs/34239851/files/princess-cut_square_shaped_diamond_-_resized.jpg"
  },
  {
    name:"Old Mine Diamond",
    type: "Diamond",
    description: "Old Mine diamond with antique allure.",
    price: "₹30000",
    image: "https://www.goldenbirdjewels.com/cdn/shop/files/LG9612-EWI_1_1800x.webp?v=1752299032"
  },
  {
    name:"Briolette-cut Diamond",
    type: "Diamond",
    description: "Briolette-cut diamond with unique teardrop shape.",
    price: "₹32000",
    image: "https://www.williamgoldberg.com/assets/uploads/efceb01d04797e04f0902b67373caa3b.jpg"
  },
  {
    name:"Rose cut Diamond",
    type: "Diamond",
    description: "Rose cut diamond with vintage elegance.", 
    price: "₹27000",
    image: "https://jaipurgem.com/cdn/shop/files/WHCZ01S_1_4a2f3266-d439-432d-8a4a-0b71974aad8a.jpg?v=1748184576"
  },
  {
    name: "Baguette Diamond",
    type: "Diamond",
    description: "Baguette diamond with sleek rectangular shape.",
    price: "₹23000",
    image: "https://gridpx.com/wp-content/uploads/2024/07/buguatte-cut-diamond-7.jpg"
  },
  {
    name: "Tap baguette Diamond",
    type: "Diamond",
    description: "Tap baguette diamond with tapered edges.",
    price: "₹29000",
    image: "https://www.shutterstock.com/image-photo/tapered-baguette-cut-diamond-top-600nw-2421240683.jpg"
  },
  {
    name: "Half Moon Diamond",
    type: "Diamond",
    description: "Half Moon diamond with unique crescent shape.",
    price: "₹31000",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/10/ZM/OX/YT/70249436/half-moon-shape-diamond.jpg"
  },
  {
    name: "Flanders Diamond",
    type: "Diamond",
    description: "Flanders diamond with elegant elongated shape.",
    price: "₹34000",
    image: "https://flandersdiamondsth.com/cdn/shop/files/flanders_cut.jpg?v=1671091825&width=3840"
  },
  {
    name: "Trapezoid Diamond",
    type: "Diamond",
    description: "Trapezoid diamond with bold geometric design.",
    price: "₹36000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUwBs5VTTq3KmdggRn3-cGosuw_T1GusXNw&s"
  },
  {
    name: "Bullets Diamond",
    type: "Diamond",
    description: "Bullets diamond with distinctive shape.",
    price: "₹38000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0_y39GHWosG7GQmtVMex5fseaTCqs0tHG8rWAnL1yUlMM4HlfhnDksOmKxIPz3iZifA&usqp=CAU"
  },
  {
    name: "Shield Diamond",
    type: "Diamond",
    description: "Shield diamond with strong angular design.",
    price: "₹40000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-l7a5wl07BDDBoXC7IrN1ZIAvgoWQPa5HdA&s"
  },
  {
    name: "Pentagonal Diamond",
    type: "Diamond",
    description: "Pentagonal diamond with five-sided elegance.",
    price: "₹42000",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/1/381997399/SQ/RO/JC/119508612/hpht-labgrown-diamond-modified-pentagon-shape-diamond-for-jewelry-lab-grown-diamond-loose.jpg"
  },
  {
    name: "Hexagonal Diamond",
    type: "Diamond",
    description: "Hexagonal diamond with six-sided brilliance.",
    price: "₹44000",
    image: "https://i.etsystatic.com/30688662/c/1219/968/416/527/il/c71da2/5927855744/il_340x270.5927855744_3yw4.jpg"
  },
  {
    name: "Octagonal Diamond",
    type: "Diamond",
    description: "Octagonal diamond with eight-sided symmetry.",
    price: "₹46000",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420738892/EN/MC/RU/221595981/img-20221215-164710-1000x1000.jpg"
  },
  {
    name: "Portuguese cut Diamond",
    type: "Diamond",
    description: "Portuguese cut diamond with intricate facets.",
    price: "₹48000",
    image: "https://preview.redd.it/has-anyone-purchased-a-portuguese-cut-diamond-v0-87n6lumobq7d1.jpeg?width=640&crop=smart&auto=webp&s=6215e7f2b2258a24f8e40fb8d09150b6db1904e5"
  },
  {
    name: "Moval cut Diamond",
    type: "Diamond",
    description: "Moval cut diamond with unique shape.",
    price: "₹50000",
    image: "https://roen.nyc/cdn/shop/files/MOVAL_CUSTOM_ROEN.jpg?v=1737563316&width=1682"
  },

  // ---------------- Jewellery ----------------
  {
    name: "Elegant Bracelet",
    type: "Jewellery",
    description: "Premium gold bracelet for women.",
    price: "₹7000",
    image: "https://plus.unsplash.com/premium_photo-1681276168324-a6f1958aa191?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Silver Charm Bracelet",
    type: "Jewellery",
    description: "Beautiful silver bracelet with charm designs.",
    price: "₹6505",
    image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&q=60&w=1000"
  },
  {
    name: "Luxury Diamond Bracelet",
    type: "Jewellery",
    description: "Exquisite bracelet with embedded diamonds.",
    price: "₹12000",
    image: "https://images.unsplash.com/photo-1676120963306-8969fa6a810e?auto=format&fit=crop&q=60&w=1000"
  },
  {
    name: "Modern Gold Bracelet",
    type: "Jewellery",
    description: "Stylish modern bracelet crafted from gold.",
    price: "₹9500",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=60&w=1000"
  },
  {
    name: "Designer Bracelet",
    type: "Jewellery",
    description: "Unique handcrafted designer bracelet.",
    price: "₹8500",
    image: "https://images.unsplash.com/photo-1721206624468-2b3496c3bcfc?auto=format&fit=crop&q=60&w=1000"
  },
  {
    name: "Silver Chakra Bracelet",
    type: "Jewellery",
    description: "Hippie-style silver bracelet with chakra design.",
    price: "₹6000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoAYkS23-zCyEyNSHZRABK4r2p_gz_9t-ueBCa1WeffE54gYET0RQg4jHznjWCOT4kRk&usqp=CAU"
  },
  {
    name: "Golden Antique Bracelet",
    type: "Jewellery",
    description: "Fancy designer antique golden bracelet for women.",
    price: "₹10500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoxRVhyEfvO4N7FWY25GGPLfY342N7wU9Fg&s"
  },
  {
    name: "Silver Diamond Bracelet",
    type: "Jewellery",
    description: "Elegant silver diamond bracelet for parties.",
    price: "₹11000",
    image: "https://amd.deodap.com/cdn/shop/files/Untitled-1452_1200x1200.jpg?v=1750917221"
  },
  {
    name: "Thin Gold Bangle",
    type: "Jewellery",
    description: "Slim and elegant daily wear bangles.",
    price: "₹6500",
    image: "https://images.unsplash.com/photo-1721103428054-6bcf4f655594?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Heavy Bridal Bangle",
    type: "Jewellery",
    description: "Traditional heavy bridal bangle set.",
    price: "₹22000",
    image: "https://images.unsplash.com/photo-1721206624492-3d05631471ea?auto=format&fit=crop&q=60&w=600"
  },

  // ---------------- Earrings ----------------
  {
    name: "Golden Drop Earrings",
    type: "Jewellery",
    description: "Elegant golden drop earrings for women.",
    price: "₹5500",
    image: "https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Royal Diamond Earrings",
    type: "Jewellery",
    description: "Stunning diamond earrings for special occasions.",
    price: "₹8200",
    image: "https://images.unsplash.com/photo-1588444650733-d0767b753fc8?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Modern Pearl Earrings",
    type: "Jewellery",
    description: "Trendy pearl earrings for a modern look.",
    price: "₹6200",
    image: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Classic Stud Earrings",
    type: "Jewellery",
    description: "Timeless stud earrings for elegant wear.",
    price: "₹4800",
    image: "https://images.unsplash.com/photo-1674329042475-de1a95b4ca62?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Luxury Diamond Earrings",
    type: "Jewellery",
    description: "Gorgeous diamond earrings for festive occasions.",
    price: "₹8800",
    image: "https://plus.unsplash.com/premium_photo-1681276170610-8d9264aaccd8?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Elegant Silver Earrings",
    type: "Jewellery",
    description: "Beautiful silver earrings with a premium shine.",
    price: "₹5600",
    image: "https://images.unsplash.com/photo-1725266698864-d762b3f23a96?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Golden Hoop Earrings",
    type: "Jewellery",
    description: "Trendy hoop earrings made of fine gold.",
    price: "₹6400",
    image: "https://images.unsplash.com/photo-1714700513036-558227ceabc4?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Diamond Stud Earrings",
    type: "Jewellery",
    description: "Beautiful diamond studs for daily elegance.",
    price: "₹9300",
    image: "https://images.unsplash.com/photo-1721103418236-3e314539f849?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Antique Gold Earrings",
    type: "Jewellery",
    description: "Traditional gold earrings with intricate design.",
    price: "₹7900",
    image: "https://plus.unsplash.com/premium_photo-1680181362119-5c9bf196805f?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Silver Crystal Earrings",
    type: "Jewellery",
    description: "Elegant silver earrings with crystal detailing.",
    price: "₹6700",
    image: "https://images.unsplash.com/photo-1724937798223-720f8956cb12?auto=format&fit=crop&q=60&w=600"
  },

  // ---------------- Rings ----------------
  {
    name: "Gold Ring",
    type: "Jewellery",
    description: "Elegant gold ring for men and women.",
    price: "₹5000",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Diamond Ring",
    type: "Jewellery",
    description: "Stylish diamond ring with fine finish.",
    price: "₹12000",
    image: "https://plus.unsplash.com/premium_photo-1678749105286-9970ba61a724?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Silver Band Ring",
    type: "Jewellery",
    description: "Simple silver band ring for daily wear.",
    price: "₹3500",
    image: "https://images.unsplash.com/photo-1561995734-ef4b62bb6586?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Ruby Ring",
    type: "Jewellery",
    description: "Beautiful ruby stone gold ring.",
    price: "₹8500",
    image: "https://plus.unsplash.com/premium_photo-1674700256963-895810455dd4?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Couple Ring Set",
    type: "Jewellery",
    description: "Matching gold couple rings.",
    price: "₹9500",
    image: "https://images.unsplash.com/photo-1723522938769-4f26effdd1f1?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Rose Gold Ring",
    type: "Jewellery",
    description: "Trendy rose gold plated ring.",
    price: "₹6000",
    image: "https://images.unsplash.com/photo-1677045419454-e8b201856472?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Emerald Ring",
    type: "Jewellery",
    description: "Gold ring with green emerald stone.",
    price: "₹7800",
    image: "https://images.unsplash.com/photo-1721034909472-390b9325f415?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Antique Gold Ring",
    type: "Jewellery",
    description: "Antique finish gold ring design.",
    price: "₹7200",
    image: "https://images.unsplash.com/photo-1719924998065-0c60e329ef58?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Heart Shape Ring",
    type: "Jewellery",
    description: "Romantic heart-shaped diamond ring.",
    price: "₹8900",
    image: "https://images.unsplash.com/photo-1683245597322-79659ee86fb3?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Platinum Ring",
    type: "Jewellery",
    description: "Stylish platinum band ring.",
    price: "₹25000",
    image: "https://images.unsplash.com/photo-1629201688905-697730d24490?auto=format&fit=crop&q=60&w=600"
  },

  // ---------------- Necklaces ----------------
  {
    name: "Diamond Necklace",
    type: "Jewellery",
    description: "Beautiful diamond necklace.",
    price: "₹15000",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=60&w=600"
  },
  {
    name: "Gold Necklace",
    type: "Jewellery",
    description: "Elegant gold necklace with intricate design.",
    price: "₹13000",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=60&w=600"
  },
  {
    name: "Modern Necklace",
    type: "Jewellery",
    description: "Stylish modern necklace for all occasions.",
    price: "₹14500",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=60&w=600"
  },
  {
    name: "Royal Necklace",
    type: "Jewellery",
    description: "Premium necklace with royal finish.",
    price: "₹18000",
    image: "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?q=60&w=600"
  },
  {
    name: "Elegant Gold Necklace",
    type: "Jewellery",
    description: "Traditional gold necklace crafted with precision.",
    price: "₹14000",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Classic Gold Necklace",
    type: "Jewellery",
    description: "Timeless gold necklace for special occasions.",
    price: "₹12500",
    image: "https://images.unsplash.com/photo-1600862754152-80a263dd564f?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Designer Necklace",
    type: "Jewellery",
    description: "Designer gold necklace with modern artistry.",
    price: "₹15500",
    image: "https://images.unsplash.com/photo-1722410180687-b05b50922362?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Luxury Gold Necklace",
    type: "Jewellery",
    description: "Luxurious handcrafted necklace with fine details.",
    price: "₹16000",
    image: "https://images.unsplash.com/photo-1705326454924-f6777522b030?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Beaded Necklace",
    type: "Jewellery",
    description: "Colorful beaded necklace for casual wear.",
    price: "₹7000",
    image: "https://plus.unsplash.com/premium_photo-1681276170758-d6ca6e6e276a?auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Rose Gold Necklace",
    type: "Jewellery",
    description: "Chic rose gold chain necklace.",
    price: "₹13500",
    image: "https://images.unsplash.com/photo-1676329945867-01c9975aa9d1?auto=format&fit=crop&q=60&w=600"
  }
];

export default products;
