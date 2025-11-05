
// Datos de ejemplo de cursos
const COURSES = [
    { id: 'c1', title: 'QA Automation desde cero', price: 4990, subtitle: 'Selenium, Python, CI/CD', duration: '30h' },
    { id: 'c2', title: 'Desarrollo Web Full Stack', price: 7990, subtitle: 'HTML, CSS, JS, Node', duration: '60h' },
    { id: 'c3', title: 'SQL y Bases de Datos', price: 3490, subtitle: 'Consultas, Stored Procedures', duration: '25h' },
    { id: 'c4', title: 'Unity - Juego 3D', price: 6590, subtitle: 'C#, Mecánicas, Multiplayer', duration: '40h' },
    { id: 'c5', title: 'Python para Data', price: 4290, subtitle: 'Pandas, Visualización', duration: '35h' }
];

// Elementos
const grid = document.getElementById('coursesGrid');
const cartCount = document.getElementById('cartCount');
const cartFloatCount = document.getElementById('cartFloatCount');
const cartFloat = document.getElementById('cartFloat');
const openCart = document.getElementById('openCart');
const drawer = document.getElementById('drawer');
const closeDrawer = document.getElementById('closeDrawer');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const subtotalEl = document.getElementById('subtotal');
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

// Carrito en localStorage
const CART_KEY = 'academy_demo_cart_v1';
let cart = JSON.parse(localStorage.getItem(CART_KEY) || '{}');

function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCartCount();
}

function renderCourses() {
    grid.innerHTML = '';
    COURSES.forEach(c => {
        const el = document.createElement('article');
        el.className = 'course';
        el.innerHTML = `
          <div class="thumb">${c.title.split(' ')[0]}</div>
          <h3 style="margin:0 0 6px">${c.title}</h3>
          <div class="meta"><div class="tags">${c.subtitle} • ${c.duration}</div><div class="price">$${c.price}</div></div>
          <p>Aprende las habilidades prácticas paso a paso con proyectos reales y soporte del instructor.</p>
          <div style="display:flex;gap:8px;margin-top:12px">
            <button class="btn" onclick="addToCart('${c.id}')">Comprar</button>
            <button class="btn ghost" onclick="viewDetails('${c.id}')">Ver</button>
          </div>
        `;
        grid.appendChild(el);
    });
}

function renderCartCount() {
    const totalItems = Object.values(cart).reduce((s, v) => s + v.qty, 0);
    cartCount.textContent = totalItems;
    cartFloatCount.textContent = totalItems;
}

function addToCart(id) {
    const course = COURSES.find(x => x.id === id);
    if (!course) return;
    if (!cart[id]) cart[id] = { ...course, qty: 0 };
    cart[id].qty += 1;
    saveCart();
    toast('Agregado al carrito');
    renderDrawer();
}

function viewDetails(id) {
    const c = COURSES.find(x => x.id === id);
    alert(c.title + "\n\n" + c.subtitle + "\nDuración: " + c.duration + "\nPrecio: $" + c.price);
}

function renderDrawer() {
    const keys = Object.keys(cart);
    if (keys.length === 0) {
        cartItemsEl.innerHTML = '<div class="muted">No hay productos en el carrito.</div>';
        cartTotalEl.textContent = '0';
        subtotalEl.textContent = 'Subtotal: $0';
        return;
    }
    cartItemsEl.innerHTML = '';
    let total = 0;
    keys.forEach(k => {
        const item = cart[k];
        total += item.price * item.qty;
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
          <div style="flex:1">
            <strong>${item.title}</strong>
            <div class="muted">$${item.price} x ${item.qty}</div>
          </div>
          <div style="text-align:right">
            <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
              <button class="btn ghost" onclick="changeQty('${k}',1)">+</button>
              <button class="btn ghost" onclick="changeQty('${k}',-1)">-</button>
              <button class="btn ghost" style="margin-top:6px" onclick="removeItem('${k}')">Eliminar</button>
            </div>
          </div>
        `;
        cartItemsEl.appendChild(row);
    });
    cartTotalEl.textContent = total;
    subtotalEl.textContent = `Subtotal: $${total}`;
}

function changeQty(id, delta) {
    if (!cart[id]) return;
    cart[id].qty += delta;
    if (cart[id].qty <= 0) delete cart[id];
    saveCart();
    renderDrawer();
}

function removeItem(id) {
    delete cart[id];
    saveCart();
    renderDrawer();
}

// Drawer open/close
function openDrawer() { drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); }
function closeDrawerF() { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); }
openCart.addEventListener('click', () => { renderDrawer(); openDrawer(); });
cartFloat.addEventListener('click', () => { renderDrawer(); openDrawer(); });
closeDrawer.addEventListener('click', closeDrawerF);

// Checkout (simulado)
const checkoutForm = document.getElementById('checkoutForm');
const checkoutResult = document.getElementById('checkoutResult');
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const keys = Object.keys(cart);
    if (keys.length === 0) { alert('El carrito está vacío'); return; }
    // Simular "pago"
    const order = {
        id: 'ORD-' + Date.now(),
        name, email,
        items: keys.map(k => ({ id: k, title: cart[k].title, qty: cart[k].qty, price: cart[k].price })),
        total: Number(cartTotalEl.textContent)
    };
    // Aquí podrías enviar "order" a tu servidor
    console.log('Order simulated', order);
    checkoutResult.style.display = 'block';
    checkoutResult.textContent = `Pedido creado: ${order.id}. Se envió un correo a ${email} (simulado).`;
    // Vaciar carrito
    cart = {};
    saveCart();
    renderDrawer();
});

// Helpers
function toast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.position = 'fixed';
    t.style.left = '50%';
    t.style.transform = 'translateX(-50%)';
    t.style.bottom = '22px';
    t.style.padding = '10px 14px';
    t.style.background = 'rgba(0,0,0,0.8)';
    t.style.color = 'white';
    t.style.borderRadius = '8px';
    t.style.zIndex = 9999;
    document.body.appendChild(t);
    setTimeout(() => { t.style.transition = 'opacity .4s'; t.style.opacity = 0; setTimeout(() => t.remove(), 400); }, 1200);
}

// Inicializar
renderCourses();
renderCartCount();
renderDrawer();
saveCart();