// Smooth scroll (future proof if you add navigation links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
// Create button dynamically
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "↑ Top";
scrollToTopBtn.id = "scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);

// Style the button via JS
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "20px";
scrollToTopBtn.style.right = "20px";
scrollToTopBtn.style.padding = "10px 15px";
scrollToTopBtn.style.fontSize = "16px";
scrollToTopBtn.style.backgroundColor = "#4fa1f3";
scrollToTopBtn.style.color = "white";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.borderRadius = "8px";
scrollToTopBtn.style.cursor = "pointer";
scrollToTopBtn.style.display = "none";
scrollToTopBtn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
scrollToTopBtn.style.zIndex = "1000";

// Show/hide button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Scroll to top on click
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
