// Initialize cart from localStorage
let cart = [];
try {
  const storedCart = localStorage.getItem("cart");
  cart = storedCart ? JSON.parse(storedCart) : [];
  if (!Array.isArray(cart)) {
    console.error("Stored cart data is not an array:", cart);
    cart = [];
  }
} catch (error) {
  console.error("Error parsing cart from localStorage:", error);
  cart = [];
}
window.globalCart = cart;

// Load menu items from localStorage
let menuItems = [];
try {
  const storedMenuItems = localStorage.getItem("menuItems");
  menuItems = storedMenuItems ? JSON.parse(storedMenuItems) : [];
  if (!Array.isArray(menuItems)) {
    console.error("Stored menu items data is not an array:", menuItems);
    menuItems = [];
  }
} catch (error) {
  console.error("Error parsing menu items from localStorage:", error);
  menuItems = [];
}

// Log menuItems to verify image property
console.log("Menu items loaded:", menuItems);

// Function to save cart to localStorage
function saveCart() {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.globalCart = cart;
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
    cart.length = 0;
  }
}

// Function to calculate total items in the cart
function getCartTotalItems() {
  return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
}

// Function to update cart count in the navigation bar
function updateCartCount() {
  const totalItems = getCartTotalItems();
  const cartLink = document.querySelector(
    '.nav__link[href="../order/order.html"]'
  );
  if (cartLink) {
    const span = cartLink.querySelector(".nav__cart-count");
    if (span) {
      span.textContent = totalItems;
    } else {
      const newSpan = document.createElement("span");
      newSpan.className = "nav__cart-count";
      newSpan.textContent = totalItems;
      cartLink.textContent = "Cart(";
      cartLink.appendChild(newSpan);
      cartLink.appendChild(document.createTextNode(")"));
    }
  }
}

// Function to render all menu items from localStorage
function renderMenuItems() {
  document
    .querySelectorAll(".menu__container .menu__content")
    .forEach((item) => item.remove());

  const itemsBySubcategory = {};
  menuItems.forEach((item) => {
    const subcategory = item.subcategory?.toLowerCase();
    if (!subcategory) return;
    itemsBySubcategory[subcategory] = itemsBySubcategory[subcategory] || [];
    itemsBySubcategory[subcategory].push(item);
  });

  document.querySelectorAll(".menu-category").forEach((category) => {
    const subcategory = category.dataset.category.toLowerCase();
    const menuContainer = category.querySelector(".menu__container");
    if (!menuContainer) return;

    const items = itemsBySubcategory[subcategory] || [];
    if (items.length === 0) {
      category.style.display = "none";
      return;
    }

    category.style.display = "block";
    items.forEach((item) => {
      const cartItem = cart.find((ci) => ci.itemId === item.itemId);
      const quantity = cartItem ? cartItem.quantity : 0;
      const stockAvailable = parseInt(item.stockAvailable) || 0;

      const menuItem = document.createElement("div");
      menuItem.classList.add("menu__content");
      menuItem.setAttribute("data-name", item.name);
      menuItem.setAttribute("data-price", item.price);
      menuItem.setAttribute("data-type", item.category?.toLowerCase() || "");
      menuItem.setAttribute("data-item-id", item.itemId || "");

      const cartControlHtml =
        stockAvailable === 0
          ? `<div class="cart-control"><span class="out-of-stock">Out of Stock</span></div>`
          : quantity > 0
          ? `
            <div class="cart-control">
              <span class="cart-icon-wrapper"><i class="bx bx-cart-alt cart-icon"></i></span>
              <div class="quantity-control">
                <button class="decrement">-</button>
                <span class="item-count">${quantity}</span>
                <button class="increment">+</button>
              </div>
            </div>
          `
          : `
            <div class="cart-control">
              <span class="cart-icon-wrapper menu__button"><i class="bx bx-cart-alt cart-icon"></i></span>
            </div>
          `;

      menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu__img" />
        <h3 class="menu__name">${item.name}</h3>
        <span class="menu__detail">${item.description || ""}</span>
        <div class="menu__price-row">
          <span class="menu__preci">₹ ${parseFloat(item.price).toFixed(
            2
          )}</span>
          ${cartControlHtml}
        </div>
      `;
      menuContainer.appendChild(menuItem);

      if (quantity > 0 && stockAvailable > 0) {
        setupCartControls(menuItem, item);
      } else if (stockAvailable > 0) {
        const cartButton = menuItem.querySelector(".menu__button");
        if (cartButton) {
          cartButton.addEventListener("click", (e) => {
            e.preventDefault();
            const itemData = {
              itemId: menuItem.getAttribute("data-item-id") || "",
              name: menuItem.getAttribute("data-name"),
              price: menuItem.getAttribute("data-price"),
              image: menuItem.querySelector(".menu__img")?.src || "",
              category: menuItem.getAttribute("data-type"),
              subcategory:
                menuItems.find((i) => i.itemId === item.itemId)?.subcategory ||
                "",
              stockAvailable: item.stockAvailable,
            };
            showAddToCartPopup(itemData, menuItem);
          });
        }
      }
    });
  });
}

// Function to show add-to-cart popup
function showAddToCartPopup(item, menuItem) {
  const popup = document.createElement("div");
  popup.className = "popup-container";
  popup.innerHTML = `
    <p>Add "${item.name}" to cart?</p>
    <div class="button-group">
      <button id="confirm-add">OK</button>
      <button id="cancel-add">Cancel</button>
    </div>
  `;
  document.body.appendChild(popup);

  document.getElementById("confirm-add").addEventListener("click", () => {
    updateQuantity(item, 1, menuItem);
    document.body.removeChild(popup);
  });

  document.getElementById("cancel-add").addEventListener("click", () => {
    document.body.removeChild(popup);
  });
}

// Function to set up cart control event listeners
function setupCartControls(menuItem, item) {
  const incrementBtn = menuItem.querySelector(".increment");
  const decrementBtn = menuItem.querySelector(".decrement");
  const countSpan = menuItem.querySelector(".item-count");

  if (incrementBtn) {
    incrementBtn.addEventListener("click", (e) => {
      e.preventDefault();
      updateQuantity(item, 1, menuItem);
    });
  }

  if (decrementBtn) {
    decrementBtn.addEventListener("click", (e) => {
      e.preventDefault();
      updateQuantity(item, -1, menuItem);
    });
  }

  if (decrementBtn && countSpan) {
    decrementBtn.disabled = parseInt(countSpan.textContent) <= 0;
  }
}

// Function to update item quantity in cart with stock check and popup on limit
function updateQuantity(item, change, menuItem) {
  const existingItem = cart.find((cartItem) => cartItem.itemId === item.itemId);
  let newQuantity = existingItem ? existingItem.quantity : 0;
  const stockAvailable =
    parseInt(menuItems.find((i) => i.itemId === item.itemId)?.stockAvailable) ||
    0;

  const previousQuantity = newQuantity; // Store previous quantity for comparison
  newQuantity += change;

  if (newQuantity < 0) {
    newQuantity = 0; // Prevent negative quantity
  } else if (newQuantity >= stockAvailable) {
    newQuantity = stockAvailable; // Cap at stock available
    if (change > 0 && previousQuantity < stockAvailable) {
      // Show popup only when incrementing to the limit
      showStockAlert(item.name, stockAvailable);
    } else if (change > 0 && previousQuantity === stockAvailable) {
      // Show popup when trying to exceed the limit
      showStockAlert(item.name, stockAvailable);
      return; // Exit without updating if already at limit
    }
  }

  if (newQuantity === 0) {
    cart = cart.filter((cartItem) => cartItem.itemId !== item.itemId);
  } else if (existingItem) {
    existingItem.quantity = newQuantity;
  } else {
    item.quantity = newQuantity;
    cart.push({ ...item });
    console.log("Added to cart:", { ...item });
  }

  console.log("Current cart:", cart);

  const cartControl = menuItem.querySelector(".cart-control");
  if (newQuantity > 0) {
    cartControl.innerHTML = `
      <span class="cart-icon-wrapper"><i class="bx bx-cart-alt cart-icon"></i></span>
      <div class="quantity-control">
        <button class="decrement">-</button>
        <span class="item-count">${newQuantity}</span>
        <button class="increment">+</button>
      </div>
    `;
    setupCartControls(menuItem, item);
    // Disable increment button if at stock limit
    const incrementBtn = menuItem.querySelector(".increment");
    if (incrementBtn && newQuantity >= stockAvailable) {
      incrementBtn.disabled = true;
    }
  } else {
    cartControl.innerHTML = `
      <span class="cart-icon-wrapper menu__button"><i class="bx bx-cart-alt cart-icon"></i></span>
    `;
    const cartButton = cartControl.querySelector(".menu__button");
    if (cartButton) {
      cartButton.addEventListener("click", (e) => {
        e.preventDefault();
        showAddToCartPopup(item, menuItem);
      });
    }
  }

  saveCart();
  updateCartCount();
}

// Function to show stock alert popup
function showStockAlert(itemName, stockAvailable) {
  const popup = document.createElement("div");
  popup.className = "popup-container";
  popup.innerHTML = `
    <p>"${itemName}" is limited to ${stockAvailable} units in stock.</p>
    <div class="button-group">
      <button id="close-alert">OK</button>
    </div>
  `;
  document.body.appendChild(popup);

  document.getElementById("close-alert").addEventListener("click", () => {
    document.body.removeChild(popup);
  });

  // Auto-close after 3 seconds
  setTimeout(() => {
    if (document.body.contains(popup)) {
      document.body.removeChild(popup);
    }
  }, 3000);
}

// Scroll-to-top functionality
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (window.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}

// Dark mode toggle functionality
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const themeButton = document.getElementById("theme-button");
  if (document.body.classList.contains("dark-theme")) {
    themeButton.classList.remove("bx-moon");
    themeButton.classList.add("bx-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.classList.remove("bx-sun");
    themeButton.classList.add("bx-moon");
    localStorage.setItem("theme", "light");
  }
}

// Apply saved theme on load
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  const themeButton = document.getElementById("theme-button");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeButton.classList.remove("bx-moon");
    themeButton.classList.add("bx-sun");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const vegNonVegFilter = document.getElementById("veg-nonveg-filter");
  const subCategoryFilter = document.getElementById("sub-category");
  const menuSection = document.querySelector("section.menu");

  renderMenuItems();
  updateCartCount();
  applySavedTheme();

  window.addEventListener("scroll", scrollTop);
  const scrollTopButton = document.getElementById("scroll-top");
  scrollTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const themeButton = document.getElementById("theme-button");
  themeButton.addEventListener("click", toggleTheme);

  function applyFilters() {
    const searchQuery = searchInput?.value.trim().toLowerCase() || "";
    const vegNonVegValue = vegNonVegFilter?.value.toLowerCase() || "";
    const subCategoryValue = subCategoryFilter?.value.toLowerCase() || "";
    const menuCategories = document.querySelectorAll(".menu-category");
    const menuHeading = document.getElementById("menu-heading");

    let headingText = "All Menu Items";
    if (vegNonVegValue && subCategoryValue) {
      headingText = `${
        vegNonVegValue.charAt(0).toUpperCase() + vegNonVegValue.slice(1)
      } ${
        subCategoryValue.charAt(0).toUpperCase() + subCategoryValue.slice(1)
      }`;
    } else if (vegNonVegValue) {
      headingText = `${
        vegNonVegValue.charAt(0).toUpperCase() + vegNonVegValue.slice(1)
      } Items`;
    } else if (subCategoryValue) {
      headingText =
        subCategoryValue.charAt(0).toUpperCase() + subCategoryValue.slice(1);
    }
    if (searchQuery) headingText = `Search Results for "${searchQuery}"`;
    menuHeading.textContent = headingText;

    let hasResults = false;
    menuCategories.forEach((category) => {
      const categorySubcategory = category.dataset.category.toLowerCase();
      const matchesSubCategory =
        !subCategoryValue || categorySubcategory === subCategoryValue;
      const items = category.querySelectorAll(".menu__content");
      let hasVisibleItems = false;

      items.forEach((item) => {
        const itemName = item.getAttribute("data-name")?.toLowerCase() || "";
        const itemType = item.getAttribute("data-type")?.toLowerCase() || "";
        if (
          (!searchQuery || itemName.includes(searchQuery)) &&
          (!vegNonVegValue || itemType === vegNonVegValue) &&
          matchesSubCategory
        ) {
          item.style.display = "flex";
          hasVisibleItems = true;
          hasResults = true;
        } else {
          item.style.display = "none";
        }
      });

      category.style.display =
        matchesSubCategory && hasVisibleItems ? "block" : "none";
      const noItemsMessage = category.querySelector(".no-items-message");
      if (noItemsMessage) noItemsMessage.remove();
      if (matchesSubCategory && !hasVisibleItems) {
        const message = document.createElement("p");
        message.className = "no-items-message";
        message.textContent = "No items match your filters in this category.";
        category.querySelector(".menu__container").appendChild(message);
      }
    });

    menuHeading.textContent = hasResults ? headingText : "No Results Found";
    if (!hasResults) menuHeading.classList.add("no-results");
    else menuHeading.classList.remove("no-results");
  }

  searchInput?.addEventListener("input", applyFilters);
  vegNonVegFilter?.addEventListener("change", applyFilters);
  subCategoryFilter?.addEventListener("change", applyFilters);

  applyFilters();
});

// Updated CSS for cart controls and out-of-stock
const cartStyles = `
  .cart-control {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .quantity-control {
    display: flex;
    align-items: center;
    background: var(--primary-color);
    border-radius: 15px;
    padding: 0.25rem 0.5rem;
  }
  .quantity-control button {
    width: 20px;
    height: 20px;
    font-size: 14px;
    border: none;
    background: transparent;
    color: var(--secondary-color);
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
  .quantity-control button:hover {
    opacity: 0.8;
  }
  .quantity-control button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .quantity-control .item-count {
    min-width: 20px;
    text-align: center;
    font-size: 14px;
    color: var(--secondary-color);
  }
  .cart-icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--primary-color);
  }
  .cart-icon-wrapper.menu__button {
    cursor: pointer;
  }
  .cart-icon {
    font-size: 1.25rem;
    color: var(--secondary-color);
  }
  .menu__price-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .out-of-stock {
    color: #FF4444;
    font-weight: bold;
    font-size: 14px;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = cartStyles;
document.head.appendChild(styleSheet);
