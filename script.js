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

// POPUP LOGIC
window.onload = function() {
    setTimeout(function() {
        const popup = document.getElementById('reviewPopup');
        if (popup) { popup.classList.add('show'); }
    }, 3000);
    
    renderProducts(products);
};

function closePopup() {
    const popup = document.getElementById('reviewPopup');
    if (popup) { popup.classList.remove('show'); }
}

// ORIGINAL LOGIC
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

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

function goToShop() {
  const input = document.getElementById("searchInput").value;
}