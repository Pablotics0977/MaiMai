// Create floating hearts
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞', '💟', '💓'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 15 + 8) + 's';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.fontSize = (Math.random() * 25 + 12) + 'px';
        heart.style.opacity = Math.random() * 0.4 + 0.3;
        container.appendChild(heart);
    }
}

// Smooth scroll (only for index page)
function smoothScroll() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.querySelector('.about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Gallery image click effect
function galleryInteraction() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Create a burst of hearts
            for (let i = 0; i < 5; i++) {
                createBurstHeart(this);
            }
        });
    });
}

// Floating photo click effect
function floatingPhotoInteraction() {
    const floatingPhotos = document.querySelectorAll('.floating-photo');
    
    floatingPhotos.forEach(photo => {
        photo.addEventListener('click', function() {
            // Create explosion of emojis
            for (let i = 0; i < 15; i++) {
                createEmojiBurst(this);
            }
            
            // Make photo bounce
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
}

// Reason card interaction
function reasonCardInteraction() {
    const reasonCards = document.querySelectorAll('.reason-card');
    
    reasonCards.forEach(card => {
        card.addEventListener('click', function() {
            // Create hearts explosion
            for (let i = 0; i < 12; i++) {
                createEmojiBurst(this);
            }
            
            // Add wiggle animation
            this.style.animation = 'wiggle 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
}

// Letter photo interaction
function letterPhotoInteraction() {
    const letterPhotos = document.querySelectorAll('.letter-photo');
    
    letterPhotos.forEach(photo => {
        photo.addEventListener('click', function() {
            // Create explosion of love emojis
            for (let i = 0; i < 20; i++) {
                createEmojiBurst(this);
            }
            
            // Add spin animation
            this.style.animation = 'none';
            this.style.transform = 'rotate(360deg) scale(1.5)';
            setTimeout(() => {
                this.style.transform = '';
                this.style.animation = '';
            }, 600);
        });
    });
}

// Flip card interaction
function flipCardInteraction() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            // Toggle flip
            this.classList.toggle('flipped');
            
            // Create celebration effect when card opens
            if (this.classList.contains('flipped')) {
                for (let i = 0; i < 25; i++) {
                    createEmojiBurst(this);
                }
                
                // Add confetti effect
                createConfetti(this);
            }
        });
        
        // Add touch support for mobile
        card.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevent double-tap zoom
            this.classList.toggle('flipped');
            
            if (this.classList.contains('flipped')) {
                for (let i = 0; i < 25; i++) {
                    createEmojiBurst(this);
                }
                createConfetti(this);
            }
        });
    });
}

// Video card interaction
function videoCardInteraction() {
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        const video = card.querySelector('.video-player');
        const overlay = card.querySelector('.video-overlay');
        
        // Play video when clicking the card
        card.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                overlay.style.opacity = '0';
            } else {
                video.pause();
                overlay.style.opacity = '1';
            }
        });
        
        // Show overlay when video ends
        video.addEventListener('ended', function() {
            overlay.style.opacity = '1';
        });
        
        // Create hearts when video plays
        video.addEventListener('play', function() {
            for (let i = 0; i < 15; i++) {
                createEmojiBurst(card);
            }
        });
    });
    
    // Reaction emojis click effect
    const reactions = document.querySelectorAll('.reaction');
    reactions.forEach(reaction => {
        reaction.addEventListener('click', function(e) {
            e.stopPropagation();
            for (let i = 0; i < 8; i++) {
                createEmojiBurst(this);
            }
            
            // Add bounce animation
            this.style.transform = 'scale(1.4)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}

function createConfetti(element) {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
    const confettiCount = 30;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        const rect = element.getBoundingClientRect();
        confetti.style.left = (rect.left + rect.width / 2) + 'px';
        confetti.style.top = (rect.top + rect.height / 2) + 'px';
        confetti.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(confetti);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        const duration = Math.random() * 1500 + 1000;
        const rotation = Math.random() * 720;
        
        confetti.animate([
            { 
                transform: 'translate(-50%, -50%) scale(0) rotate(0deg)',
                opacity: 1 
            },
            { 
                transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1) rotate(${rotation}deg)`,
                opacity: 0 
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => confetti.remove();
    }
}

function createEmojiBurst(element) {
    const emojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '✨', '🌟', '⭐', '😍', '🥰', '💞', '💟', '🌸', '🦋', '🎀', '💐', '🌹'];
    const emoji = document.createElement('div');
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'fixed';
    emoji.style.fontSize = (Math.random() * 25 + 18) + 'px';
    emoji.style.pointerEvents = 'none';
    emoji.style.zIndex = '9999';
    
    const rect = element.getBoundingClientRect();
    emoji.style.left = (rect.left + rect.width / 2) + 'px';
    emoji.style.top = (rect.top + rect.height / 2) + 'px';
    emoji.style.transform = 'translate(-50%, -50%)';
    
    document.body.appendChild(emoji);
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 180 + 120;
    const duration = Math.random() * 1000 + 700;
    
    emoji.animate([
        { 
            transform: 'translate(-50%, -50%) scale(0) rotate(0deg)',
            opacity: 1 
        },
        { 
            transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1.8) rotate(${Math.random() * 720}deg)`,
            opacity: 0 
        }
    ], {
        duration: duration,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => emoji.remove();
}

function createBurstHeart(element) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.transform = 'translate(-50%, -50%)';
    
    const rect = element.getBoundingClientRect();
    heart.style.left = (rect.left + rect.width / 2) + 'px';
    heart.style.top = (rect.top + rect.height / 2) + 'px';
    
    document.body.appendChild(heart);
    
    // Animate the heart
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 100 + 50;
    const duration = Math.random() * 500 + 500;
    
    heart.animate([
        { 
            transform: 'translate(-50%, -50%) scale(0)',
            opacity: 1 
        },
        { 
            transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1.5)`,
            opacity: 0 
        }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => heart.remove();
}

// Parallax effect on scroll
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });
}

// Intersection Observer for fade-in animations
function fadeInOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Make hero visible immediately
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
}

// Typing effect for hero subtitle
function typingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 1000);
}

// Add sparkle effect on mouse move
function sparkleEffect() {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.85) {
            createSparkle(e.clientX, e.clientY);
        }
    });
    
    // Add touch support for mobile
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        if (Math.random() > 0.85) {
            createSparkle(touch.clientX, touch.clientY);
        }
    });
}

function createSparkle(x, y) {
    const sparkles = ['✨', '💫', '⭐', '🌟', '💕', '❤️', '💖', '💗', '💞', '💓', '🌸', '🦋'];
    const sparkle = document.createElement('div');
    sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.fontSize = (Math.random() * 20 + 12) + 'px';
    sparkle.style.transform = 'translate(-50%, -50%)';
    
    document.body.appendChild(sparkle);
    
    const angle = Math.random() * 360;
    const distance = Math.random() * 50 + 20;
    
    sparkle.animate([
        { 
            transform: 'translate(-50%, -50%) scale(0) rotate(0deg)',
            opacity: 1 
        },
        { 
            transform: `translate(calc(-50% + ${Math.cos(angle * Math.PI / 180) * distance}px), calc(-50% + ${Math.sin(angle * Math.PI / 180) * distance}px)) scale(1.3) rotate(${angle + 180}deg)`,
            opacity: 0 
        }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => sparkle.remove();
}

// Love letter animation
function animateLoveLetter() {
    const letter = document.querySelector('.letter-content');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                letter.style.animation = 'fadeInUp 1s ease-out';
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(letter);
}

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    smoothScroll();
    galleryInteraction();
    floatingPhotoInteraction();
    reasonCardInteraction();
    letterPhotoInteraction();
    flipCardInteraction();
    videoCardInteraction();
    parallaxEffect();
    fadeInOnScroll();
    typingEffect();
    sparkleEffect();
    animateLoveLetter();
    setActiveNavLink();
    
    // Add playful click effect on body (desktop)
    document.body.addEventListener('click', (e) => {
        for (let i = 0; i < 6; i++) {
            createClickEmoji(e.clientX, e.clientY);
        }
    });
    
    // Add playful touch effect on body (mobile)
    document.body.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        for (let i = 0; i < 6; i++) {
            createClickEmoji(touch.clientX, touch.clientY);
        }
    });
});

function createClickEmoji(x, y) {
    const emojis = ['❤️', '💕', '💖', '✨', '🌟', '💗', '💓', '💞', '💝', '🌸', '🦋', '🎀'];
    const emoji = document.createElement('div');
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'fixed';
    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';
    emoji.style.pointerEvents = 'none';
    emoji.style.zIndex = '9999';
    emoji.style.fontSize = (Math.random() * 20 + 18) + 'px';
    emoji.style.transform = 'translate(-50%, -50%)';
    
    document.body.appendChild(emoji);
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 100 + 50;
    
    emoji.animate([
        { 
            transform: 'translate(-50%, -50%) scale(0) rotate(0deg)',
            opacity: 1 
        },
        { 
            transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1.6) rotate(${Math.random() * 360}deg)`,
            opacity: 0 
        }
    ], {
        duration: 800,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => emoji.remove();
}

// Add special message on load
window.addEventListener('load', () => {
    console.log('💕 This website was made with love for someone special 💕');
});