/* --- PRODUCT DATA --- */
const products = [
  { name: "APA Green Dial", brand: "APA", price: 895, image: 'images./green-dial.png' },
  { name: "Tissot Chrono", brand: "Tissot", price: 650, image: 'images./Tissot.png' }
];

/* --- INITIALIZATION --- */
window.onload = function() {
    // 1. Popup Timer
    setTimeout(function() {
        const popup = document.getElementById('reviewPopup');
        if (popup) { popup.classList.add('show'); }
    }, 3000);
    
    // 2. Render initial list
    renderProducts(products);
};

function closePopup() {
    const popup = document.getElementById('reviewPopup');
    if (popup) { popup.classList.remove('show'); }
}

/* --- FILTER LOGIC (FIXED) --- */
function filterProducts() {
    // Get all checked checkboxes
    const checkedBrands = Array.from(document.querySelectorAll('aside input[type="checkbox"]:checked'))
                               .map(cb => cb.value);

    if (checkedBrands.length === 0) {
        renderProducts(products); // Show all if none checked
    } else {
        const filtered = products.filter(p => checkedBrands.includes(p.brand));
        renderProducts(filtered);
    }
}

/* --- SEARCH LOGIC --- */
function goToShop() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(input));
    renderProducts(filtered);
}

/* --- RENDERING --- */
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

function addToCart(name) {
    alert(name + " added to cart!");
}