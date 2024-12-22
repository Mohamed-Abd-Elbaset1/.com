// تحميل السلة من LocalStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// عرض محتويات السلة
function displayCartItems() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
        updateCartTotal();
        return;
    }

    cart.forEach((item, index) => {
        cartItemsContainer.innerHTML += `
            <div class="col-12 cart-item d-flex justify-content-between align-items-center">
                <div>
                    <h5>${item.name}</h5>
                    <p>Price: <strong>${item.price}</strong></p>
                </div>
                <button class="btn btn-danger" onclick="removeFromCart(${index})">
                    <i class="bi bi-trash"></i> Remove
                </button>
            </div>
        `;
    });

    updateCartTotal();
}

// إزالة منتج من السلة
function removeFromCart(index) {
    const removedItem = cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${removedItem[0].name} (${removedItem[0].price}) has been removed from your cart.`);
    displayCartItems();
}

// تحديث إجمالي السعر
function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        document.getElementById('cart-total').textContent = "Your cart is empty.";
        return;
    }

    let total = cart.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('$', '') || 0);
        return acc + price;
    }, 0);

    const deliveryOption = document.getElementById('delivery-options');
    const deliveryCost = parseFloat(deliveryOption.options[deliveryOption.selectedIndex]?.getAttribute('data-price')) || 0;

    total += deliveryCost;
    document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
}

// المتابعة إلى الدفع
function proceedToCheckout() {
    const name = document.getElementById('customer-name').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const contactMethod = document.getElementById('contact-method').value;

    if (!name || !address || !phone) {
        alert('Please fill out all customer information fields!');
        return;
    }

    const total = cartTotalElement.textContent;
    alert(`Thank you for your order, ${name}! Your total is ${total}.`);
    console.log({ name, address, phone, contactMethod });

    localStorage.removeItem('cart');
    window.location.href = 'index.html';
}

// عند تغيير طريقة التوصيل
document.getElementById('delivery-options').addEventListener('change', updateCartTotal);

// تشغيل الوظائف عند التحميل
displayCartItems();
