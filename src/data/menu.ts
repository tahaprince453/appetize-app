import wingsImg from "@/assets/dish-wings.jpg";
import soupImg from "@/assets/dish-soup.jpg";
import steakImg from "@/assets/dish-steak.jpg";
import fishImg from "@/assets/dish-fish.jpg";
import chilliImg from "@/assets/dish-chilli.jpg";
import platterImg from "@/assets/dish-bbq-platter.jpg";
import pulaoImg from "@/assets/dish-pulao.jpg";
import biryaniImg from "@/assets/dish-biryani.jpg";
import handiImg from "@/assets/dish-handi.jpg";
import karahiImg from "@/assets/dish-karahi.jpg";
import icecreamImg from "@/assets/dish-icecream.jpg";
import charghaImg from "@/assets/dish-chargha.jpg";

export type MenuItem = {
  /** Item number exactly as printed on the menu */
  no: number;
  name: string;
  /** Only present when the printed menu itself lists contents */
  description?: string;
  price: number;
  category: string;
  badges?: string[];
  /** Real dish photo — only for signature/popular items */
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  /** Note printed under the category on the menu */
  note?: string;
};

/** Restaurant details exactly as printed on the menu. Edit here to update. */
export const restaurant = {
  name: "Tandoori Restaurant",
  branch: "TANDOORI G-8",
  tagline: "Precious Sense of Taste!",
  since: "Since 1993",
  address: "20-A Jasmine Plaza, G-8 Markaz, Islamabad",
  mobile: "0300-5111849",
  tel: "051-2260832",
  homeDelivery: "0346-4441888",
  homeDeliveryAlt: "0346 4441888",
  website: "www.tandoorirestaurants.pk",
  currency: "Rs.",
  notes: [
    "5% SERVICE CHARGES WILL BE APPLICABLE ON DINE-IN.",
    "ALL PRICES ARE SUBJECT TO GOVERNMENT TAXES.",
  ],
};

export const categories: MenuCategory[] = [
  { id: "starters", name: "Starters" },
  { id: "salads", name: "Salads" },
  {
    id: "soups",
    name: "Soups",
    note: "All soups are also served in single serving @ Rs. 495 + tax",
  },
  { id: "sandwiches-burgers", name: "Sandwiches & Burgers" },
  { id: "continental", name: "Continental Cuisine" },
  { id: "sea-food", name: "Sea Food" },
  {
    id: "chinese",
    name: "Chinese Cuisine",
    note: "All Chinese dishes served in sea food also will be charge @ Rs. 375 extra",
  },
  { id: "bbq", name: "BBQ" },
  { id: "rice-noodles", name: "Rice & Noodles" },
  { id: "pakistani-chicken", name: "Pakistani Cuisine (Chicken)" },
  { id: "pakistani-mutton", name: "Pakistani Cuisine (Mutton)" },
  { id: "vegetable-daal", name: "Vegetable & Daal" },
  { id: "tandoor", name: "Tandoor" },
  { id: "cold-beverages", name: "Cold Beverages" },
  { id: "hot-beverages", name: "Hot Beverages" },
  { id: "desserts", name: "Desserts" },
  { id: "new-arrival", name: "New Arrival" },
];

export const menuItems: MenuItem[] = [
  // STARTERS
  { no: 1, name: "BBQ Wings", price: 1145, category: "starters", image: wingsImg },
  { no: 2, name: "Honey Wings", price: 1195, category: "starters", image: wingsImg },
  { no: 3, name: "Spicy Wings", price: 1095, category: "starters", image: wingsImg },
  { no: 4, name: "Cheese Naan", price: 850, category: "starters" },
  { no: 5, name: "French Fries", price: 795, category: "starters" },
  { no: 6, name: "Fish Crackers", price: 650, category: "starters" },

  // SALADS
  { no: 7, name: "Russian Salad", price: 995, category: "salads" },
  { no: 8, name: "Kachumar Salad", price: 550, category: "salads" },
  { no: 9, name: "Fresh Green Salad", price: 450, category: "salads" },
  { no: 10, name: "Mint Raita", price: 375, category: "salads" },
  { no: 11, name: "Raita", price: 325, category: "salads" },

  // SOUPS
  { no: 12, name: "Tandoori Special Soup", price: 2095, category: "soups", badges: ["Signature"], image: soupImg },
  { no: 13, name: "Hot & Sour Soup", price: 1995, category: "soups", image: soupImg },
  { no: 14, name: "Chicken Corn Soup", price: 1925, category: "soups", image: soupImg },
  { no: 15, name: "Thai Soup", price: 1850, category: "soups", image: soupImg },
  { no: 16, name: "Chicken Vegetable Soup", price: 1895, category: "soups", image: soupImg },

  // SANDWICHES & BURGERS
  { no: 17, name: "Chicken Grilled Sandwich", price: 995, category: "sandwiches-burgers" },
  { no: 18, name: "Club Sandwich", price: 1145, category: "sandwiches-burgers" },
  { no: 19, name: "Chicken Sandwich", price: 895, category: "sandwiches-burgers" },
  { no: 20, name: "Grilled Chicken Burger", price: 1095, category: "sandwiches-burgers" },
  { no: 21, name: "Zinger Burger", price: 950, category: "sandwiches-burgers" },

  // CONTINENTAL CUISINE
  { no: 22, name: "Special Italian Chicken", price: 2195, category: "continental", image: steakImg },
  { no: 23, name: "Tandoori Special Steak", price: 2495, category: "continental", badges: ["Signature"], image: steakImg },
  { no: 24, name: "Tarragon Steak", price: 2395, category: "continental", image: steakImg },
  { no: 25, name: "Mushroom Steak", price: 2395, category: "continental", image: steakImg },
  { no: 26, name: "Pepper Steak", price: 2395, category: "continental", image: steakImg },
  { no: 27, name: "Mexican Steak", price: 2395, category: "continental", image: steakImg },

  // SEA FOOD
  { no: 28, name: "Tandoori Special Fish", price: 2850, category: "sea-food", badges: ["Signature"], image: fishImg },
  { no: 29, name: "Grilled Fish", price: 2495, category: "sea-food", image: fishImg },
  { no: 30, name: "Fried Fish & Chips (3 Pcs)", price: 2695, category: "sea-food" },
  { no: 31, name: "Finger Fish (8 Pcs)", price: 2650, category: "sea-food" },
  { no: 32, name: "Fish Chilli Dry", price: 2350, category: "sea-food" },

  // CHINESE CUISINE
  { no: 33, name: "Chicken Chilli Dry", price: 2395, category: "chinese", image: chilliImg },
  { no: 34, name: "Beef Chilli Dry", price: 2995, category: "chinese", image: chilliImg },
  { no: 35, name: "Chicken Shashlik", price: 2295, category: "chinese", image: chilliImg },
  { no: 36, name: "Kung Pao Chicken", price: 2295, category: "chinese", image: chilliImg },
  { no: 37, name: "Mongolian Chicken", price: 2395, category: "chinese", image: chilliImg },
  { no: 38, name: "Szechuan Chicken", price: 2395, category: "chinese", image: chilliImg },
  { no: 39, name: "Chicken Manchurian", price: 2250, category: "chinese", image: chilliImg },
  {
    no: 40,
    name: "Combo 1",
    description: "Egg Fried Rice, Chicken Almond, Drum Stick",
    price: 1895,
    category: "chinese",
    badges: ["Combo"],
  },
  {
    no: 41,
    name: "Combo 2",
    description: "Vegetable Fried Rice, Chicken Chilli Dry, Finger Fish",
    price: 1895,
    category: "chinese",
    badges: ["Combo"],
  },
  {
    no: 42,
    name: "Combo 3",
    description: "Vegetable Fried Rice, Beef Chilli Dry, Fried Wings",
    price: 1895,
    category: "chinese",
    badges: ["Combo"],
  },

  // BBQ
  {
    no: 43,
    name: "Tandoori Special BBQ Platter",
    description:
      "Mutton Ribs, Fish Tikka 6pcs, Qalmi Tikka 6pcs, Malai Boti 6pcs, Chicken Boti 6pcs, Gola Kabab 6pcs, Kabab (2 Chicken, 2 Reshmi, 2 Beef), Kabuli Pulao, Batair 6pcs, Mint & BBQ Sauce",
    price: 12999,
    category: "bbq",
    badges: ["Signature", "Platter"],
  image: platterImg },
  {
    no: 44,
    name: "Chef Sher Khan Platter",
    description:
      "Mutton Ribs, Fish Tikka 3pcs, Qalmi Tikka 3pcs, Malai Boti 3pcs, Chicken Boti 3pcs, Gola Kabab 3pcs, Kabab (1 Chicken, 1 Reshmi, 1 Beef), Kabuli Pulao, Batair 3pcs, Mint & BBQ Sauce",
    price: 8999,
    category: "bbq",
    badges: ["Platter"],
  image: platterImg },
  { no: 45, name: "Mutton Ribs", price: 4795, category: "bbq" },
  { no: 46, name: "Mutton Tikka (24 Pcs)", price: 3995, category: "bbq" },
  { no: 47, name: "Mutton Chops (6 Pcs)", price: 4095, category: "bbq" },
  { no: 48, name: "Mutton Kabab (6 Pcs)", price: 2495, category: "bbq" },
  { no: 49, name: "Beef Kabab (6 Pcs)", price: 2095, category: "bbq" },
  { no: 50, name: "Malai Kabab (6 Pcs)", price: 2095, category: "bbq" },
  { no: 51, name: "Chicken Gola Kabab (6 Pcs)", price: 1995, category: "bbq" },
  { no: 52, name: "Chicken Reshmi Kabab (6 Pcs)", price: 1995, category: "bbq" },
  { no: 53, name: "Chicken Kabab (6 Pcs)", price: 1895, category: "bbq" },
  { no: 54, name: "Chicken Malai Boti B/L (12 Pcs)", price: 2295, category: "bbq" },
  { no: 55, name: "Chicken Boti (12 Pcs)", price: 1995, category: "bbq" },
  { no: 56, name: "Special Chicken Boti B/L (12 Pcs)", price: 2295, category: "bbq" },
  { no: 57, name: "Chicken Chatkhara Boti (12 Pcs)", price: 2095, category: "bbq" },
  { no: 58, name: "Chicken Bihari Boti B/L (12 Pcs)", price: 2195, category: "bbq" },
  { no: 59, name: "Qalmi Tikka (4 Pcs)", price: 1995, category: "bbq" },
  { no: 60, name: "Chicken Tikka", price: 650, category: "bbq" },
  { no: 61, name: "Fish Tikka (8 Pcs)", price: 2795, category: "bbq", image: fishImg },
  { no: 62, name: "Turkish Kabab (6 Pcs)", price: 1995, category: "bbq" },

  // RICE & NOODLES
  { no: 63, name: "Tandoori Special Rice", price: 1695, category: "rice-noodles", badges: ["Signature"], image: pulaoImg },
  { no: 64, name: "Kabuli Pulao", price: 1995, category: "rice-noodles", image: pulaoImg },
  { no: 65, name: "Chicken Biryani", price: 1195, category: "rice-noodles", image: biryaniImg },
  { no: 66, name: "Chicken Fried Rice", price: 1595, category: "rice-noodles" },
  { no: 67, name: "Chicken Masala Rice", price: 1395, category: "rice-noodles" },
  { no: 68, name: "Egg Fried Rice", price: 1450, category: "rice-noodles" },
  { no: 69, name: "Vegetable Fried Rice", price: 1395, category: "rice-noodles" },
  { no: 70, name: "Steam Rice", price: 999, category: "rice-noodles" },
  { no: 71, name: "Chicken Chowmein", price: 2550, category: "rice-noodles" },

  // PAKISTANI CUISINE (CHICKEN)
  { no: 72, name: "Chicken Creamy Handi (Boneless)", price: 2795, category: "pakistani-chicken", image: handiImg },
  { no: 73, name: "Chicken Handi (Boneless)", price: 2595, category: "pakistani-chicken", image: handiImg },
  { no: 74, name: "Chicken Multani Handi", price: 2695, category: "pakistani-chicken", image: handiImg },
  { no: 75, name: "Chicken Karahi (Full)", price: 2495, category: "pakistani-chicken", image: karahiImg },
  { no: 76, name: "Chicken Karahi (Half)", price: 1695, category: "pakistani-chicken", image: karahiImg },
  { no: 77, name: "Chicken Shahjahani", price: 2295, category: "pakistani-chicken" },
  { no: 78, name: "Chicken Hari Mirch", price: 2295, category: "pakistani-chicken" },
  { no: 79, name: "Chicken Hyderabadi", price: 2295, category: "pakistani-chicken" },
  { no: 80, name: "Chicken Ginger", price: 2295, category: "pakistani-chicken" },
  { no: 81, name: "Tawa Chicken", price: 2295, category: "pakistani-chicken" },
  { no: 82, name: "Chicken Jalfrezi", price: 2295, category: "pakistani-chicken" },
  { no: 83, name: "Steam Roast", price: 2195, category: "pakistani-chicken" },

  // PAKISTANI CUISINE (MUTTON)
  { no: 84, name: "Mutton Handi", price: 4595, category: "pakistani-mutton", image: handiImg },
  { no: 85, name: "Mutton Multani Handi", price: 4595, category: "pakistani-mutton", image: handiImg },
  { no: 86, name: "Mutton Karahi (Full)", price: 4795, category: "pakistani-mutton", image: karahiImg },
  { no: 87, name: "Mutton Karahi (Half)", price: 2595, category: "pakistani-mutton", image: karahiImg },
  { no: 88, name: "Mutton Hari Mirch", price: 2775, category: "pakistani-mutton" },
  { no: 89, name: "Mutton Brain Masala", price: 2395, category: "pakistani-mutton" },
  { no: 90, name: "Mutton Jumbo Dry", price: 4795, category: "pakistani-mutton" },

  // VEGETABLE & DAAL
  { no: 91, name: "Mix Vegetable", price: 1195, category: "vegetable-daal", badges: ["Vegetarian"] },
  { no: 92, name: "Palak Paneer", price: 1195, category: "vegetable-daal", badges: ["Vegetarian"] },
  { no: 93, name: "Daal Mash", price: 1195, category: "vegetable-daal", badges: ["Vegetarian"] },

  // TANDOOR
  { no: 94, name: "Naan / Roti (P/H)", price: 210, category: "tandoor" },
  { no: 95, name: "Naan Basket", price: 950, category: "tandoor" },
  { no: 96, name: "Roghni Naan", price: 240, category: "tandoor" },
  { no: 97, name: "Garlic Naan", price: 240, category: "tandoor" },
  { no: 98, name: "Kalwanji Naan", price: 240, category: "tandoor" },
  { no: 99, name: "Tandoori Paratha", price: 240, category: "tandoor" },
  { no: 100, name: "Kandhari Naan", price: 240, category: "tandoor" },

  // COLD BEVERAGES
  { no: 101, name: "Pina Colada", price: 795, category: "cold-beverages" },
  { no: 102, name: "Strawberry Colada", price: 795, category: "cold-beverages" },
  { no: 103, name: "Kulfa Oreo Shake", price: 795, category: "cold-beverages" },
  { no: 104, name: "Blue Lady", price: 795, category: "cold-beverages" },
  { no: 105, name: "Lime Lemonade", price: 625, category: "cold-beverages" },
  { no: 106, name: "Mint Margarita", price: 625, category: "cold-beverages" },
  { no: 107, name: "Cold Coffee with Ice-Cream", price: 795, category: "cold-beverages" },
  { no: 108, name: "Fresh Juices (Seasonal)", price: 725, category: "cold-beverages" },
  { no: 109, name: "Mineral Water (Large)", price: 250, category: "cold-beverages" },
  { no: 110, name: "Mineral Water (Small)", price: 125, category: "cold-beverages" },
  { no: 111, name: "Fresh Lime with Soft Drink", price: 325, category: "cold-beverages" },
  { no: 112, name: "Lassi Glass (Saltish/Sweet)", price: 425, category: "cold-beverages" },
  { no: 113, name: "Soft Drink (Tin)", price: 240, category: "cold-beverages" },

  // HOT BEVERAGES
  { no: 114, name: "Black Tea", price: 245, category: "hot-beverages" },
  { no: 115, name: "Green Tea", price: 225, category: "hot-beverages" },
  { no: 116, name: "Peshawari Kahwa with Gurr", price: 230, category: "hot-beverages" },

  // DESSERTS
  { no: 117, name: "Tandoori Special Ice-Cream", price: 815, category: "desserts", badges: ["Signature"], image: icecreamImg },
  { no: 118, name: "Tutti Fruitti Ice-Cream", price: 695, category: "desserts", image: icecreamImg },
  { no: 119, name: "Plain Ice-Cream (2 Scoops)", price: 540, category: "desserts", image: icecreamImg },
  { no: 120, name: "Cookie Crunch", price: 690, category: "desserts" },
  { no: 121, name: "Kheer Thoothi", price: 295, category: "desserts" },
  { no: 122, name: "Kulfi", price: 170, category: "desserts" },

  // NEW ARRIVAL
  { no: 123, name: "Tandoori Dum Biryani (Mutton)", price: 2599, category: "new-arrival", badges: ["New"], image: biryaniImg },
  { no: 124, name: "Tandoori Dum Biryani (Chicken)", price: 1899, category: "new-arrival", badges: ["New"], image: biryaniImg },
  { no: 125, name: "Tandoori Chargha", price: 1899, category: "new-arrival", badges: ["New"], image: charghaImg },
  { no: 126, name: "Dum Handi (Lamb)", price: 4595, category: "new-arrival", badges: ["New"], image: handiImg },
  { no: 127, name: "Dum Handi (Mutton)", price: 4595, category: "new-arrival", badges: ["New"], image: handiImg },
  { no: 128, name: "Dum Handi (Chicken)", price: 2995, category: "new-arrival", badges: ["New"], image: handiImg },
];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));

export const formatPrice = (price: number) =>
  `${restaurant.currency} ${price.toLocaleString("en-US")}`;
