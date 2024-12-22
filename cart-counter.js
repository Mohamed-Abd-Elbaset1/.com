// تحديث عداد السلة
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCounter = document.getElementById('cartCount');
    if (cartCounter) {
        cartCounter.textContent = cart.length;
    }
}

// تحديث العداد عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', updateCartCounter);
