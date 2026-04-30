const products = [
  { name: "APA Green Dial", brand: "APA", price: 895 },
  { name: "Tissot Chrono", brand: "Tissot", price: 650 }
];

// Render products
function renderProducts(list) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart('${p.name}')">Add to Cart</button>
      </div>
    `;
  });
}

// Filter logic
function filterProducts() {
  const checked = [...document.querySelectorAll("input[type=checkbox]:checked")]
    .map(c => c.value);

  if (checked.length === 0) {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => checked.includes(p.brand));
    renderProducts(filtered);
  }
}

// Cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

// Contact form
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").innerText =
      "Message sent successfully!";
    form.reset();
  });
}

// Load products on page load
renderProducts(products);
// SEARCH (SHOP PAGE)
function searchProducts() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const value = input.value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value) ||
    p.brand.toLowerCase().includes(value)
  );

  renderProducts(filtered);
}

// REDIRECT SEARCH (HOME & CONTACT)
function goToShop() {
  const input = document.getElementById("searchInput").value;
  window.location.href = "shop.html?search=" + encodeURIComponent(input);
}

// HANDLE SEARCH FROM URL
function handleSearchFromURL() {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");

  if (search) {
    const input = document.getElementById("searchInput");
    if (input) input.value = search;

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
    );

    renderProducts(filtered);
  }
}