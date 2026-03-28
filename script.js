 (function() {
            // ========== DARK MODE TOGGLE (Desktop + Mobile) ==========
            const desktopToggle = document.getElementById('desktopThemeToggle');
            const mobileToggle = document.getElementById('mobileThemeToggle');
            const desktopIcon = desktopToggle?.querySelector('i');
            const desktopText = desktopToggle?.querySelector('span');
            const mobileIcon = mobileToggle?.querySelector('i');
            const mobileTextSpan = mobileToggle?.querySelector('span');
            
            function updateThemeUI(isDark) {
                if (isDark) {
                    if (desktopIcon) { desktopIcon.classList.remove('fa-moon'); desktopIcon.classList.add('fa-sun'); }
                    if (desktopText) desktopText.textContent = 'Light';
                    if (mobileIcon) { mobileIcon.classList.remove('fa-moon'); mobileIcon.classList.add('fa-sun'); }
                    if (mobileTextSpan) mobileTextSpan.textContent = 'Light Mode';
                } else {
                    if (desktopIcon) { desktopIcon.classList.remove('fa-sun'); desktopIcon.classList.add('fa-moon'); }
                    if (desktopText) desktopText.textContent = 'Dark';
                    if (mobileIcon) { mobileIcon.classList.remove('fa-sun'); mobileIcon.classList.add('fa-moon'); }
                    if (mobileTextSpan) mobileTextSpan.textContent = 'Dark Mode';
                }
            }
            
            const savedTheme = localStorage.getItem('kegna_theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark');
                updateThemeUI(true);
            } else {
                updateThemeUI(false);
            }
            
            function toggleDarkMode() {
                document.body.classList.toggle('dark');
                const isDark = document.body.classList.contains('dark');
                localStorage.setItem('kegna_theme', isDark ? 'dark' : 'light');
                updateThemeUI(isDark);
            }
            
            if (desktopToggle) desktopToggle.addEventListener('click', toggleDarkMode);
            if (mobileToggle) mobileToggle.addEventListener('click', toggleDarkMode);
            
            // ========== MOBILE MENU ==========
            const menuToggle = document.getElementById('menuToggle');
            const mobileMenu = document.getElementById('mobileMenu');
            const menuBackdrop = document.getElementById('menuBackdrop');
            const closeMenu = document.getElementById('closeMenu');
            
            function openMenu() {
                mobileMenu.classList.add('active');
                menuBackdrop.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            
            function closeMenuFunc() {
                mobileMenu.classList.remove('active');
                menuBackdrop.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            if (menuToggle) menuToggle.addEventListener('click', openMenu);
            if (closeMenu) closeMenu.addEventListener('click', closeMenuFunc);
            if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenuFunc);
            
            // ========== SMOOTH SCROLL NAVIGATION ==========
            function scrollToSection(sectionId) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const offset = 70;
                    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: elementPosition - offset,
                        behavior: 'smooth'
                    });
                }
            }
            
            const navLinks = document.querySelectorAll('[data-section]');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const sectionId = link.getAttribute('data-section');
                    closeMenuFunc(); // close mobile menu if open
                    if (sectionId === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (sectionId === 'services') {
                        scrollToSection('services');
                    } else if (sectionId === 'projects') {
                        scrollToSection('projects');
                    } else if (sectionId === 'contact') {
                        scrollToSection('contact');
                    }
                });
            });
            
            const exploreBtn = document.getElementById('exploreBtn');
            if (exploreBtn) {
                exploreBtn.addEventListener('click', () => {
                    closeMenuFunc();
                    scrollToSection('contact');
                });
            }
            
            // ========== GEAR HOVER PAUSE ==========
            const allGears = document.querySelectorAll('.gear, .gear-sep i, .floating-gear');
            allGears.forEach(g => {
                g.addEventListener('mouseenter', e => e.target.style.animationPlayState = 'paused');
                g.addEventListener('mouseleave', e => e.target.style.animationPlayState = '');
            });
            
            console.log("⚙️ KEGNA 2026 — mobile hamburger menu ready, dark mode, smooth navigation");
        })();