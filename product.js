 // قائمة المنتجات مع بيانات مخصصة
 const products = [
    { id: 1, name: "Camera x", price: "$120", specs: "1080p resolution, night vision, waterproof", img: "camera (1).jpg" },
    { id: 2, name: "Camera CCD", price: "$150", specs: "4K resolution, 120fps, AI motion detection", img: "camera (2).jpg" },
    { id: 3, name: "Camera vf", price: "$90", specs: "720p resolution, compact size, long battery life", img: "camera (3).jpg" },
    { id: 4, name: "Camera nb", price: "$200", specs: "4K HDR, wide-angle lens, solar-powered", img: "camera (4).jpg" },
    { id: 5, name: "Camera mg", price: "$75", specs: "480p resolution, lightweight, USB powered", img: "camera (5).jpg" },
    { id: 6, name: "Camera ld", price: "$300", specs: "6K resolution, AI face detection, night vision", img: "camera (6).jpg" },
    { id: 7, name: "Camera ff", price: "$110", specs: "1080p resolution, compact size, infrared support", img: "camera (7).jpg" },
    { id: 8, name: "Camera r3r", price: "$170", specs: "4K UHD, weatherproof, 360° rotation", img: "camera (8).jpg" },
    { id: 9, name: "Camera e3w", price: "$95", specs: "720p resolution, easy installation, wireless", img: "camera (9).jpg" },
    { id: 10, name: "Camera ldf", price: "$250", specs: "4K HDR, AI tracking, dual-lens system", img: "camera (10).jpg" },
    { id: 11, name: "Camera fred", price: "$130", specs: "1080p resolution, wide-angle, waterproof", img: "camera (11).jpg" },
    { id: 12, name: "Camera eed", price: "$180", specs: "4K UHD, motion detection, rechargeable battery", img: "camera (12).jpg" },
    { id: 13, name: "Camera dfj", price: "$85", specs: "720p resolution, portable, USB powered", img: "camera (13).jpg" },
    { id: 14, name: "Camera fj", price: "$220", specs: "4K resolution, night vision, AI-enhanced zoom", img: "camera (14).jpg" },
    { id: 15, name: "Camera ori", price: "$100", specs: "1080p resolution, infrared support, compact design", img: "camera (15).jpg" },
    { id: 16, name: "Camera tyu", price: "$160", specs: "4K UHD, weatherproof, smart home integration", img: "camera (16).jpg" },
    { id: 17, name: "Camera fm", price: "$95", specs: "720p resolution, long battery life, lightweight", img: "camera (17).jpg" },
    { id: 18, name: "Camera poree", price: "$270", specs: "4K HDR, AI motion detection, panoramic view", img: "camera (18).jpg" },
    { id: 19, name: "Camera di", price: "$125", specs: "1080p resolution, waterproof, infrared support", img: "camera (19).jpg" },
    { id: 20, name: "Camera fcn", price: "$190", specs: "4K UHD, rechargeable battery, AI face detection", img: "camera (20).jpg" },
    { id: 21, name: "Camera fk", price: "$80", specs: "480p resolution, portable, USB powered", img: "camera (21).jpg" },
    { id: 22, name: "Camera fn", price: "$230", specs: "4K HDR, weatherproof, AI-enhanced zoom", img: "camera (22).jpg" },
    { id: 23, name: "Camera fh", price: "$140", specs: "1080p resolution, wide-angle lens, solar-powered", img: "camera (23).jpg" },
    { id: 24, name: "Camera re", price: "$310", specs: "6K resolution, panoramic view, AI-enhanced tracking", img: "camera (24).jpg" },
];

// عرض المنتجات في الصفحة
const productList = document.getElementById('product-list');
products.forEach(product => {
    productList.innerHTML += `
        <div class='col-md-6 col-lg-4'>
            <div class='product-card'>
                <div class="img-container">
                    <img src='${product.img}' alt='${product.name}' />
                </div>
                <h5>${product.name}</h5>
                <p class="price">Price: <strong>${product.price}</strong></p>
                <p class="specs">${product.specs}</p>
                <div class="d-flex justify-content-center gap-3">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.name}')">Add</button>
                    <button class="btn btn-danger" onclick="removeFromCart(${product.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
});

// قائمة التخزين المؤقت
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// تحديث عداد السلة
function updateCartCounter() {
    const cartCounter = document.getElementById('cartCount');
    cartCounter.textContent = cart.length; // تحديث العدد بناءً على طول السلة
}

// تحديث عداد السلة عند التحميل
updateCartCounter();

// إضافة منتج إلى السلة
function addToCart(id, name) {
    const product = products.find(p => p.id === id);
    if (!product) {
        alert('Product not found!');
        return;
    }

    if (!cart.some(item => item.id === id)) {
        cart.push({ id, name, price: product.price });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${name} has been added to your cart.`);
        updateCartCounter(); // تحديث عداد السلة بعد الإضافة
    } else {
        alert(`${name} is already in your cart.`);
    }
}

// إزالة منتج من السلة
function removeFromCart(id) {
    const index = cart.findIndex(product => product.id === id);
    if (index !== -1) {
        const removedProduct = cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${removedProduct[0].name} (${removedProduct[0].price}) has been removed from your cart.`);
        updateCartCounter(); // تحديث عداد السلة بعد الإزالة
    } else {
        alert(`This product is not in your cart.`);
    }
}
