const products = [
  { 
    name: "APA Green Dial", 
    brand: "APA", 
    price: 895,
    image: ('images./green-dial.png')
  },
  { 
    name: "Tissot Chrono", 
    brand: "Tissot", 
    price: 650,
    image: ('images./Tissot.png')
  }
];

function renderProducts(list) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
          <button onclick="addToCart('${p.name}')">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

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

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

renderProducts(products);

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