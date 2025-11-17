// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(5, 5, 5, 0.95)';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '1rem';
        navLinks.style.backdropFilter = 'blur(10px)';
    });
}

// Download Button - Copy Script
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        const scriptContent = document.getElementById('script-content').value;
        
        try {
            await navigator.clipboard.writeText(scriptContent);
            
            // Show success feedback
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i><span>Copied!</span>';
            btn.style.background = '#4CAF50';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 2000);
            
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = scriptContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            btn.innerHTML = '<i class="fas fa-check"></i><span>Copied!</span>';
            btn.style.background = '#4CAF50';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 2000);
        }
    });
});

// Discord Button
document.querySelectorAll('.discord-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        window.open('https://discord.gg/vBYZCGGyK6', '_blank');
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
    }
});
