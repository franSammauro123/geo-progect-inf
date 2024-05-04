let cartItems = [];

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-250px";
  document.getElementById("overlay").style.width = "100%";
  document.getElementById("overlay").style.opacity = "0.8";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("overlay").style.width = "0";
  document.getElementById("overlay").style.opacity = "0";
}

function openCartModal() {
  document.getElementById("cartModal").style.display = "block";
  document.getElementById("overlay").style.width = "100%";
  document.getElementById("overlay").style.opacity = "0.8";
}

function closeCartModal() {
  document.getElementById("cartModal").style.display = "none";
  document.getElementById("overlay").style.width = "0";
  document.getElementById("overlay").style.opacity = "0";
}

function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  updateCart();
  showAlert(itemName);
}

function updateCart() {
  let cartItemsModal = document.getElementById("cartItemsModal");
  cartItemsModal.innerHTML = "";
  let total = 0;
  cartItems.forEach((item, index) => {
    const itemId = `item-${index}`;
    cartItemsModal.innerHTML += `
      <div id="${itemId}" class="cart-item">
        <p>${item.name}: $${item.price}</p>
        <button onclick="removeFromCart('${itemId}')">Eliminar</button>
      </div>`;
    total += item.price;
  });
  cartItemsModal.innerHTML += `<h3>Total: $${total}</h3>`;
}
function removeFromCart(itemId) {
  const index = itemId.split("-")[1]; 
  cartItems.splice(index, 1);
  updateCart();
}


function showAlert(itemName) {
  const alertContainer = document.createElement("div");
  alertContainer.classList.add("custom-alert");
  alertContainer.textContent = `¡${itemName} ha sido añadido al carrito!`;
  document.body.appendChild(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
}

document.getElementById("overlay").addEventListener("click", closeCartModal);

function clearCart() {
  cartItems = [];
  updateCart();
}
function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  updateCart();
  showAlert(itemName);
  updateCartItemCount();
}

function updateCartItemCount() {
  const cartItemCountElement = document.getElementById("cartItemCount");
  cartItemCountElement.textContent = cartItems.length; 
}
function payCart() {
 
  cartItems = []; 
  updateCart(); 
  updateCartItemCount();
  closeCartModal(); 
}