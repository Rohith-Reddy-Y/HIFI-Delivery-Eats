// Utility function to format timestamp as YYYY-MM-DD HH:mm:ss
function formatTimestamp(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Function to generate a unique Item ID
function generateItemId() {
  const prefix = "ITEM-";
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  const newId = `${prefix}${randomNum}`;
  if (menuItems.some((item) => item.itemId === newId)) {
    return generateItemId();
  }
  return newId;
}

// Static menu items from show_menu.html (complete list)
const staticMenuItems = [
  // Starter
  {
    itemId: "ITEM-10001",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese",
    price: "150.00",
    category: "veg",
    subcategory: "Starter",
    discount: "0",
    image: "Menu_Images/Paneer Tikka.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10002",
    name: "Chicken Lollipop",
    description: "Spicy chicken appetizer",
    price: "180.00",
    category: "non-veg",
    subcategory: "Starter",
    discount: "0",
    image: "Menu_Images/Chicken Lollipop.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10003",
    name: "Vegetable Spring Rolls",
    description: "Crispy rolls with veggie filling",
    price: "120.00",
    category: "veg",
    subcategory: "Starter",
    discount: "0",
    image: "Menu_Images/Vegetable Spring Rolls.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10004",
    name: "Mushroom Manchurian",
    description: "Spicy Indo-Chinese mushroom dish",
    price: "140.00",
    category: "veg",
    subcategory: "Starter",
    discount: "0",
    image: "Menu_Images/Mushroom Manchurian.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10005",
    name: "Fish Fingers",
    description: "Crispy fried fish sticks",
    price: "200.00",
    category: "non-veg",
    subcategory: "Starter",
    discount: "0",
    image: "Menu_Images/Fish Fingers.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10006",
    name: "Prawn Tempura",
    description: "Lightly battered fried prawns",
    price: "220.00",
    category: "non-veg",
    subcategory: "Starter",
    discount: "0",
    image: "Menu_Images/Prawn Tempura.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },

  // Biryani
  {
    itemId: "ITEM-10007",
    name: "Chicken Biryani",
    description: "Spicy chicken biryani",
    price: "200.00",
    category: "non-veg",
    subcategory: "Biryani",
    discount: "0",
    image: "Menu_Images/Chicken Biryani.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10008",
    name: "Veg Biryani",
    description: "Vegetable biryani",
    price: "150.00",
    category: "veg",
    subcategory: "Biryani",
    discount: "0",
    image: "Menu_Images/Veg Biryani.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10009",
    name: "Mutton Biryani",
    description: "Spicy mutton biryani",
    price: "250.00",
    category: "non-veg",
    subcategory: "Biryani",
    discount: "0",
    image: "Menu_Images/Mutton Biryani.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10010",
    name: "Paneer Biryani",
    description: "Biryani with paneer chunks",
    price: "170.00",
    category: "veg",
    subcategory: "Biryani",
    discount: "0",
    image: "Menu_Images/Paneer Biryani.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10011",
    name: "Mushroom Biryani",
    description: "Biryani with fresh mushrooms",
    price: "160.00",
    category: "veg",
    subcategory: "Biryani",
    discount: "0",
    image: "Menu_Images/Mushroom Biryani.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10012",
    name: "Fish Biryani",
    description: "Spicy biryani with fish",
    price: "230.00",
    category: "non-veg",
    subcategory: "Biryani",
    discount: "0",
    image: "Menu_Images/Fish Biryani.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },

  // Soups
  {
    itemId: "ITEM-10013",
    name: "Tomato Soup",
    description: "Classic tomato soup",
    price: "80.00",
    category: "veg",
    subcategory: "Soups",
    discount: "0",
    image: "Menu_Images/Tomato Soup.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10014",
    name: "Hot & Sour Soup",
    description: "Spicy and tangy soup",
    price: "90.00",
    category: "non-veg",
    subcategory: "Soups",
    discount: "0",
    image: "Menu_Images/Hot & Sour Soup.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10015",
    name: "Cream of Spinach Soup",
    description: "Creamy spinach and herb soup",
    price: "85.00",
    category: "veg",
    subcategory: "Soups",
    discount: "0",
    image: "Menu_Images/Cream of Spinach Soup.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10016",
    name: "Sweet Corn Soup",
    description: "Corn soup with vegetables",
    price: "80.00",
    category: "veg",
    subcategory: "Soups",
    discount: "0",
    image: "Menu_Images/Sweet Corn Soup.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10017",
    name: "Chicken Noodle Soup",
    description: "Hearty soup with chicken and noodles",
    price: "100.00",
    category: "non-veg",
    subcategory: "Soups",
    discount: "0",
    image: "Menu_Images/Chicken Noodle Soup.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10018",
    name: "Mutton Broth",
    description: "Flavorful mutton soup",
    price: "110.00",
    category: "non-veg",
    subcategory: "Soups",
    discount: "0",
    image: "Menu_Images/Mutton Broth.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },

  // Salads
  {
    itemId: "ITEM-10019",
    name: "Greek Salad",
    description: "Fresh and healthy",
    price: "120.00",
    category: "veg",
    subcategory: "Salads",
    discount: "0",
    image: "Menu_Images/Greek Salad.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10020",
    name: "Caesar Salad",
    description: "Classic Caesar salad",
    price: "130.00",
    category: "non-veg",
    subcategory: "Salads",
    discount: "0",
    image: "Menu_Images/Caesar Salad.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10021",
    name: "Cucumber Avocado Salad",
    description: "Refreshing cucumber and avocado mix",
    price: "110.00",
    category: "veg",
    subcategory: "Salads",
    discount: "0",
    image: "Menu_Images/Cucumber Avocado Salad.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10022",
    name: "Pasta Salad",
    description: "Pasta with veggies and dressing",
    price: "115.00",
    category: "veg",
    subcategory: "Salads",
    discount: "0",
    image: "Menu_Images/Pasta Salad.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10023",
    name: "Chicken Caesar Salad",
    description: "Caesar salad with grilled chicken",
    price: "140.00",
    category: "non-veg",
    subcategory: "Salads",
    discount: "0",
    image: "Menu_Images/Chicken Caesar Salad.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10024",
    name: "Shrimp Salad",
    description: "Fresh shrimp with mixed greens",
    price: "150.00",
    category: "non-veg",
    subcategory: "Salads",
    discount: "0",
    image: "Menu_Images/Shrimp Salad.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },

  // Breads
  {
    itemId: "ITEM-10025",
    name: "Garlic Naan",
    description: "Buttery garlic bread",
    price: "40.00",
    category: "veg",
    subcategory: "Breads",
    discount: "0",
    image: "Menu_Images/Garlic Naan.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10026",
    name: "Butter Roti",
    description: "Soft and buttery",
    price: "30.00",
    category: "veg",
    subcategory: "Breads",
    discount: "0",
    image: "Menu_Images/Butter Roti.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10027",
    name: "Aloo Paratha",
    description: "Stuffed bread with spiced potatoes",
    price: "50.00",
    category: "veg",
    subcategory: "Breads",
    discount: "0",
    image: "Menu_Images/Aloo Paratha.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10028",
    name: "Plain Naan",
    description: "Soft and fluffy Indian bread",
    price: "35.00",
    category: "veg",
    subcategory: "Breads",
    discount: "0",
    image: "Menu_Images/Plain Naan.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10029",
    name: "Keema Naan",
    description: "Naan stuffed with spiced minced meat",
    price: "60.00",
    category: "non-veg",
    subcategory: "Breads",
    discount: "0",
    image: "Menu_Images/Keema Naan.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10030",
    name: "Chicken Stuffed Kulcha",
    description: "Kulcha with shredded chicken filling",
    price: "65.00",
    category: "non-veg",
    subcategory: "Breads",
    discount: "0",
    image: "Menu_Images/Chicken Stuffed Kulcha.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },

  // Main Course
  {
    itemId: "ITEM-10031",
    name: "Paneer Butter Masala",
    description: "Paneer in rich tomato gravy",
    price: "220.00",
    category: "veg",
    subcategory: "Main Course",
    discount: "0",
    image: "Menu_Images/Paneer Butter Masala.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10032",
    name: "Dal Makhani",
    description: "Creamy black lentils with butter",
    price: "180.00",
    category: "veg",
    subcategory: "Main Course",
    discount: "0",
    image: "Menu_Images/Dal Makhani.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10033",
    name: "Vegetable Korma",
    description: "Mixed veggies in creamy gravy",
    price: "190.00",
    category: "veg",
    subcategory: "Main Course",
    discount: "0",
    image: "Menu_Images/Vegetable Korma.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10034",
    name: "Butter Chicken",
    description: "Chicken in creamy tomato sauce",
    price: "250.00",
    category: "non-veg",
    subcategory: "Main Course",
    discount: "0",
    image: "Menu_Images/Butter Chicken.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10035",
    name: "Mutton Rogan Josh",
    description: "Spicy mutton curry",
    price: "280.00",
    category: "non-veg",
    subcategory: "Main Course",
    discount: "0",
    image: "Menu_Images/Mutton Rogan Josh.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10036",
    name: "Fish Curry",
    description: "Fish in spicy coconut gravy",
    price: "260.00",
    category: "non-veg",
    subcategory: "Main Course",
    discount: "0",
    image: "Menu_Images/Fish Curry.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },

  // Beverages
  {
    itemId: "ITEM-10037",
    name: "Mango Lassi",
    description: "Sweet yogurt-based mango drink",
    price: "60.00",
    category: "veg",
    subcategory: "Beverages",
    discount: "0",
    image: "Menu_Images/Mango Lassi.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10038",
    name: "Lemonade",
    description: "Refreshing lemon drink",
    price: "40.00",
    category: "veg",
    subcategory: "Beverages",
    discount: "0",
    image: "Menu_Images/Lemonade.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10039",
    name: "Mint Cooler",
    description: "Chilled mint and lime drink",
    price: "50.00",
    category: "veg",
    subcategory: "Beverages",
    discount: "0",
    image: "Menu_Images/Mint Cooler.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10040",
    name: "Iced Tea",
    description: "Cold tea with lemon flavor",
    price: "45.00",
    category: "veg",
    subcategory: "Beverages",
    discount: "0",
    image: "Menu_Images/Iced Tea.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10041",
    name: "Coconut Water",
    description: "Fresh and hydrating coconut drink",
    price: "55.00",
    category: "veg",
    subcategory: "Beverages",
    discount: "0",
    image: "Menu_Images/Coconut Water.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10042",
    name: "Orange Juice",
    description: "Freshly squeezed orange juice",
    price: "50.00",
    category: "veg",
    subcategory: "Beverages",
    discount: "0",
    image: "Menu_Images/Orange Juice.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },

  // Icecreams
  {
    itemId: "ITEM-10043",
    name: "Vanilla Icecream",
    description: "Classic vanilla flavor",
    price: "60.00",
    category: "veg",
    subcategory: "Icecreams",
    discount: "0",
    image: "Menu_Images/Vanilla Icecream.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10044",
    name: "Chocolate Icecream",
    description: "Rich chocolate flavor",
    price: "70.00",
    category: "veg",
    subcategory: "Icecreams",
    discount: "0",
    image: "Menu_Images/Chocolate Icecream.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10045",
    name: "Strawberry Icecream",
    description: "Fresh strawberry flavor",
    price: "80.00",
    category: "veg",
    subcategory: "Icecreams",
    discount: "0",
    image: "Menu_Images/Strawberry Icecream.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10046",
    name: "Mango Sorbet",
    description: "Refreshing mango ice dessert",
    price: "75.00",
    category: "veg",
    subcategory: "Icecreams",
    discount: "0",
    image: "Menu_Images/Mango Sorbet.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10047",
    name: "Butterscotch Icecream",
    description: "Creamy with crunchy bits",
    price: "70.00",
    category: "veg",
    subcategory: "Icecreams",
    discount: "0",
    image: "Menu_Images/Butterscotch Icecream.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10048",
    name: "Rocky Road Icecream",
    description: "Chocolate with marshmallows (contains gelatin)",
    price: "85.00",
    category: "non-veg",
    subcategory: "Icecreams",
    discount: "0",
    image: "Menu_Images/Rocky Road Icecream.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },

  // Breakfast
  {
    itemId: "ITEM-10049",
    name: "Masala Dosa",
    description: "Crispy rice crepe with potato filling",
    price: "50.00",
    category: "veg",
    subcategory: "Breakfast",
    discount: "0",
    image: "Menu_Images/Masala Dosa.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2025-02-25 00:00:00",
  },
  {
    itemId: "ITEM-10050",
    name: "Poha",
    description: "Flattened rice with spices and vegetables",
    price: "40.00",
    category: "veg",
    subcategory: "Breakfast",
    discount: "0",
    image: "Menu_Images/Poha.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10051",
    name: "Idli Sambar",
    description: "Steamed rice cakes with lentil soup",
    price: "45.00",
    category: "veg",
    subcategory: "Breakfast",
    discount: "0",
    image: "Menu_Images/Idli Sambar.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10052",
    name: "Cheese Omelette",
    description: "Fluffy eggs with melted cheese",
    price: "60.00",
    category: "non-veg",
    subcategory: "Breakfast",
    discount: "0",
    image: "Menu_Images/Cheese Omelette.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10053",
    name: "Chicken Sausage",
    description: "Grilled sausages with toast",
    price: "70.00",
    category: "non-veg",
    subcategory: "Breakfast",
    discount: "0",
    image: "Menu_Images/Chicken Sausage.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
  {
    itemId: "ITEM-10054",
    name: "Egg Bhurji",
    description: "Spicy scrambled eggs with spices",
    price: "55.00",
    category: "non-veg",
    subcategory: "Breakfast",
    discount: "0",
    image: "Menu_Images/Egg Bhurji.jpg",
    bestSeller: "no",
    stockAvailable: "100",
    time: "2023-01-01 00:00:00",
  },
];

// Load menu items from localStorage, or initialize with static items if empty
let menuItems = JSON.parse(localStorage.getItem("menuItems")) || [];
if (menuItems.length === 0) {
  menuItems = [...staticMenuItems];
  localStorage.setItem("menuItems", JSON.stringify(menuItems));
} else {
  staticMenuItems.forEach((staticItem) => {
    if (!menuItems.some((item) => item.itemId === staticItem.itemId)) {
      menuItems.push(staticItem);
    }
  });
  localStorage.setItem("menuItems", JSON.stringify(menuItems));
}
window.globalMenuItems = menuItems;

// Function to save menu items to localStorage
function saveMenuItems() {
  localStorage.setItem("menuItems", JSON.stringify(menuItems));
  window.globalMenuItems = menuItems;
}

// Function to show success popup
function showSuccessPopup(message) {
  const popup = document.createElement("div");
  popup.className = "popup-container";

  const style = document.createElement("style");
  style.textContent = `
    .popup-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #069c54, #34c759);
      color: #FFFFFF;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      max-width: 400px;
      width: 90%;
      font-family: 'Arial', sans-serif;
      animation: fadeIn 0.3s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translate(-50%, -60%); }
      to { opacity: 1; transform: translate(-50%, -50%); }
    }
    .popup-container p {
      margin: 0 0 20px;
      font-size: 18px;
      text-align: center;
      color: #FFFFFF;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
    .popup-container button {
      padding: 12px 25px;
      border: none;
      border-radius: 8px;
      background-color: #FFFFFF;
      color: #069c54;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      display: block;
      margin: 0 auto;
    }
    .popup-container button:hover {
      background-color: #F0F0F0;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    .popup-container button:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  `;
  document.head.appendChild(style);

  popup.innerHTML = `
    <p>${message}</p>
    <button id="close-success">OK</button>
  `;

  document.body.appendChild(popup);

  document
    .getElementById("close-success")
    .addEventListener("click", function () {
      document.body.removeChild(popup);
      document.head.removeChild(style);
    });

  // Auto-close after 3 seconds
  setTimeout(() => {
    if (document.body.contains(popup)) {
      document.body.removeChild(popup);
      document.head.removeChild(style);
    }
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("menu-form");
  const tableBody = document.getElementById("menu-table-body");

  if (!form) {
    console.error("Form element with id 'menu-form' not found.");
    return;
  }
  if (!tableBody) {
    console.error("Table body element with id 'menu-table-body' not found.");
    return;
  }

  // Apply table styling
  const tableStyle = document.createElement("style");
  tableStyle.textContent = `
    table {
      width: 100%;
      border-collapse: collapse;
      background: #FFFFFF;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-family: 'Arial', sans-serif;
    }
    th, td {
      padding: 15px;
      text-align: center;
      border-bottom: 1px solid #E0E0E0;
      color: #333;
    }
    th {
      background: linear-gradient(135deg, #069c54, #34c759);
      color: #FFFFFF;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    tr:nth-child(even) {
      background-color: #F8F8F8;
    }
    tr:hover {
      background-color: #F0F0F0;
      transition: background-color 0.3s ease;
    }
    td img {
      border-radius: 5px;
      object-fit: cover;
    }
    .action-buttons {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
    .edit-btn, .delete-btn {
      padding: 8px 15px;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .edit-btn {
      background-color: #069c54;
      color: #FFFFFF;
    }
    .edit-btn:hover {
      background-color: #34c759;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .edit-btn:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .delete-btn {
      background-color: #FF4444;
      color: #FFFFFF;
    }
    .delete-btn:hover {
      background-color: #FF6666;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .delete-btn:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .edit-btn:disabled, .delete-btn:disabled {
      background-color: #A0A0A0;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  `;
  document.head.appendChild(tableStyle);

  // Render initial menu items
  renderMenuItems();

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const itemName = document.getElementById("item-name").value.trim();
    const description = document.getElementById("description").value.trim();
    const price = document.getElementById("price").value.trim();
    const category = document.getElementById("category").value;
    const subcategory = document.getElementById("subcategory").value;
    const discount = document.getElementById("discount").value.trim() || "0";
    const imageFile = document.getElementById("image").files[0];
    const bestSeller =
      document.querySelector('input[name="best_seller"]:checked')?.value ||
      "no";
    const stockAvailable = document
      .getElementById("stock-available")
      .value.trim();

    let validationErrors = [];
    if (!itemName) validationErrors.push("Item Name is required.");
    if (!description) validationErrors.push("Description is required.");
    if (!price || isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      validationErrors.push("Price must be a valid number greater than 0.");
    }
    if (!category || category === "")
      validationErrors.push("Please select a valid Category (VEG or NON-VEG).");
    if (!subcategory || subcategory === "")
      validationErrors.push("Please select a valid Subcategory.");
    if (
      !stockAvailable ||
      isNaN(parseInt(stockAvailable)) ||
      parseInt(stockAvailable) < 0
    ) {
      validationErrors.push(
        "Stock Available must be a valid number (0 or greater)."
      );
    }
    if (!imageFile) {
      validationErrors.push("An image is required.");
    } else {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!allowedTypes.includes(imageFile.type)) {
        validationErrors.push("Image must be a JPEG, PNG, or GIF file.");
      }
    }

    if (validationErrors.length > 0) {
      showSuccessPopup(validationErrors.join("<br>")); // Use custom popup for errors
      return;
    }

    const reader = new FileReader();
    const timeoutDuration = 10000;
    let hasTimedOut = false;

    const timeout = setTimeout(() => {
      hasTimedOut = true;
      showSuccessPopup(
        "Image processing timed out. Please try a smaller image or a different file."
      );
      reader.abort();
    }, timeoutDuration);

    reader.onload = function () {
      clearTimeout(timeout);
      if (hasTimedOut) return;

      const imageBase64 = reader.result;

      const newItem = {
        itemId: generateItemId(),
        name: itemName,
        description: description,
        price: price,
        category: category,
        subcategory: subcategory,
        discount: discount,
        image: imageBase64,
        bestSeller: bestSeller,
        stockAvailable: stockAvailable,
        time: formatTimestamp(new Date()),
      };

      menuItems.push(newItem);
      saveMenuItems();
      console.log("Added new item in add_menu:", newItem);
      console.log("Current menu items in add_menu:", menuItems);
      renderMenuItems();
      form.reset();

      showSuccessPopup("Item added successfully!");
    };

    reader.onerror = function (error) {
      clearTimeout(timeout);
      console.error("Error reading image file:", error);
      showSuccessPopup(
        "Failed to process the image file. Please try a different image."
      );
    };

    reader.readAsDataURL(imageFile);
  });

  // Function to render menu items in the table
  function renderMenuItems() {
    tableBody.innerHTML = "";
    menuItems.forEach((item, index) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${item.itemId || "N/A"}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        <td>${item.category}</td>
        <td>${item.subcategory}</td>
        <td>${item.discount}%</td>
        <td><img src="${item.image}" alt="${item.name}" width="50"></td>
        <td>${item.bestSeller}</td>
        <td>${item.stockAvailable}</td>
        <td>${item.time}</td>
        <td>
          <div class="action-buttons">
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
          </div>
        </td>
      `;
      tableBody.appendChild(newRow);
    });

    document.querySelectorAll(".edit-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"));
        const deleteButton = this.parentElement.querySelector(".delete-btn");
        deleteButton.disabled = true;
        this.disabled = true;
        showEditPopup(index, deleteButton, this);
      });
    });

    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"));
        const editButton = this.parentElement.querySelector(".edit-btn");
        editButton.disabled = true;
        this.disabled = true;
        showDeleteConfirmation(index, editButton, this);
      });
    });
  }

  // Function to show edit popup with green and white theme
  function showEditPopup(index, deleteButton, editButton) {
    const item = menuItems[index];

    const popup = document.createElement("div");
    popup.className = "popup-container";

    const style = document.createElement("style");
    style.textContent = `
      .popup-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #069c54, #34c759);
        color: #FFFFFF;
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        font-family: 'Arial', sans-serif;
        animation: fadeIn 0.3s ease-in-out;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translate(-50%, -60%); }
        to { opacity: 1; transform: translate(-50%, -50%); }
      }
      .popup-container h3 {
        margin: 0 0 20px;
        font-size: 24px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      }
      .popup-container label {
        display: block;
        margin: 10px 0 5px;
        font-weight: bold;
        color: #FFFFFF;
      }
      .popup-container input[type="text"],
      .popup-container input[type="number"],
      .popup-container textarea,
      .popup-container select {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: none;
        border-radius: 8px;
        background-color: #FFFFFF;
        color: #333;
        font-size: 14px;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .popup-container input[type="text"]:disabled {
        background-color: #E0E0E0;
        color: #666;
      }
      .popup-container textarea {
        height: 80px;
        resize: none;
      }
      .popup-container input[type="radio"] {
        margin: 0 5px 0 15px;
      }
      .popup-container .button-group {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
      }
      .popup-container button {
        padding: 12px 25px;
        border: none;
        border-radius: 8px;
        background-color: #FFFFFF;
        color: #069c54;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .popup-container button:hover {
        background-color: #F0F0F0;
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
      }
      .popup-container button:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    `;
    document.head.appendChild(style);

    popup.innerHTML = `
      <h3>Edit Menu Item</h3>
      <label>Item ID:</label>
      <input type="text" id="edit-item-id" value="${item.itemId}" disabled><br>
      <label>Item Name:</label>
      <input type="text" id="edit-item-name" value="${item.name}" required><br>
      <label>Description:</label>
      <textarea id="edit-description" required>${
        item.description
      }</textarea><br>
      <label>Price (₹):</label>
      <input type="number" id="edit-price" step="0.01" value="${
        item.price
      }" required><br>
      <label>Category:</label>
      <select id="edit-category" required>
        <option value="veg" ${
          item.category === "veg" ? "selected" : ""
        }>VEG</option>
        <option value="non-veg" ${
          item.category === "non-veg" ? "selected" : ""
        }>NON-VEG</option>
      </select><br>
      <label>Subcategory:</label>
      <select id="edit-subcategory" required>
        <option value="Starter" ${
          item.subcategory === "Starter" ? "selected" : ""
        }>Starter</option>
        <option value="Soups" ${
          item.subcategory === "Soups" ? "selected" : ""
        }>Soups</option>
        <option value="Salads" ${
          item.subcategory === "Salads" ? "selected" : ""
        }>Salads</option>
        <option value="Breads" ${
          item.subcategory === "Breads" ? "selected" : ""
        }>Breads</option>
        <option value="Main Course" ${
          item.subcategory === "Main Course" ? "selected" : ""
        }>Main Course</option>
        <option value="Beverages" ${
          item.subcategory === "Beverages" ? "selected" : ""
        }>Beverages</option>
        <option value="Breakfast" ${
          item.subcategory === "Breakfast" ? "selected" : ""
        }>Breakfast</option>
        <option value="Biryani" ${
          item.subcategory === "Biryani" ? "selected" : ""
        }>Biryani</option>
        <option value="Icecreams" ${
          item.subcategory === "Icecreams" ? "selected" : ""
        }>Icecreams</option>
      </select><br>
      <label>Discount (%):</label>
      <input type="number" id="edit-discount" min="0" max="100" value="${
        item.discount
      }"><br>
      <label>Best Seller:</label>
      <input type="radio" id="edit-best-seller-yes" name="edit-best-seller" value="yes" ${
        item.bestSeller === "yes" ? "checked" : ""
      }> Yes
      <input type="radio" id="edit-best-seller-no" name="edit-best-seller" value="no" ${
        item.bestSeller === "no" ? "checked" : ""
      }> No<br>
      <label>Stock Available:</label>
      <input type="number" id="edit-stock-available" min="0" value="${
        item.stockAvailable
      }" required><br>
      <div class="button-group">
        <button id="save-edit">Save</button>
        <button id="cancel-edit">Cancel</button>
      </div>
    `;

    document.body.appendChild(popup);

    document.getElementById("save-edit").addEventListener("click", function () {
      menuItems[index] = {
        itemId: item.itemId,
        name: document.getElementById("edit-item-name").value,
        description: document.getElementById("edit-description").value,
        price: document.getElementById("edit-price").value,
        category: document.getElementById("edit-category").value,
        subcategory: document.getElementById("edit-subcategory").value,
        discount: document.getElementById("edit-discount").value,
        image: menuItems[index].image,
        bestSeller: document.querySelector(
          'input[name="edit-best-seller"]:checked'
        ).value,
        stockAvailable: document.getElementById("edit-stock-available").value,
        time: item.time,
      };

      saveMenuItems();
      console.log("Updated item in add_menu:", menuItems[index]);
      console.log("Current menu items in add_menu:", menuItems);
      renderMenuItems();
      document.body.removeChild(popup);
      document.head.removeChild(style);
      deleteButton.disabled = false;
      editButton.disabled = false;
    });

    document
      .getElementById("cancel-edit")
      .addEventListener("click", function () {
        document.body.removeChild(popup);
        document.head.removeChild(style);
        deleteButton.disabled = false;
        editButton.disabled = false;
      });
  }

  // Function to show delete confirmation popup with green and white theme
  function showDeleteConfirmation(index, editButton, deleteButton) {
    const itemName = menuItems[index].name;

    const popup = document.createElement("div");
    popup.className = "popup-container";

    const style = document.createElement("style");
    style.textContent = `
      .popup-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #069c54, #34c759);
        color: #FFFFFF;
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        max-width: 400px;
        width: 90%;
        font-family: 'Arial', sans-serif;
        animation: fadeIn 0.3s ease-in-out;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translate(-50%, -60%); }
        to { opacity: 1; transform: translate(-50%, -50%); }
      }
      .popup-container p {
        margin: 0 0 20px;
        font-size: 18px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      }
      .popup-container .button-group {
        display: flex;
        justify-content: space-around;
      }
      .popup-container button {
        padding: 12px 25px;
        border: none;
        border-radius: 8px;
        background-color: #FFFFFF;
        color: #069c54;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .popup-container button:hover {
        background-color: #F0F0F0;
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
      }
      .popup-container button:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
      .popup-container #confirm-delete {
        background-color: #FF4444;
        color: #FFFFFF;
      }
      .popup-container #confirm-delete:hover {
        background-color: #FF6666;
      }
    `;
    document.head.appendChild(style);

    popup.innerHTML = `
      <p>Are you sure you want to delete "${itemName}"?</p>
      <div class="button-group">
        <button id="confirm-delete">Yes</button>
        <button id="cancel-delete">No</button>
      </div>
    `;

    document.body.appendChild(popup);

    document
      .getElementById("confirm-delete")
      .addEventListener("click", function () {
        menuItems.splice(index, 1);
        saveMenuItems();
        console.log("Deleted item in add_menu:", itemName);
        console.log("Current menu items in add_menu:", menuItems);
        renderMenuItems();
        document.body.removeChild(popup);
        document.head.removeChild(style);
        showSuccessPopup("Item deleted successfully!");
        editButton.disabled = false;
        deleteButton.disabled = false;
      });

    document
      .getElementById("cancel-delete")
      .addEventListener("click", function () {
        document.body.removeChild(popup);
        document.head.removeChild(style);
        editButton.disabled = false;
        deleteButton.disabled = false;
      });
  }
});

// ... (your existing code up to staticMenuItems and menuItems initialization)

// Function to generate a random timestamp in February 2025 with random time
function generateFeb2025Timestamp() {
  const day = Math.floor(Math.random() * 28) + 1; // Random day between 1 and 28
  const hours = Math.floor(Math.random() * 24); // Random hours between 0 and 23
  const minutes = Math.floor(Math.random() * 60); // Random minutes between 0 and 59
  const seconds = Math.floor(Math.random() * 60); // Random seconds between 0 and 59
  const date = new Date(2025, 1, day, hours, minutes, seconds); // Month is 1 (February, 0-based index)
  return formatTimestamp(date); // Use existing formatTimestamp function
}

// Update all menu items to February 2025 with random timestamps
function updateMenuItemsTimeToFeb2025() {
  menuItems.forEach((item) => {
    item.time = generateFeb2025Timestamp();
  });
  saveMenuItems(); // Save to localStorage
  renderMenuItems(); // Re-render the table
}

// ... (your existing functions like saveMenuItems, showSuccessPopup, etc.)

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("menu-form");
  const tableBody = document.getElementById("menu-table-body");

  if (!form) {
    console.error("Form element with id 'menu-form' not found.");
    return;
  }
  if (!tableBody) {
    console.error("Table body element with id 'menu-table-body' not found.");
    return;
  }

  // Apply table styling
  const tableStyle = document.createElement("style");
  tableStyle.textContent = `...`; // (your existing table styling)
  document.head.appendChild(tableStyle);

  // Render initial menu items
  renderMenuItems();

  // Update timestamps to February 2025 with random times
  updateMenuItemsTimeToFeb2025();

  // ... (rest of your existing DOMContentLoaded code)
});
