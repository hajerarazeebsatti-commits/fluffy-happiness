// --- Mobile Navigation Toggle ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger into an 'X'
    hamburger.classList.toggle('toggle');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- Shopping Cart Functionality ---
let cartCount = 0;
const cartCountDisplay = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const itemName = e.target.getAttribute('data-item');
        
        // Increase cart count
        cartCount++;
        cartCountDisplay.textContent = cartCount;

        // Visual feedback: Change button text temporarily
        const originalText = e.target.textContent;
        e.target.textContent = 'Added! ✓';
        e.target.style.backgroundColor = '#4CAF50'; // Green

        // Revert button text after 1.5 seconds
        setTimeout(() => {
            e.target.textContent = originalText;
            e.target.style.backgroundColor = ''; // Revert to original CSS color
        }, 1500);

        // Optional: Show a console log or alert (Alert can be annoying, so we just log it)
        console.log(`Added 1x ${itemName} to cart. Total items: ${cartCount}`);
    });
});

// --- Cart Button Click ---
const cartBtn = document.getElementById('cart-btn');
cartBtn.addEventListener('click', () => {
    if (cartCount === 0) {
        alert("Your cart is empty. Add some delicious treats!");
    } else {
        alert(`You have ${cartCount} item(s) in your cart. Proceeding to checkout...`);
        // In a real website, this would redirect to a checkout page.
    }
});
