/**
 * Verified, high-quality mock products to supplement the dummyjson API.
 * Using known-working Unsplash photo IDs.
 */

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

export const MOCK_PRODUCTS = [
  // --- BEAUTY ---
  {
    id: 1001, title: "Luxe Glow Serum", category: "beauty", price: 45, discountPercentage: 15, rating: 4.8, 
    stock: 50, brand: "LuxeBeauty", thumbnail: unsplash("1522335789203-aabd1fc54bc9"),
    description: "Revitalizing face serum with Vitamin C and hyaluronic acid for a radiant complexion."
  },
  {
    id: 1002, title: "Velvet Matte Lipstick", category: "beauty", price: 24, discountPercentage: 10, rating: 4.6, 
    stock: 120, brand: "LuxeBeauty", thumbnail: unsplash("1586776993311-2c9994cf025e"),
    description: "Long-lasting matte lipstick with a creamy texture and vibrant pigmentation."
  },
  {
    id: 1003, title: "Mineral Eye Palette", category: "beauty", price: 38, discountPercentage: 5, rating: 4.9, 
    stock: 45, brand: "GlamCore", thumbnail: unsplash("1512496011211-3221997239fb"),
    description: "12-shade eyeshadow palette featuring earthy tones and shimmering finishes."
  },
  {
    id: 1004, title: "Organic Rose Water", category: "beauty", price: 18, discountPercentage: 0, rating: 4.5, 
    stock: 80, brand: "PureNaturals", thumbnail: unsplash("1608248597279-f99d160bfcbc"),
    description: "100% pure steam-distilled rose water for soothing and hydrating the skin."
  },
  {
    id: 1005, title: "Precision Brow Pencil", category: "beauty", price: 15, discountPercentage: 12, rating: 4.7, 
    stock: 200, brand: "GlamCore", thumbnail: unsplash("1522338271444-12403069fc4f"),
    description: "Ultra-fine tip pencil for natural-looking, defined brows with all-day wear."
  },
  {
    id: 1006, title: "Silk Foundation Brush", category: "beauty", price: 29, discountPercentage: 20, rating: 4.8, 
    stock: 60, brand: "ArtisanTools", thumbnail: unsplash("1596462502278-27bfdc4033c8"),
    description: "Professional-grade synthetic fiber brush for a flawless airbrushed foundation finish."
  },
  {
    id: 1007, title: "Hydrating Primer", category: "beauty", price: 32, discountPercentage: 10, rating: 4.4, 
    stock: 90, brand: "PureNaturals", thumbnail: unsplash("1601049541289-9b1b7abcad87"),
    description: "Blurring and hydrating primer that locks in makeup for up to 16 hours."
  },
  {
    id: 1008, title: "Midnight Repair Oil", category: "beauty", price: 55, discountPercentage: 8, rating: 4.9, 
    stock: 30, brand: "LuxeBeauty", thumbnail: unsplash("1556228720-195a008220fd"),
    description: "Potent overnight treatment oil that restores elasticity and smooths fine lines."
  },

  // --- FRAGRANCES ---
  {
    id: 1009, title: "Oud Noir Essence", category: "fragrances", price: 120, discountPercentage: 5, rating: 4.9, 
    stock: 15, brand: "LuxeScent", thumbnail: unsplash("1594035910387-fea4773c2cc3"),
    description: "A mysterious blend of rare oud wood, smoky incense, and warm leather."
  },
  {
    id: 1010, title: "Azure Coast EDP", category: "fragrances", price: 85, discountPercentage: 10, rating: 4.7, 
    stock: 40, brand: "LuxeScent", thumbnail: unsplash("1583509177114-6102a3a54b3a"),
    description: "Fresh aquatic notes mixed with citrus and Mediterranean sea salt."
  },
  {
    id: 1011, title: "Velvet Rose Perfume", category: "fragrances", price: 95, discountPercentage: 15, rating: 4.8, 
    stock: 25, brand: "FloraLuna", thumbnail: unsplash("1588405748347-1510d738f71b"),
    description: "A romantic and deep floral fragrance centered around Damask Rose and Amber."
  },
  {
    id: 1012, title: "Golden Amber Mist", category: "fragrances", price: 70, discountPercentage: 0, rating: 4.5, 
    stock: 55, brand: "FloraLuna", thumbnail: unsplash("1563170351-be39c88ea276"),
    description: "Warm, sweet notes of vanilla, amber, and roasted tonka beans."
  },
  {
    id: 1013, title: "Wild Fern Cologne", category: "fragrances", price: 65, discountPercentage: 20, rating: 4.6, 
    stock: 60, brand: "Verde", thumbnail: unsplash("1523275335684-37898b6baf30"),
    description: "Crisp and earthy scent with notes of moss, fern, and cedarwood."
  },
  {
    id: 1014, title: "Solar Citron Extrait", category: "fragrances", price: 110, discountPercentage: 5, rating: 4.9, 
    stock: 20, brand: "LuxeScent", thumbnail: unsplash("1557170334-a7c3c45695cb"),
    description: "Vibrant lemon infusion with jasmine undertones and a musk base."
  },
  {
    id: 1015, title: "Midnight Jasmine", category: "fragrances", price: 78, discountPercentage: 12, rating: 4.4, 
    stock: 45, brand: "FloraLuna", thumbnail: unsplash("1592945403244-b3fbafd7f539"),
    description: "Rich white floral bouquet that blooms in the evening hours."
  },
  {
    id: 1016, title: "Spiced Santal", category: "fragrances", price: 92, discountPercentage: 0, rating: 4.7, 
    stock: 35, brand: "Verde", thumbnail: unsplash("1557170334-a7c3c45695cb"),
    description: "Sandalwood blended with cardamom, papyrus, and iris."
  },

  // --- FURNITURE ---
  {
    id: 1017, title: "Velvet Accent Chair", category: "furniture", price: 299, discountPercentage: 10, rating: 4.8, 
    stock: 12, brand: "NordicHome", thumbnail: unsplash("1567538096630-e0c55bd6374c"),
    description: "Elegant velvet upholstered chair with gold-finished metal legs."
  },
  {
    id: 1018, title: "Marble Coffee Table", category: "furniture", price: 450, discountPercentage: 5, rating: 4.9, 
    stock: 8, brand: "NordicHome", thumbnail: unsplash("1533090481720-856c6e3c1fdc"),
    description: "Genuine white marble top with a minimalist black steel frame."
  },
  {
    id: 1019, title: "Oakwood Dining Set", category: "furniture", price: 899, discountPercentage: 15, rating: 4.7, 
    stock: 5, brand: "TimberCraft", thumbnail: unsplash("1551133990-79c096e6a549"),
    description: "Solid oak dining table with four matching minimalist chairs."
  },
  {
    id: 1020, title: "Cloud Hybrid Sofa", category: "furniture", price: 1200, discountPercentage: 8, rating: 4.6, 
    stock: 3, brand: "CloudComfort", thumbnail: unsplash("1493663284031-b7e3aefcae8e"),
    description: "Modular sofa with high-density foam and stain-resistant fabric."
  },
  {
    id: 1021, title: "Brass Floor Lamp", category: "furniture", price: 150, discountPercentage: 20, rating: 4.5, 
    stock: 25, brand: "Lume", thumbnail: unsplash("1507473885765-e6ed015db3b1"),
    description: "Dimmable brushed brass floor lamp with an adjustable linen shade."
  },
  {
    id: 1022, title: "Floating Shelf Unit", category: "furniture", price: 85, discountPercentage: 0, rating: 4.3, 
    stock: 40, brand: "TimberCraft", thumbnail: unsplash("1594913785162-e6785b49dea3"),
    description: "Set of 3 minimalist wall shelves made from reclaimed walnut wood."
  },
  {
    id: 1023, title: "Leather Work Stool", category: "furniture", price: 180, discountPercentage: 12, rating: 4.4, 
    stock: 15, brand: "NordicHome", thumbnail: unsplash("1503602642458-232111445657"),
    description: "Premium leather swivel stool with pneumatic height adjustment."
  },
  {
    id: 1024, title: "Zen Bedside Table", category: "furniture", price: 120, discountPercentage: 10, rating: 4.7, 
    stock: 22, brand: "CloudComfort", thumbnail: unsplash("1533090161767-e6ac016c88a4"),
    description: "Single-drawer bedside table with a natural bamboo finish."
  },

  // --- HOME DECORATION ---
  {
    id: 1025, title: "Ceramic Minimalist Vase", category: "home-decoration", price: 35, discountPercentage: 5, rating: 4.8, 
    stock: 60, brand: "ArtisanHome", thumbnail: unsplash("1551133990-79c096e6a549"),
    description: "Matte-finished ceramic vase with organic curves for modern interiors."
  },
  {
    id: 1026, title: "Abstarct Gold Canvas", category: "home-decoration", price: 120, discountPercentage: 15, rating: 4.9, 
    stock: 15, brand: "ArtisanHome", thumbnail: unsplash("1579783902614-a3fb3927b6a5"),
    description: "Large abstract wall art featuring gold leaf textures and deep blues."
  },
  {
    id: 1027, title: "Macrame Wall Hanging", category: "home-decoration", price: 45, discountPercentage: 10, rating: 4.6, 
    stock: 30, brand: "BohoSpirit", thumbnail: unsplash("1528659588503-45db66846101"),
    description: "Handcrafted cotton macrame piece with wooden dowel support."
  },
  {
    id: 1028, title: "Scented Soy Candle", category: "home-decoration", price: 22, discountPercentage: 0, rating: 4.7, 
    stock: 100, brand: "ZenLight", thumbnail: unsplash("1602850450398-74b670ac0a69"),
    description: "Vanilla and sea salt scented soy candle in a reusable glass jar."
  },
  {
    id: 1029, title: "Glass Terrarium", category: "home-decoration", price: 28, discountPercentage: 5, rating: 4.4, 
    stock: 50, brand: "BohoSpirit", thumbnail: unsplash("1521741639893-ce53755bd5c8"),
    description: "Geometric glass terrarium for succulents or decorative display."
  },
  {
    id: 1030, title: "Velvet Throw Pillow", category: "home-decoration", price: 18, discountPercentage: 20, rating: 4.5, 
    stock: 85, brand: "ZenLight", thumbnail: unsplash("1584132805793-773df9952e20"),
    description: "Ultra-soft velvet pillow covers available in emerald and mustard colors."
  },
  {
    id: 1031, title: "Industrial Wall Clock", category: "home-decoration", price: 55, discountPercentage: 12, rating: 4.3, 
    stock: 20, brand: "ArtisanHome", thumbnail: unsplash("1563861826100-9cb868fdbe1c"),
    description: "Large 24-inch metal clock with silent quartz movement."
  },
  {
    id: 1032, title: "Indoor Olive Tree", category: "home-decoration", price: 140, discountPercentage: 0, rating: 4.8, 
    stock: 12, brand: "PureNaturals", thumbnail: unsplash("1612360424253-abfe77af6dfc"),
    description: "6-foot tall lifelike artificial olive tree in a premium textured pot."
  },

  // --- LAPTOPS ---
  {
    id: 1033, title: "ZenBook Pro 16", category: "laptops", price: 1899, discountPercentage: 5, rating: 4.9, 
    stock: 15, brand: "Zenith", thumbnail: unsplash("1496181133206-80ce9b88a853"),
    description: "16-inch OLED workstation with RTX 4070 and 32GB RAM."
  },
  {
    id: 1034, title: "AirGlide Ultra 13", category: "laptops", price: 1299, discountPercentage: 10, rating: 4.8, 
    stock: 25, brand: "AirTech", thumbnail: unsplash("1517336714731-483689fd1ec8"),
    description: "Lightweight 13-inch laptop with 20-hour battery life and fanless design."
  },
  {
    id: 1035, title: "Titan Gaming X", category: "laptops", price: 2499, discountPercentage: 0, rating: 4.7, 
    stock: 8, brand: "Titan", thumbnail: unsplash("1593642702821-c8da63c14745"),
    description: "High-performance gaming laptop with 240Hz display and mechanical keyboard."
  },
  {
    id: 1036, title: "StreamLine Duo 14", category: "laptops", price: 950, discountPercentage: 15, rating: 4.4, 
    stock: 30, brand: "Zenith", thumbnail: unsplash("1519389950473-47ba0277781c"),
    description: "Productivity laptop featuring a secondary screen above the keyboard."
  },
  {
    id: 1037, title: "EcoLight Chromebook", category: "laptops", price: 349, discountPercentage: 5, rating: 4.2, 
    stock: 50, brand: "AirTech", thumbnail: unsplash("1588872657578-7efd1f1555ed"),
    description: "Fast-booting ChromeOS device perfect for students and light tasks."
  },
  {
    id: 1038, title: "PixelPad Pro 12", category: "laptops", price: 1100, discountPercentage: 10, rating: 4.6, 
    stock: 20, brand: "AirTech", thumbnail: unsplash("1542744094-24638eff58bb"),
    description: "2-in-1 detachable laptop with stylus support and 4K resolution."
  },
  {
    id: 1039, title: "Forge Workstation", category: "laptops", price: 3200, discountPercentage: 0, rating: 5.0, 
    stock: 4, brand: "Titan", thumbnail: unsplash("1531297484001-80022131f5a1"),
    description: "Desktop-grade power in a laptop form factor with massive cooling fans."
  },
  {
    id: 1040, title: "NanoBook Mini 10", category: "laptops", price: 499, discountPercentage: 20, rating: 4.1, 
    stock: 45, brand: "Zenith", thumbnail: unsplash("1544244015-0df4b3ffc6b0"),
    description: "Compact 10-inch Windows laptop for ultimate portability."
  },

  // --- MENS SHIRTS ---
  {
    id: 1041, title: "Linen Oxford Shirt", category: "mens-shirts", price: 55, discountPercentage: 10, rating: 4.7, 
    stock: 150, brand: "OxfordCrest", thumbnail: unsplash("1596755094514-f87e34085b2c"),
    description: "Breathable 100% organic linen shirt with a tailored slim fit."
  },
  {
    id: 1042, title: "Denim Utility Overshirt", category: "mens-shirts", price: 78, discountPercentage: 15, rating: 4.6, 
    stock: 80, brand: "RuggedWear", thumbnail: unsplash("1602810318383-e386cc2a3ccf"),
    description: "Heavyweight indigo denim shirt with reinforced double-stitch seams."
  },
  {
    id: 1043, title: "Classic White Poplin", category: "mens-shirts", price: 45, discountPercentage: 0, rating: 4.8, 
    stock: 200, brand: "OxfordCrest", thumbnail: unsplash("1617127365659-c27684074212"),
    description: "Crisp cotton poplin dress shirt, perfect for formal occasions."
  },
  {
    id: 1044, title: "Flannel Plaid Shirt", category: "mens-shirts", price: 62, discountPercentage: 20, rating: 4.5, 
    stock: 65, brand: "RuggedWear", thumbnail: unsplash("1604644401890-0bd678c83788"),
    description: "Soft brushed flannel in a classic buffalo check pattern."
  },
  {
    id: 1045, title: "Stretch Polo Performance", category: "mens-shirts", price: 38, discountPercentage: 5, rating: 4.4, 
    stock: 120, brand: "AthleMode", thumbnail: unsplash("1581655353564-df123a1eb820"),
    description: "Moisture-wicking polo shirt with 4-way stretch for golf and office."
  },
  {
    id: 1046, title: "Silk Evening Shirt", category: "mens-shirts", price: 110, discountPercentage: 10, rating: 4.9, 
    stock: 30, brand: "LuxeCouture", thumbnail: unsplash("1596755100094-18c64c7849e7"),
    description: "Premium Mulberry silk shirt with a subtle sheen for night events."
  },
  {
    id: 1047, title: "Graphic Print Rayon", category: "mens-shirts", price: 42, discountPercentage: 0, rating: 4.3, 
    stock: 95, brand: "AthleMode", thumbnail: unsplash("1523381210434-271e8be1f52b"),
    description: "Lightweight camp collar shirt with hand-drawn tropical prints."
  },
  {
    id: 1048, title: "Cashmere Button-Up", category: "mens-shirts", price: 160, discountPercentage: 5, rating: 4.8, 
    stock: 20, brand: "LuxeCouture", thumbnail: unsplash("1602810316498-ab67cf68c8e1"),
    description: "Luxury ultra-soft cashmere shirt for ultimate comfort and style."
  },

  // --- MENS SHOES ---
  {
    id: 1049, title: "Italian Leather Loafers", category: "mens-shoes", price: 180, discountPercentage: 10, rating: 4.9, 
    stock: 45, brand: "MilanoStep", thumbnail: unsplash("1535043934128-cf0b28d52f95"),
    description: "Hand-stitched full-grain leather loafers with a cushioned sole."
  },
  {
    id: 1050, title: "Urban Knit Sneakers", category: "mens-shoes", price: 95, discountPercentage: 20, rating: 4.7, 
    stock: 120, brand: "Velocity", thumbnail: unsplash("1560769629-975ec94e6a86"),
    description: "Breathable knit upper sneakers with reactive foam midsole."
  },
  {
    id: 1051, title: "Rugged Mountain Boots", category: "mens-shoes", price: 145, discountPercentage: 5, rating: 4.8, 
    stock: 60, brand: "PeakPerformer", thumbnail: unsplash("1542291026-7eec264c27ff"),
    description: "Waterproof trekking boots with Vibram grip for all terrains."
  },
  {
    id: 1052, title: "Minimalist White Leather", category: "mens-shoes", price: 120, discountPercentage: 0, rating: 4.6, 
    stock: 85, brand: "Velocity", thumbnail: unsplash("1600185365483-26d7a4cc7519"),
    description: "Clean aesthetic leather sneakers that pair with suits or jeans."
  },
  {
    id: 1053, title: "Suede Chelsea Boots", category: "mens-shoes", price: 165, discountPercentage: 15, rating: 4.8, 
    stock: 35, brand: "MilanoStep", thumbnail: unsplash("1605733513597-a8f8ddec0d6f"),
    description: "Soft Italian suede boots with elastic side panels and wood-stacked heel."
  },
  {
    id: 1054, title: "Performance Running XP", category: "mens-shoes", price: 135, discountPercentage: 10, rating: 4.5, 
    stock: 75, brand: "PeakPerformer", thumbnail: unsplash("1542291026-7eec264c27ff"),
    description: "Carbon-plated racing shoes for breaking personal records."
  },
  {
    id: 1055, title: "Canvas Deck Shoes", category: "mens-shoes", price: 65, discountPercentage: 0, rating: 4.2, 
    stock: 100, brand: "Velocity", thumbnail: unsplash("1525966222134-fcfa99b8ae77"),
    description: "Durable canvas shoes with slip-resistant rubber soles for boating."
  },
  {
    id: 1056, title: "Luxury Velvet Slippers", category: "mens-shoes", price: 210, discountPercentage: 8, rating: 4.9, 
    stock: 20, brand: "MilanoStep", thumbnail: unsplash("1614594975525-e45190c55d0b"),
    description: "Embroidered velvet slippers for the ultimate home luxury experience."
  },

  // --- MENS WATCHES ---
  {
    id: 1057, title: "Chrono Stealth Edition", category: "mens-watches", price: 299, discountPercentage: 10, rating: 4.8, 
    stock: 25, brand: "Chronos", thumbnail: unsplash("1524592094714-0f0654e20314"),
    description: "Matte black stainless steel chronograph with sapphire crystal."
  },
  {
    id: 1058, title: "Maritime Diver 300", category: "mens-watches", price: 450, discountPercentage: 5, rating: 4.9, 
    stock: 12, brand: "DeepSea", thumbnail: unsplash("1522337360788-8b13df772ec2"),
    description: "Professional diver watch with 300m water resistance and ceramic bezel."
  },
  {
    id: 1059, title: "Minimalist Slate Gray", category: "mens-watches", price: 150, discountPercentage: 20, rating: 4.6, 
    stock: 60, brand: "Chronos", thumbnail: unsplash("1523275335684-37898b6baf30"),
    description: "Ultra-thin gray dial watch with a mesh steel strap."
  },
  {
    id: 1060, title: "Aviation Pilot Watch", category: "mens-watches", price: 380, discountPercentage: 0, rating: 4.7, 
    stock: 18, brand: "DeepSea", thumbnail: unsplash("1612817159949-195b6eb9e31a"),
    description: "Heritage design with large luminous numerals and calfskin strap."
  },
  {
    id: 1061, title: "Skeleton Mechanical Pro", category: "mens-watches", price: 550, discountPercentage: 12, rating: 5.0, 
    stock: 5, brand: "Precision", thumbnail: unsplash("1587839623512-4260aa7f394c"),
    description: "Automatic watch featuring a exposed movement through the dial."
  },
  {
    id: 1062, title: "Heritage Gold Automatic", category: "mens-watches", price: 890, discountPercentage: 0, rating: 4.9, 
    stock: 8, brand: "Precision", thumbnail: unsplash("1614164185128-e4ec99c436d7"),
    description: "18k gold plated case with an intricate moonphase complication."
  },
  {
    id: 1063, title: "Sport Rubber Strap", category: "mens-watches", price: 120, discountPercentage: 15, rating: 4.4, 
    stock: 80, brand: "Chronos", thumbnail: unsplash("1542496658-e33a6d0d50f6"),
    description: "Durable tactical watch with dual digital-analog timekeeping."
  },
  {
    id: 1064, title: "Smart Hybrid Classic", category: "mens-watches", price: 220, discountPercentage: 10, rating: 4.5, 
    stock: 40, brand: "Chronos", thumbnail: unsplash("1508685096489-77a4ad2ba519"),
    description: "Classic look watch with hidden fitness tracking and smart alerts."
  },

  // --- SKIN CARE ---
  {
    id: 1065, title: "Retinol Night Cream", category: "skin-care", price: 52, discountPercentage: 10, rating: 4.7, 
    stock: 60, brand: "DermLuxe", thumbnail: unsplash("1556228720-195a008220fd"),
    description: "Advanced anti-aging night cream that boosts cellular turnover."
  },
  {
    id: 1066, title: "Hyaluronic Acid Plump", category: "skin-care", price: 38, discountPercentage: 5, rating: 4.8, 
    stock: 90, brand: "SkinScience", thumbnail: unsplash("1601049541289-9b1b7abcad87"),
    description: "Intense hydration serum that binds moisture deep within the skin."
  },
  {
    id: 1067, title: "Detox Mud Mask", category: "skin-care", price: 28, discountPercentage: 15, rating: 4.5, 
    stock: 120, brand: "PureNaturals", thumbnail: unsplash("1596755389378-7d0d2211ca55"),
    description: "Mineral-rich Dead Sea mud mask for deep pore cleansing."
  },
  {
    id: 1068, title: "SunShield SPF 50+", category: "skin-care", price: 30, discountPercentage: 0, rating: 4.9, 
    stock: 200, brand: "DermLuxe", thumbnail: unsplash("1556228578-0d85b1a4d531"),
    description: "Non-greasy broad-spectrum protection against UVA and UVB rays."
  },
  {
    id: 1069, title: "Vitamin C Brightener", category: "skin-care", price: 45, discountPercentage: 12, rating: 4.6, 
    stock: 75, brand: "SkinScience", thumbnail: unsplash("1570172619644-dfd03ed5d881"),
    description: "Powerful antioxidant serum to fade dark spots and even skin tone."
  },
  {
    id: 1070, title: "Gentle Cream Cleanser", category: "skin-care", price: 24, discountPercentage: 8, rating: 4.4, 
    stock: 150, brand: "PureNaturals", thumbnail: unsplash("1556228443-4d649ed53760"),
    description: "Soap-free formula that cleanses without stripping natural oils."
  },
  {
    id: 1071, title: "Bakuchiol Eye Cream", category: "skin-care", price: 40, discountPercentage: 0, rating: 4.7, 
    stock: 55, brand: "SkinScience", thumbnail: unsplash("1521590832167-7bcbfaa6381f"),
    description: "Plant-based alternative to retinol for delicate under-eye skin."
  },
  {
    id: 1072, title: "Micellar Water Duo", category: "skin-care", price: 18, discountPercentage: 20, rating: 4.3, 
    stock: 180, brand: "DermLuxe", thumbnail: unsplash("1556228578-8c7c73a36481"),
    description: "Lifting makeup and dirt in one swipe with no rinsing needed."
  },

  // --- SUNGLASSES ---
  {
    id: 1073, title: "Aviator Gold Classic", category: "sunglasses", price: 125, discountPercentage: 10, rating: 4.8, 
    stock: 45, brand: "Visionary", thumbnail: unsplash("1572635196237-14b3f281503f"),
    description: "Iconic gold metal frames with polarized green-tinted lenses."
  },
  {
    id: 1074, title: "Wayfarer Carbon Pro", category: "sunglasses", price: 160, discountPercentage: 5, rating: 4.7, 
    stock: 30, brand: "Visionary", thumbnail: unsplash("1511499767390-945c23209ca1"),
    description: "Durable carbon-fiber frames with scratch-resistant blue lenses."
  },
  {
    id: 1075, title: "Retro Round Tortoise", category: "sunglasses", price: 95, discountPercentage: 15, rating: 4.5, 
    stock: 60, brand: "RetroSight", thumbnail: unsplash("1473496169904-658ba7c44d8a"),
    description: "Mid-century round design with a premium tortoise shell finish."
  },
  {
    id: 1076, title: "Oversized Diva Shades", category: "sunglasses", price: 140, discountPercentage: 0, rating: 4.6, 
    stock: 25, brand: "RetroSight", thumbnail: unsplash("1508296695146-257a814070b4"),
    description: "Hollywood-inspired thick black frames with gradient lenses."
  },
  {
    id: 1077, title: "Sport Wrap-Around", category: "sunglasses", price: 80, discountPercentage: 20, rating: 4.4, 
    stock: 100, brand: "PeakPerformer", thumbnail: unsplash("1534367507873-ee2f1ca0397d"),
    description: "Fog-free vented sunglasses for high-intensity outdoor sports."
  },
  {
    id: 1078, title: "Luxury Cat-Eye", category: "sunglasses", price: 195, discountPercentage: 10, rating: 4.9, 
    stock: 15, brand: "Visionary", thumbnail: unsplash("1515255384-63300588ad17"),
    description: "Sharp cat-eye silhouette with inlaid crystals along the temples."
  },
  {
    id: 1079, title: "Titanium Ultralight", category: "sunglasses", price: 220, discountPercentage: 0, rating: 4.8, 
    stock: 20, brand: "Visionary", thumbnail: unsplash("1591079086511-d30321278132"),
    description: "Featherweight titanium frames that offer all-day comfort."
  },
  {
    id: 1080, title: "Bamboo Eco Shades", category: "sunglasses", price: 65, discountPercentage: 10, rating: 4.2, 
    stock: 80, brand: "PureNaturals", thumbnail: unsplash("1554118811-1e0d5822e6d9"),
    description: "Sustainable sunglasses featuring handcrafted bamboo arms."
  },

  // --- TABLETS ---
  {
    id: 1081, title: "Canvas Pro 13", category: "tablets", price: 899, discountPercentage: 10, rating: 4.9, 
    stock: 20, brand: "AirTech", thumbnail: unsplash("1542744173-8e7e53415bb0"),
    description: "Artist-first tablet with 16k pressure levels and textured screen."
  },
  {
    id: 1082, title: "ZenPad Air 11", category: "tablets", price: 599, discountPercentage: 5, rating: 4.7, 
    stock: 45, brand: "Zenith", thumbnail: unsplash("1561154418-52392363d5e8"),
    description: "Ultra-slim productivity tablet with detachable magnetic keyboard."
  },
  {
    id: 1083, title: "KidSmart Tab 8", category: "tablets", price: 149, discountPercentage: 20, rating: 4.4, 
    stock: 150, brand: "AirTech", thumbnail: unsplash("1511746015031-29478442c11d"),
    description: "Durable kid-proof tablet with parent controls and educational apps."
  },
  {
    id: 1084, title: "Reader Luxe E-Ink", category: "tablets", price: 280, discountPercentage: 0, rating: 4.8, 
    stock: 60, brand: "Zenith", thumbnail: unsplash("1461749280684-dccba630er2b"),
    description: "Paper-like display for readers with amber warm-light adjustment."
  },
  {
    id: 1085, title: "MediaFlow OLED", category: "tablets", price: 450, discountPercentage: 15, rating: 4.6, 
    stock: 35, brand: "Zenith", thumbnail: unsplash("1552044081-4b108990b501"),
    description: "12-inch OLED tablet optimized for high-quality streaming media."
  },
  {
    id: 1086, title: "WorkTab Enterprise", category: "tablets", price: 1100, discountPercentage: 5, rating: 4.5, 
    stock: 15, brand: "Titan", thumbnail: unsplash("1585518419759-7fe2e0fbf8a5"),
    description: "Rugged Enterprise tablet with built-in barcode scanner and 5G."
  },
  {
    id: 1087, title: "Mini Tab Pocket", category: "tablets", price: 220, discountPercentage: 0, rating: 4.1, 
    stock: 100, brand: "AirTech", thumbnail: unsplash("1544244015-0df4b3ffc6b0"),
    description: "7-inch compact tablet that fits in your jacket pocket."
  },
  {
    id: 1088, title: "Studio Pro Graph", category: "tablets", price: 1300, discountPercentage: 8, rating: 4.9, 
    stock: 10, brand: "Titan", thumbnail: unsplash("1531297484001-80022131f5a1"),
    description: "The ultimate tool for designers with unmatched color accuracy."
  },

  // --- TOPS ---
  {
    id: 1089, title: "Silk Camisole Top", category: "tops", price: 35, discountPercentage: 10, rating: 4.7, 
    stock: 120, brand: "LuxeCouture", thumbnail: unsplash("1515886657613-9f3515b0c78f"),
    description: "Elegant silk camisole with adjustable straps and lace trim."
  },
  {
    id: 1090, title: "Linen Crop Blouse", category: "tops", price: 42, discountPercentage: 5, rating: 4.5, 
    stock: 85, brand: "BohoSpirit", thumbnail: unsplash("1539109132332-62b8aa751356"),
    description: "Breathable linen crop top with a square neckline and puffed sleeves."
  },
  {
    id: 1091, title: "Essential Ribbed Tee", category: "tops", price: 18, discountPercentage: 0, rating: 4.6, 
    stock: 300, brand: "DailyBasic", thumbnail: unsplash("1521572163474-6864f9cf17ab"),
    description: "High-quality ribbed cotton t-shirt with a flattering slim fit."
  },
  {
    id: 1092, title: "Boho Embroidery Top", category: "tops", price: 55, discountPercentage: 15, rating: 4.8, 
    stock: 45, brand: "BohoSpirit", thumbnail: unsplash("1515886657613-9f3515b0c78f"),
    description: "White peasant blouse with intricate floral embroidery on the sleeves."
  },
  {
    id: 1093, title: "Cashmere Turtleneck", category: "tops", price: 125, discountPercentage: 10, rating: 4.9, 
    stock: 25, brand: "LuxeCouture", thumbnail: unsplash("1576566164379-3c11fcc0831b"),
    description: "Luxurious soft cashmere knit top for a refined winter look."
  },
  {
    id: 1094, title: "Structured Corset Top", category: "tops", price: 48, discountPercentage: 0, rating: 4.4, 
    stock: 60, brand: "GlamCore", thumbnail: unsplash("1551488831-00ddcb6c6bd3"),
    description: "Modern corset silhouette with boning support and back zipper."
  },
  {
    id: 1095, title: "Oversized Graphic Tee", category: "tops", price: 28, discountPercentage: 20, rating: 4.7, 
    stock: 150, brand: "DailyBasic", thumbnail: unsplash("1562157873-818bc0726f68"),
    description: "Vintage-washed cotton tee with a retro mountain landscape print."
  },
  {
    id: 1096, title: "One-Shoulder Drape", category: "tops", price: 39, discountPercentage: 5, rating: 4.5, 
    stock: 75, brand: "GlamCore", thumbnail: unsplash("1515886657613-9f3515b0c78f"),
    description: "Asymmetrical draped top made from high-stretch flowing fabric."
  },

  // --- WOMENS BAGS ---
  {
    id: 1097, title: "Quilted Leather Tote", category: "womens-bags", price: 210, discountPercentage: 10, rating: 4.9, 
    stock: 35, brand: "LuxeCarry", thumbnail: unsplash("1584917033900-eb5bc37ec42d"),
    description: "Luxurious quilted leather tote with large capacity and gold hardware."
  },
  {
    id: 1098, title: "Suede Bucket Bag", category: "womens-bags", price: 155, discountPercentage: 15, rating: 4.7, 
    stock: 50, brand: "ArtisanLeather", thumbnail: unsplash("1548036328-c9fa89d128fa"),
    description: "Rich espresso suede bucket bag with adjustable crossbody strap."
  },
  {
    id: 1099, title: "Mini Jeweled Clutch", category: "womens-bags", price: 120, discountPercentage: 5, rating: 4.8, 
    stock: 20, brand: "GlamCore", thumbnail: unsplash("1566150905458-1bf1fc113f0d"),
    description: "Satin evening clutch adorned with crystals and a chain strap."
  },
  {
    id: 1100, title: "Convertible Backpack", category: "womens-bags", price: 185, discountPercentage: 0, rating: 4.6, 
    stock: 40, brand: "DailyBasic", thumbnail: unsplash("1547949003-9792a18a2601"),
    description: "Sleek nylon backpack that easily converts into a shoulder bag."
  },
  {
    id: 1101, title: "Snakeskin Box Bag", category: "womens-bags", price: 140, discountPercentage: 20, rating: 4.4, 
    stock: 30, brand: "LuxeCarry", thumbnail: unsplash("1591561954557-26941169b49e"),
    description: "Structured box bag with an exotic faux-snakeskin texture."
  },
  {
    id: 1102, title: "Woven Straw Beach Bag", category: "womens-bags", price: 65, discountPercentage: 10, rating: 4.5, 
    stock: 120, brand: "BohoSpirit", thumbnail: unsplash("1511200371465-b1a996f8dc31"),
    description: "Large hand-woven straw bag with leather handles and inner lining."
  },
  {
    id: 1103, title: "Neon Statement Pouch", category: "womens-bags", price: 45, discountPercentage: 0, rating: 4.2, 
    stock: 85, brand: "GlamCore", thumbnail: unsplash("1598532163257-ae3c6b2524b6"),
    description: "Vibrant neon-green zippered pouch made from vegan leather."
  },
  {
    id: 1104, title: "Vintage Doctor Bag", category: "womens-bags", price: 299, discountPercentage: 5, rating: 4.9, 
    stock: 8, brand: "ArtisanLeather", thumbnail: unsplash("1590874103328-eac38a683ce7"),
    description: "Authentic vintage-style leather bag with a rigid frame and lock."
  },

  // --- WOMENS DRESSES ---
  {
    id: 1105, title: "Emerald Satin Gown", category: "womens-dresses", price: 240, discountPercentage: 10, rating: 4.9, 
    stock: 15, brand: "LuxeCouture", thumbnail: unsplash("1595777457583-95e059d581b8"),
    description: "Floor-length bias-cut satin gown with a cowl neck and open back."
  },
  {
    id: 1106, title: "Floral Midi Sundress", category: "womens-dresses", price: 65, discountPercentage: 15, rating: 4.7, 
    stock: 100, brand: "FloraLuna", thumbnail: unsplash("1490481651871-ab68ff25d43d"),
    description: "Lightweight rayon midi dress with a ditsy floral print and ruffle hem."
  },
  {
    id: 1107, title: "Structured Blazer Dress", category: "womens-dresses", price: 110, discountPercentage: 0, rating: 4.8, 
    stock: 45, brand: "LuxeCouture", thumbnail: unsplash("1595777457583-95e059d581b8"),
    description: "Double-breasted mini dress with sharp lapels and gold buttons."
  },
  {
    id: 1108, title: "Boho Maxi Lace Dress", category: "womens-dresses", price: 145, discountPercentage: 5, rating: 4.6, 
    stock: 30, brand: "BohoSpirit", thumbnail: unsplash("1515886657613-9f3515b0c78f"),
    description: "Intricate lacework maxi dress perfect for beach weddings."
  },
  {
    id: 1109, title: "Pleated Velvet Mini", category: "womens-dresses", price: 85, discountPercentage: 20, rating: 4.5, 
    stock: 60, brand: "GlamCore", thumbnail: unsplash("1585487000160-dc60327f310f"),
    description: "Deep burgundy velvet dress with short sleeves and pleated skirt."
  },
  {
    id: 1110, title: "Chiffon A-Line Dress", category: "womens-dresses", price: 78, discountPercentage: 0, rating: 4.4, 
    stock: 80, brand: "FloraLuna", thumbnail: unsplash("1490481651871-ab68ff25d43d"),
    description: "Flowing chiffon dress with a belted waist and polka dot pattern."
  },
  {
    id: 1111, title: "Ribbed Bodycon Dress", category: "womens-dresses", price: 42, discountPercentage: 10, rating: 4.3, 
    stock: 150, brand: "DailyBasic", thumbnail: unsplash("1515886657613-9f3515b0c78f"),
    description: "Stretchy ribbed knit dress that contour to your shape."
  },
  {
    id: 1112, title: "Sequin Party Dress", category: "womens-dresses", price: 165, discountPercentage: 5, rating: 5.0, 
    stock: 20, brand: "GlamCore", thumbnail: unsplash("1595777457583-95e059d581b8"),
    description: "Dazzling multi-color sequin mini dress that catches every light."
  },

  // --- WOMENS JEWELLERY ---
  {
    id: 1113, title: "Diamond Halo Studs", category: "womens-jewellery", price: 599, discountPercentage: 5, rating: 4.9, 
    stock: 12, brand: "AuraGems", thumbnail: unsplash("1515562141521-c1473d0691ef"),
    description: "Hand-selected brilliant-cut diamonds with a halo of smaller stones."
  },
  {
    id: 1114, title: "Gold Link Bracelet", category: "womens-jewellery", price: 210, discountPercentage: 10, rating: 4.8, 
    stock: 35, brand: "AuraGems", thumbnail: unsplash("1611591437281-460bfbe1220a"),
    description: "Heavy 14k gold-filled bold link bracelet with a T-bar clasp."
  },
  {
    id: 1115, title: "Pearl Drop Earrings", category: "womens-jewellery", price: 85, discountPercentage: 0, rating: 4.7, 
    stock: 60, brand: "LuxeBijoux", thumbnail: unsplash("1535633302708-1a55c6ce7933"),
    description: "Freshwater pearls suspended from sterling silver hooks."
  },
  {
    id: 1116, title: "Emerald Solitaire Ring", category: "womens-jewellery", price: 450, discountPercentage: 15, rating: 4.6, 
    stock: 8, brand: "AuraGems", thumbnail: unsplash("1605100804763-247f67b3557e"),
    description: "Vibrant emerald cut gemstone set in an art-deco inspired band."
  },
  {
    id: 1117, title: "Layered Medal Necklace", category: "womens-jewellery", price: 45, discountPercentage: 20, rating: 4.5, 
    stock: 120, brand: "BohoSpirit", thumbnail: unsplash("1599643444489-089c77e09848"),
    description: "Three-tier dainy necklace featuring stamped vintage-style medals."
  },
  {
    id: 1118, title: "Cuff Silver Bangle", category: "womens-jewellery", price: 92, discountPercentage: 0, rating: 4.4, 
    stock: 50, brand: "LuxeBijoux", thumbnail: unsplash("1573408302355-a9d35b7190f8"),
    description: "Sleek hammered sterling silver cuff with minimalist engravings."
  },
  {
    id: 1119, title: "Rose Gold Nose Stud", category: "womens-jewellery", price: 28, discountPercentage: 5, rating: 4.3, 
    stock: 200, brand: "LuxeBijoux", thumbnail: unsplash("1611085583191-a3b1a30a5a3a"),
    description: "Tiny 1mm genuine rose gold stud with a subtle sparkle."
  },
  {
    id: 1120, title: "Astral Zodiac Pendant", category: "womens-jewellery", price: 58, discountPercentage: 10, rating: 4.7, 
    stock: 85, brand: "BohoSpirit", thumbnail: unsplash("1596944210900-34d2105869e9"),
    description: "Constellation-etched gold pendant based on your star sign."
  },

  // --- WOMENS SHOES / SLIPPERS ---
  {
    id: 1121, title: "Silk Comfort Slippers", category: "womens-shoes", price: 45, discountPercentage: 10, rating: 4.8, 
    stock: 120, brand: "LuxeLounge", thumbnail: unsplash("1596040033229-a9821ebd058d"),
    description: "Ultra-soft silk lined slippers with high-density memory foam padding."
  },
  {
    id: 1122, title: "Velvet Bow Mules", category: "womens-shoes", price: 58, discountPercentage: 15, rating: 4.7, 
    stock: 85, brand: "LuxeLounge", thumbnail: unsplash("1614594975525-e45190c55d0b"),
    description: "Crushed velvet indoor-outdoor mules with an oversized decorative bow."
  },
  {
    id: 1123, title: "Sheepskin Booties", category: "womens-shoes", price: 85, discountPercentage: 5, rating: 4.9, 
    stock: 40, brand: "PureNaturals", thumbnail: unsplash("1542838132-92c53300491e"),
    description: "Australian sheepskin booties to keep your feet warm in deep winter."
  },
  {
    id: 1124, title: "Strappy Stiletto Heels", category: "womens-shoes", price: 140, discountPercentage: 0, rating: 4.6, 
    stock: 60, brand: "GlamCore", thumbnail: unsplash("1543163521-1bf539c55dd2"),
    description: "Classic 4-inch stilettos with delicate straps and buckle fastening."
  },
  {
    id: 1125, title: "Pastel Platform Sneakers", category: "womens-shoes", price: 75, discountPercentage: 20, rating: 4.5, 
    stock: 100, brand: "Velocity", thumbnail: unsplash("1552346154-21d3a8151919"),
    description: "Chunky platform sneakers in dream-like pastel color blocking."
  },
  {
    id: 1126, title: "Pointed Toe Flats", category: "womens-shoes", price: 62, discountPercentage: 10, rating: 4.4, 
    stock: 150, brand: "DailyBasic", thumbnail: unsplash("1603808033192-082d6919d3e1"),
    description: "Sleek faux-leather flats with a classic pointed toe and padded insole."
  },
  {
    id: 1127, title: "Linen ESPadrilles", category: "womens-shoes", price: 55, discountPercentage: 0, rating: 4.3, 
    stock: 90, brand: "BohoSpirit", thumbnail: unsplash("1560343090-f0409e92791a"),
    description: "Traditional Spanish espadrilles with woven jute soles and linen uppers."
  },
  {
    id: 1128, title: "Cloud Mesh Runners", category: "womens-shoes", price: 110, discountPercentage: 5, rating: 4.7, 
    stock: 55, brand: "PeakPerformer", thumbnail: unsplash("1542291026-7eec264c27ff"),
    description: "Featherweight running shoes with 'CloudRun' air cushioning system."
  },

  // --- WOMENS WATCHES ---
  {
    id: 1129, title: "Rose Gold Mesh Watch", category: "womens-watches", price: 180, discountPercentage: 10, rating: 4.9, 
    stock: 45, brand: "AuraGrace", thumbnail: unsplash("1522337360788-8b13df772ec2"),
    description: "Minimalist rose gold watch with a matching mesh steel band."
  },
  {
    id: 1130, title: "Petite Diamond Dial", category: "womens-watches", price: 299, discountPercentage: 5, rating: 4.8, 
    stock: 20, brand: "Precision", thumbnail: unsplash("1508685096489-77a4ad2ba519"),
    description: "Elegant small-face watch with diamond markers at every hour."
  },
  {
    id: 1131, title: "Pastel Leather Strap", category: "womens-watches", price: 95, discountPercentage: 15, rating: 4.6, 
    stock: 80, brand: "AuraGrace", thumbnail: unsplash("1542496658-e33a6d0d50f6"),
    description: "Baby blue genuine leather strap with a clean white ceramic dial."
  },
  {
    id: 1132, title: "Classic Silver Links", category: "womens-watches", price: 140, discountPercentage: 0, rating: 4.5, 
    stock: 65, brand: "AuraGrace", thumbnail: unsplash("1509115502069-07945d83637e"),
    description: "Polished stainless steel link watch with a rectangle case."
  },
  {
    id: 1133, title: "Celestial Moonphase", category: "womens-watches", price: 120, discountPercentage: 20, rating: 4.7, 
    stock: 35, brand: "Precision", thumbnail: unsplash("1614164185128-e4ec99c436d7"),
    description: "Night-sky dial with a functional moonphase and star constellations."
  },
  {
    id: 1134, title: "Boho Wood Grain", category: "womens-watches", price: 78, discountPercentage: 0, rating: 4.3, 
    stock: 100, brand: "BohoSpirit", thumbnail: unsplash("1523275335684-37898b6baf30"),
    description: "Handcrafted watch with a wooden dial and natural cork strap."
  },
  {
    id: 1135, title: "Chrono Sport Diva", category: "womens-watches", price: 165, discountPercentage: 10, rating: 4.4, 
    stock: 50, brand: "Precision", thumbnail: unsplash("1587839623512-4260aa7f394c"),
    description: "Fashion-forward chronograph with a white rubber athletic strap."
  },
  {
    id: 1136, title: "Smart Slim Elegance", category: "womens-watches", price: 210, discountPercentage: 5, rating: 4.5, 
    stock: 30, brand: "AuraGrace", thumbnail: unsplash("1508685096489-77a4ad2ba519"),
    description: "Hybrid smart watch that tracks health while looking perfectly classic."
  }
];
