const Product= [
    {
      id: "E1",
      title: "Rockerz 450 ANC Headphones",
      img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      brand_id: "BRD1",
      brand: "Boat",
      category_id: "CAT1",
      category: "Electronics",
      price: 99,
      discountPrice: 79,
      detail: "50mm drivers, 40hrs playback",
      t_id:"t1"
    },
    {
      id: "E2",
      title: "Stone 1200 Speaker",
      img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
      brand_id: "BRD1",
      brand: "Boat",
      category_id: "CAT1",
      category: "Electronics",
      price: 129,
      discountPrice: 99,
      detail: "40W RMS, IPX7 waterproof"
    },
    {
      id: "E3",
      title: "Airdopes 131 Pro",
      img: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
      brand_id: "BRD1",
      brand: "Boat",
      category_id: "CAT1",
      category: "Electronics",
      price: 49,
      discountPrice: 39,
      detail: "45hrs playtime, ENC mic",
      t_id:"t2"
    },

    // --- Apple Products --- //
    {
      id: "E4",
      title: "iPhone 15 Pro",
      img: "https://images.unsplash.com/photo-1702289613007-8b830e2520b0",
      brand_id: "BRD2",
      brand: "Apple",
      category_id: "CAT1",
      category: "Electronics",
      price: 999,
      discountPrice: 899,
      detail: "A17 Pro chip, Titanium design"
    },
    {
      id: "E5",
      title: "MacBook Air M2",
      img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
      brand_id: "BRD2",
      brand: "Apple",
      category_id: "CAT1",
      category: "Electronics",
      price: 1099,
      discountPrice: 999,
      detail: "13.6\" Liquid Retina display",
      t_id:"t3"
    },
    {
      id: "E6",
      title: "AirPods Pro (2nd Gen)",
      img: "https://images.unsplash.com/photo-1591370264374-9a5aef8df17a",
      brand_id: "BRD2",
      brand: "Apple",
      category_id: "CAT1",
      category: "Electronics",
      price: 249,
      discountPrice: 199,
      detail: "Adaptive Noise Cancellation",
      
    },

    // --- Sony Products --- //
    {
      id: "E7",
      title: "WH-1000XM5 Headphones",
      img: "https://images.unsplash.com/photo-1615826932727-ed9f182ac67e",
      brand_id: "BRD3",
      brand: "Sony",
      category_id: "CAT1",
      category: "Electronics",
      price: 399,
      discountPrice: 349,
      detail: "Industry-leading ANC",
      t_id:"t4"
    },
    {
      id: "E8",
      title: "PlayStation 5 Slim",
      img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e",
      brand_id: "BRD3",
      brand: "Sony",
      category_id: "CAT1",
      category: "Electronics",
      price: 499,
      discountPrice: 449,
      detail: "4K/120Hz, 1TB SSD",
      t_id:"t5"
    },
    {
      id: "E9",
      title: "Bravia XR TV",
      img: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
      brand_id: "BRD3",
      brand: "Sony",
      category_id: "CAT1",
      category: "Electronics",
      price: 1999,
      discountPrice: 1799,
      detail: "55\" OLED 4K HDR"
    },

    // ========== DRESS ========== //
    // --- Zara Products --- //
    {
      id: "D1",
      title: "Floral Wrap Dress",
      img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
      brand_id: "BRD4",
      brand: "Zara",
      category_id: "CAT2",
      category: "Dress",
      price: 59,
      discountPrice: 49,
      detail: "V-neck, 100% cotton",
      t_id:"t6"
    },
    {
      id: "D2",
      title: "Tailored Blazer",
      img: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
      brand_id: "BRD4",
      brand: "Zara",
      category_id: "CAT2",
      category: "Dress",
      price: 89,
      discountPrice: 79,
      detail: "Wool blend, slim fit",
      t_id:"t7"
    },
    {
      id: "D3",
      title: "Mom Fit Jeans",
      img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a",
      brand_id: "BRD4",
      brand: "Zara",
      category_id: "CAT2",
      category: "Dress",
      price: 49,
      discountPrice: 39,
      detail: "High waist, stretch denim"
    },

    // --- H&M Products --- //
    {
      id: "D4",
      title: "Linen Shirt Dress",
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      brand_id: "BRD5",
      brand: "H&M",
      category_id: "CAT2",
      category: "Dress",
      price: 39,
      discountPrice: 29,
      detail: "Breathable linen fabric"
    },
    {
      id: "D5",
      title: "Oversized Denim Jacket",
      img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
      brand_id: "BRD5",
      brand: "H&M",
      category_id: "CAT2",
      category: "Dress",
      price: 59,
      discountPrice: 49,
      detail: "Classic blue wash"
    },
    {
      id: "D6",
      title: "Wide Leg Trousers",
      img: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg",
      brand_id: "BRD5",
      brand: "H&M",
      category_id: "CAT2",
      category: "Dress",
      price: 34,
      discountPrice: 24,
      detail: "Crepe fabric, elastic waist"
    },

    // --- Levi's Products --- //
    {
      id: "D7",
      title: "501 Original Jeans",
      img: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c",
      brand_id: "BRD6",
      brand: "Levi's",
      category_id: "CAT2",
      category: "Dress",
      price: 79,
      discountPrice: 69,
      detail: "Straight fit, 100% cotton"
    },
    {
      id: "D8",
      title: "Trucker Jacket",
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      brand_id: "BRD6",
      brand: "Levi's",
      category_id: "CAT2",
      category: "Dress",
      price: 89,
      discountPrice: 79,
      detail: "Classic denim jacket"
    },
    {
      id: "D9",
      title: "Denim Shorts",
      img: "https://images.unsplash.com/photo-1604176354204-9268737828e4",
      brand_id: "BRD6",
      brand: "Levi's",
      category_id: "CAT2",
      category: "Dress",
      price: 49,
      discountPrice: 39,
      detail: "5\" inseam, stretch fabric"
    },

    // ========== ACCESSORIES ========== //
    // --- Gucci Products --- //
    {
      id: "A1",
      title: "GG Marmont Belt",
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      brand_id: "BRD7",
      brand: "Gucci",
      category_id: "CAT3",
      category: "Accessories",
      price: 450,
      discountPrice: 399,
      detail: "Double G buckle, 3cm width",
      t_id:"t8"
    },
    {
      id: "A2",
      title: "Ophidia Shoulder Bag",
      img: "https://images.unsplash.com/photo-1554342872-034a06541bad",
      brand_id: "BRD7",
      brand: "Gucci",
      category_id: "CAT3",
      category: "Accessories",
      price: 1250,
      discountPrice: 1099,
      detail: "GG Supreme canvas"
    },
    {
      id: "A3",
      title: "Horsebit Loafers",
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      brand_id: "BRD7",
      brand: "Gucci",
      category_id: "CAT3",
      category: "Accessories",
      price: 680,
      discountPrice: 599,
      detail: "Leather, gold detail",
      t_id:"t9"

    },

    // --- Ray-Ban Products --- //
    {
      id: "A4",
      title: "Aviator Classic",
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      brand_id: "BRD8",
      brand: "Ray-Ban",
      category_id: "CAT3",
      category: "Accessories",
      price: 159,
      discountPrice: 139,
      detail: "Gold frame, green lenses",
      t_id:"t9"
    },
    {
      id: "A5",
      title: "Wayfarer Classic",
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      brand_id: "BRD8",
      brand: "Ray-Ban",
      category_id: "CAT3",
      category: "Accessories",
      price: 149,
      discountPrice: 129,
      detail: "Black frame, UV protection"
    },
    {
      id: "A6",
      title: "Clubmaster",
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      brand_id: "BRD8",
      brand: "Ray-Ban",
      category_id: "CAT3",
      category: "Accessories",
      price: 169,
      discountPrice: 149,
      detail: "Browline frame, brown lenses"
    },

    // --- Fossil Products --- //
    {
      id: "A7",
      title: "Gen 6 Smartwatch",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      brand_id: "BRD9",
      brand: "Fossil",
      category_id: "CAT3",
      category: "Accessories",
      price: 299,
      discountPrice: 249,
      detail: "AMOLED, Wear OS"
    },
    {
      id: "A8",
      title: "Leather Wallet",
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      brand_id: "BRD9",
      brand: "Fossil",
      category_id: "CAT3",
      category: "Accessories",
      price: 45,
      discountPrice: 39,
      detail: "4 card slots, RFID protection"
    },
    {
      id: "A9",
      title: "Backpack",
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      brand_id: "BRD9",
      brand: "Fossil",
      category_id: "CAT3",
      category: "Accessories",
      price: 129,
      discountPrice: 99,
      detail: "Nylon fabric, 15\" laptop sleeve",
      t_id:"t10"
    }
  ]
  export default Product;