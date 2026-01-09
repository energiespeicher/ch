document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class for page fade-in
    document.body.classList.add('loaded');

    // Source Toggle Logic
    document.querySelectorAll('.source-toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const list = btn.nextElementSibling;
            if (list) {
                list.classList.toggle('visible');
                // Optional: Change icon
                const icon = btn.querySelector('i');
                if (icon) {
                    if (list.classList.contains('visible')) {
                        icon.className = 'fa-solid fa-chevron-down';
                    } else {
                        icon.className = 'fa-solid fa-chevron-right';
                    }
                }
            }
        });
    });

    // Mobile Menu Toggle with smooth animation
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate hamburger icon
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Active Link Highlighting
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links a');
    menuItem.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        const icon = menuToggle.querySelector('i');
                        icon.classList.remove('fa-xmark');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // Intersection Observer for reveal animations with staggered effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animateElements = document.querySelectorAll('.card, .section-title, .tech-section, .hero p, .hero h1, .tech-showcase, table, .responsive-img');

    animateElements.forEach((el, index) => {
        el.classList.add('reveal');
        // Add stagger class for grouped animations
        const staggerIndex = (index % 5) + 1;
        el.classList.add(`stagger-${staggerIndex}`);
        revealObserver.observe(el);
    });

    // Also animate paragraphs but with shorter delays
    const paragraphs = document.querySelectorAll('main p:not(.hero p):not(.img-caption)');
    paragraphs.forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${Math.min(index * 50, 300)}ms`;
        revealObserver.observe(el);
    });

    // Animate card grid items with staggered effect
    const cardGrids = document.querySelectorAll('.card-grid');
    cardGrids.forEach(grid => {
        const cards = grid.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 100}ms`;
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;

            if (scrolled < heroHeight) {
                const parallaxValue = scrolled * 0.3;
                hero.style.transform = `translateY(${parallaxValue}px)`;
                hero.style.opacity = 1 - (scrolled / heroHeight) * 0.5;
            }
        }, { passive: true });
    }

    // Add hover sound effect simulation (visual feedback)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px) scale(1.02)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // Animate numbers (if any counters exist)
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);

        const updateCounter = () => {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    };

    // Initialize counters when they come into view
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.count);
                    animateCounter(entry.target, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // Add smooth image loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    // ðŸ† HIGHSCORE MANAGER - Local Leaderboard
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

    const HighscoreManager = {
        getScores(game) {
            const data = localStorage.getItem(`highscores_${game}`);
            return data ? JSON.parse(data) : [];
        },

        saveScore(game, score, difficulty = 'Normal') {
            const scores = this.getScores(game);
            scores.push({
                score: score,
                difficulty: difficulty,
                date: new Date().toLocaleDateString('de-DE')
            });
            scores.sort((a, b) => b.score - a.score);
            scores.splice(10);
            localStorage.setItem(`highscores_${game}`, JSON.stringify(scores));
        },

        getTopScores(game, limit = 10) {
            return this.getScores(game).slice(0, limit);
        }
    };

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    // ðŸŽ® SECRET RETRO GAMES - Type game names or 5x click logo for menu! ðŸŽ®
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

    let secretBuffer = '';
    const secretCodes = {
        'snake': launchSnakeGame,
        'pong': launchPongGame,
        'tetris': launchTetrisGame,
        'breakout': launchBreakoutGame,
        '2048': launch2048Game
    };

    document.addEventListener('keydown', (e) => {
        if (e.key.length === 1) {
            secretBuffer += e.key.toLowerCase();
            secretBuffer = secretBuffer.slice(-10);

            for (const [code, launcher] of Object.entries(secretCodes)) {
                if (secretBuffer.includes(code)) {
                    secretBuffer = '';
                    launcher();
                    break;
                }
            }
        }
    });

    // 5 quick clicks on logo opens game menu
    let logoClicks = 0;
    let logoClickTimer = null;
    const logo = document.querySelector('.logo');

    if (logo) {
        logo.addEventListener('click', (e) => {
            logoClicks++;
            if (logoClicks === 1) {
                logoClickTimer = setTimeout(() => {
                    logoClicks = 0;
                }, 2000);
            }
            if (logoClicks >= 5) {
                clearTimeout(logoClickTimer);
                logoClicks = 0;
                e.preventDefault();
                launchGameMenu();
            }
        });
    }

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    // GAME MENU - Simple game selection
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

    function launchGameMenu() {
        if (document.getElementById('game-menu-container')) return;

        const menuContainer = document.createElement('div');
        menuContainer.id = 'game-menu-container';
        menuContainer.innerHTML = `
            <style>
                #game-menu-container {
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: #1a1a1a; z-index: 99999; display: flex; flex-direction: column;
                    align-items: center; justify-content: center; font-family: Arial, sans-serif;
                }
                #game-menu-container.closing { animation: fadeOut 0.3s ease-in forwards; }
                @keyframes fadeOut { to { opacity: 0; } }
                .menu-title { font-size: 2.5rem; font-weight: bold; color: #4CAF50; margin-bottom: 1.5rem; }
                .game-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; max-width: 450px; }
                .game-card { background: #333; border: 2px solid #555; padding: 1.2rem 1.5rem; text-align: center; cursor: pointer; border-radius: 8px; transition: all 0.2s; }
                .game-card:hover { border-color: #4CAF50; transform: scale(1.05); }
                .game-card-title { font-size: 1.1rem; font-weight: bold; color: #fff; }
                .close-menu { position: absolute; top: 1rem; right: 1rem; background: none; border: 2px solid #f44336; color: #f44336; padding: 0.5rem 1rem; cursor: pointer; border-radius: 4px; }
                .close-menu:hover { background: #f44336; color: #fff; }
            </style>
            
            <button class="close-menu" id="close-menu-btn">ESC</button>
            
            <h1 class="menu-title">&#127918;GAMES</h1>
            
            <div class="game-grid">
                <div class="game-card" data-game="snake"><div class="game-card-title">&#128013; SNAKE</div></div>
                <div class="game-card" data-game="pong"><div class="game-card-title">&#127955; PONG</div></div>
                <div class="game-card" data-game="tetris"><div class="game-card-title">&#129521; TETRIS</div></div>
                <div class="game-card" data-game="breakout"><div class="game-card-title">&#127919; BREAKOUT</div></div>
                <div class="game-card" data-game="2048"><div class="game-card-title">&#128290; 2048</div></div>
            </div>
        `;

        document.body.appendChild(menuContainer);

        document.getElementById('close-menu-btn').addEventListener('click', closeMenu);

        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', () => {
                const game = card.dataset.game;
                closeMenu();
                setTimeout(() => {
                    if (game === 'snake') launchSnakeGame();
                    else if (game === 'pong') launchPongGame();
                    else if (game === 'tetris') launchTetrisGame();
                    else if (game === 'breakout') launchBreakoutGame();
                    else if (game === '2048') launch2048Game();
                }, 300);
            });
        });

        function closeMenu() {
            menuContainer.classList.add('closing');
            setTimeout(() => menuContainer.remove(), 300);
        }

        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                closeMenu();
                document.removeEventListener('keydown', escHandler);
            }
        });
    }

    // Global function to return to menu from any game
    function returnToGameMenu() {
        // Close any open game
        ['snake-game-container', 'pong-game-container', 'tetris-game-container', 'breakout-game-container', 'game-2048-container'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.remove();
        });
        launchGameMenu();
    }

    // Game switcher bar - shows icons for all games
    function createGameSwitcher(currentGame) {
        const games = [
            { id: 'snake', icon: '&#128013;', name: 'Snake' },
            { id: 'pong', icon: '&#127955;', name: 'Pong' },
            { id: 'tetris', icon: '&#129521;', name: 'Tetris' },
            { id: 'breakout', icon: '&#127919;', name: 'Breakout' },
            { id: '2048', icon: '&#128290;', name: '2048' }
        ];

        const switcher = document.createElement('div');
        switcher.className = 'game-switcher';
        switcher.innerHTML = `
            <style>
                .game-switcher {
                    position: absolute;
                    top: 1rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 0.4rem;
                    background: rgba(0,0,0,0.85);
                    padding: 0.5rem;
                    border-radius: 10px;
                    z-index: 100;
                    border: 1px solid #333;
                }
                .game-switch-btn {
                    width: 36px;
                    height: 36px;
                    border: 2px solid #555;
                    background: #333;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 1.1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }
                .game-switch-btn:hover:not(.active) {
                    border-color: #4CAF50;
                    transform: scale(1.1);
                }
                .game-switch-btn.active {
                    border-color: #4CAF50;
                    background: #4CAF50;
                    cursor: default;
                }
                .switcher-divider {
                    width: 1px;
                    background: #555;
                    margin: 0 0.3rem;
                }
                .game-switch-btn.highscore {
                    border-color: #FFD700;
                }
                .game-switch-btn.highscore:hover {
                    background: #FFD700;
                    color: #000;
                }
                .hs-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 999999; }
                .hs-content { background: #222; padding: 1.5rem; border-radius: 12px; border: 3px solid #FFD700; max-width: 400px; width: 90%; max-height: 70vh; overflow-y: auto; }
                .hs-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
                .hs-title { color: #FFD700; font-size: 1.3rem; font-weight: bold; }
                .hs-close { background: #f44336; border: none; color: #fff; width: 30px; height: 30px; cursor: pointer; border-radius: 50%; font-size: 1rem; }
                .hs-list { color: #fff; }
                .hs-item { display: flex; justify-content: space-between; padding: 0.4rem; border-bottom: 1px solid #444; }
                .hs-rank { color: #888; width: 25px; }
                .hs-name { flex: 1; }
                .hs-score { color: #4CAF50; font-weight: bold; }
                .hs-diff { color: #888; font-size: 0.75rem; margin-left: 0.5rem; }
                .hs-empty { color: #888; text-align: center; padding: 1rem; }
            </style>
            ${games.map(g => `
                <button class="game-switch-btn ${g.id === currentGame ? 'active' : ''}" 
                        data-game="${g.id}" title="${g.name}">
                    ${g.icon}
                </button>
            `).join('')}
            <div class="switcher-divider"></div>
            <button class="game-switch-btn highscore" id="switcher-hs-btn" title="Bestenliste">&#127942;</button>
        `;

        switcher.querySelectorAll('.game-switch-btn:not(.active):not(.highscore)').forEach(btn => {
            btn.addEventListener('click', () => {
                const game = btn.dataset.game;
                ['snake-game-container', 'pong-game-container', 'tetris-game-container', 'breakout-game-container', 'game-2048-container'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.remove();
                });
                if (game === 'snake') launchSnakeGame();
                else if (game === 'pong') launchPongGame();
                else if (game === 'tetris') launchTetrisGame();
                else if (game === 'breakout') launchBreakoutGame();
                else if (game === '2048') launch2048Game();
            });
        });

        // Highscore button
        switcher.querySelector('#switcher-hs-btn').addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'hs-modal';
            const scores = HighscoreManager.getTopScores(currentGame, 10);
            const gameName = games.find(g => g.id === currentGame)?.name || currentGame;

            modal.innerHTML = `
                <div class="hs-content">
                    <div class="hs-header">
                        <div class="hs-title">&#127942; ${gameName}</div>
                        <button class="hs-close">&#10005;</button>
                    </div>
                    <div class="hs-list">
                        ${scores.length === 0 ? '<div class="hs-empty">Noch keine Highscores!</div>' :
                    scores.map((s, i) => `
                            <div class="hs-item">
                                <span class="hs-rank">${i + 1}.</span>
                                <span class="hs-score">${s.score}</span>
                                <span class="hs-diff">${s.difficulty || ''}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            modal.querySelector('.hs-close').addEventListener('click', () => modal.remove());
            modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
        });

        return switcher;
    }

    function launchSnakeGame() {
        // Check if game already exists
        if (document.getElementById('snake-game-container')) return;

        // Create game container
        const gameContainer = document.createElement('div');
        gameContainer.id = 'snake-game-container';
        gameContainer.innerHTML = `
            <style>
                #snake-game-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: #1a1a1a;
                    z-index: 99999;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: Arial, sans-serif;
                }
                
                #snake-game-container.closing {
                    animation: fadeOut 0.3s ease-in forwards;
                }
                
                @keyframes fadeOut {
                    to { opacity: 0; }
                }
                
                .game-title {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: #4CAF50;
                    margin-bottom: 0.5rem;
                }
                
                #snake-canvas {
                    border: 3px solid #4CAF50;
                    background: #000;
                }
                
                .game-info {
                    display: flex;
                    gap: 3rem;
                    margin-top: 1rem;
                    color: #fff;
                }
                
                .game-stat {
                    text-align: center;
                }
                
                .game-stat-label {
                    font-size: 0.8rem;
                    color: #888;
                    text-transform: uppercase;
                }
                
                .game-stat-value {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #4CAF50;
                }
                
                .game-controls {
                    margin-top: 1rem;
                    color: #666;
                    font-size: 0.8rem;
                }
                
                .game-controls span {
                    color: #4CAF50;
                    padding: 0.2rem 0.4rem;
                    border: 1px solid #4CAF50;
                    border-radius: 3px;
                    margin: 0 0.1rem;
                }
                
                .close-game {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: none;
                    border: 2px solid #f44336;
                    color: #f44336;
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                    font-size: 0.9rem;
                    border-radius: 4px;
                }
                
                .close-game:hover {
                    background: #f44336;
                    color: #fff;
                }
                
                .game-over-overlay, .settings-overlay {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #222;
                    padding: 2rem 3rem;
                    border-radius: 10px;
                    text-align: center;
                    border: 2px solid #4CAF50;
                }
                
                .game-over-overlay {
                    border-color: #f44336;
                }
                
                .game-over-title {
                    font-size: 2rem;
                    color: #f44336;
                    margin-bottom: 1rem;
                }
                
                .settings-title {
                    font-size: 1.5rem;
                    color: #4CAF50;
                    margin-bottom: 1.5rem;
                }
                
                .game-over-score {
                    font-size: 1rem;
                    color: #fff;
                    margin-bottom: 1.5rem;
                }
                
                .game-over-score strong {
                    color: #4CAF50;
                    font-size: 1.2rem;
                }
                
                .setting-group {
                    margin-bottom: 1.5rem;
                    text-align: left;
                }
                
                .setting-label {
                    color: #ccc;
                    font-size: 0.9rem;
                    margin-bottom: 0.5rem;
                    display: block;
                }
                
                .setting-options {
                    display: flex;
                    gap: 0.5rem;
                }
                
                .setting-btn {
                    background: #333;
                    border: 1px solid #555;
                    color: #fff;
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                    border-radius: 4px;
                    font-size: 0.85rem;
                }
                
                .setting-btn:hover {
                    border-color: #4CAF50;
                }
                
                .setting-btn.active {
                    background: #4CAF50;
                    border-color: #4CAF50;
                    color: #000;
                }
                
                .start-btn, .restart-btn {
                    background: #4CAF50;
                    border: none;
                    color: #fff;
                    padding: 0.8rem 2rem;
                    font-size: 1rem;
                    font-weight: bold;
                    cursor: pointer;
                    border-radius: 5px;
                    margin-top: 1rem;
                }
                
                .start-btn:hover, .restart-btn:hover {
                    background: #45a049;
                }
                
                .highscore-badge {
                    background: #FFD700;
                    color: #000;
                    padding: 0.3rem 0.8rem;
                    font-size: 0.75rem;
                    font-weight: bold;
                    border-radius: 10px;
                    margin-bottom: 1rem;
                    display: inline-block;
                }
            </style>
            
            <button class="close-game" id="close-btn">ESC</button>
            
            <h1 class="game-title">SNAKE</h1>
            
            <canvas id="snake-canvas" width="400" height="400"></canvas>
            
            <div class="game-info">
                <div class="game-stat">
                    <div class="game-stat-label">Score</div>
                    <div class="game-stat-value" id="current-score">0</div>
                </div>
                <div class="game-stat">
                    <div class="game-stat-label">Highscore</div>
                    <div class="game-stat-value" id="high-score">0</div>
                </div>
            </div>
            
            <div class="game-controls">
                <span>&#8593;</span><span>&#8595;</span><span>&#8592;</span><span>&#8594;</span> oder 
                <span>W</span><span>A</span><span>S</span><span>D</span>
            </div>
            
            <div class="settings-overlay" id="settings-overlay">
                <h2 class="settings-title">Einstellungen</h2>
                
                <div class="setting-group">
                    <label class="setting-label">Geschwindigkeit:</label>
                    <div class="setting-options" id="speed-options">
                        <button class="setting-btn" data-speed="150">Langsam</button>
                        <button class="setting-btn active" data-speed="100">Normal</button>
                        <button class="setting-btn" data-speed="60">Schnell</button>
                    </div>
                </div>
                
                <div class="setting-group">
                    <label class="setting-label">W&#228;nde:</label>
                    <div class="setting-options" id="wall-options">
                        <button class="setting-btn active" data-wall="deadly">T&#246;dlich</button>
                        <button class="setting-btn" data-wall="wrap">Durchl&#228;ssig</button>
                    </div>
                </div>
                
                <button class="start-btn" id="start-btn">STARTEN</button>
            </div>
        `;

        document.body.appendChild(gameContainer);
        gameContainer.appendChild(createGameSwitcher('snake'));

        // Game variables
        const canvas = document.getElementById('snake-canvas');
        const ctx = canvas.getContext('2d');
        const gridSize = 20;
        const tileCount = canvas.width / gridSize;

        let snake = [{ x: 10, y: 10 }];
        let food = { x: 15, y: 15 };
        let dx = 0;
        let dy = 0;
        let score = 0;
        let highScore = parseInt(localStorage.getItem('snakeHighScore')) || 0;
        let gameLoop;
        let gameRunning = false;
        let gameSpeed = 100;
        let wallsDeadly = true;

        document.getElementById('high-score').textContent = highScore;

        // Settings handlers
        const speedOptions = document.querySelectorAll('#speed-options .setting-btn');
        const wallOptions = document.querySelectorAll('#wall-options .setting-btn');

        speedOptions.forEach(btn => {
            btn.addEventListener('click', () => {
                speedOptions.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                gameSpeed = parseInt(btn.dataset.speed);
            });
        });

        wallOptions.forEach(btn => {
            btn.addEventListener('click', () => {
                wallOptions.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                wallsDeadly = btn.dataset.wall === 'deadly';
            });
        });

        document.getElementById('start-btn').addEventListener('click', () => {
            document.getElementById('settings-overlay').style.display = 'none';
            startGame();
        });

        document.getElementById('close-btn').addEventListener('click', closeGame);

        function closeGame() {
            gameContainer.classList.add('closing');
            setTimeout(() => gameContainer.remove(), 300);
            document.removeEventListener('keydown', handleKeyDown);
            clearInterval(gameLoop);
        }

        function spawnFood() {
            food = {
                x: Math.floor(Math.random() * tileCount),
                y: Math.floor(Math.random() * tileCount)
            };
            for (const segment of snake) {
                if (segment.x === food.x && segment.y === food.y) {
                    spawnFood();
                    return;
                }
            }
        }

        function drawGame() {
            // Clear canvas
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw food (red square)
            ctx.fillStyle = '#f44336';
            ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);

            // Draw snake (green squares)
            snake.forEach((segment, index) => {
                ctx.fillStyle = index === 0 ? '#4CAF50' : '#81C784';
                ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
            });
        }

        function updateGame() {
            if (!gameRunning) return;

            // Wait for first direction input
            if (dx === 0 && dy === 0) {
                drawGame();
                return;
            }

            // Move snake
            const head = { x: snake[0].x + dx, y: snake[0].y + dy };

            // Wall collision
            if (wallsDeadly) {
                if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
                    gameOver();
                    return;
                }
            } else {
                // Wrap around
                if (head.x < 0) head.x = tileCount - 1;
                if (head.x >= tileCount) head.x = 0;
                if (head.y < 0) head.y = tileCount - 1;
                if (head.y >= tileCount) head.y = 0;
            }

            // Self collision
            for (const segment of snake) {
                if (head.x === segment.x && head.y === segment.y) {
                    gameOver();
                    return;
                }
            }

            snake.unshift(head);

            // Check food collision
            if (head.x === food.x && head.y === food.y) {
                score += 10;
                document.getElementById('current-score').textContent = score;
                spawnFood();
            } else {
                snake.pop();
            }

            drawGame();
        }

        function gameOver() {
            gameRunning = false;
            clearInterval(gameLoop);

            // Save to global highscores
            const diffLabel = `${wallsDeadly ? 'WÃ¤nde tÃ¶dlich' : 'DurchlÃ¤ssig'} / ${gameSpeed === 150 ? 'Langsam' : gameSpeed === 100 ? 'Normal' : 'Schnell'}`;
            HighscoreManager.saveScore('snake', score, diffLabel);

            let isNewHighScore = false;
            if (score > highScore) {
                highScore = score;
                localStorage.setItem('snakeHighScore', highScore);
                document.getElementById('high-score').textContent = highScore;
                isNewHighScore = true;
            }

            const overlay = document.createElement('div');
            overlay.className = 'game-over-overlay';
            overlay.innerHTML = `
                ${isNewHighScore ? '<div class="highscore-badge">NEUER REKORD!</div>' : ''}
                <h2 class="game-over-title">GAME OVER</h2>
                <p class="game-over-score">Score: <strong>${score}</strong></p>
                <button class="restart-btn" id="restart-btn">NOCHMAL</button>
            `;
            gameContainer.appendChild(overlay);

            document.getElementById('restart-btn').addEventListener('click', () => {
                overlay.remove();
                resetGame();
            });
        }

        function startGame() {
            gameRunning = true;
            spawnFood();
            drawGame();
            gameLoop = setInterval(updateGame, gameSpeed);
        }

        function resetGame() {
            snake = [{ x: 10, y: 10 }];
            dx = 0;
            dy = 0;
            score = 0;
            document.getElementById('current-score').textContent = '0';
            spawnFood();
            gameRunning = true;
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            gameLoop = setInterval(updateGame, gameSpeed);
        }

        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                closeGame();
                return;
            }

            if (!gameRunning) return;

            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    if (dy !== 1) { dx = 0; dy = -1; }
                    e.preventDefault();
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    if (dy !== -1) { dx = 0; dy = 1; }
                    e.preventDefault();
                    break;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    if (dx !== 1) { dx = -1; dy = 0; }
                    e.preventDefault();
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    if (dx !== -1) { dx = 1; dy = 0; }
                    e.preventDefault();
                    break;
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        // Draw initial state
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGame();
    }

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    // PONG GAME
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

    function launchPongGame() {
        if (document.getElementById('pong-game-container')) return;

        const gameContainer = document.createElement('div');
        gameContainer.id = 'pong-game-container';
        gameContainer.innerHTML = `
            <style>
                #pong-game-container {
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: #1a1a1a; z-index: 99999; display: flex; flex-direction: column;
                    align-items: center; justify-content: center; font-family: Arial, sans-serif;
                }
                #pong-game-container.closing { animation: fadeOut 0.3s ease-in forwards; }
                @keyframes fadeOut { to { opacity: 0; } }
                .pong-title { font-size: 2rem; color: #4CAF50; margin-bottom: 0.5rem; }
                #pong-canvas { border: 3px solid #4CAF50; background: #000; }
                .pong-info { display: flex; gap: 3rem; margin-top: 1rem; color: #fff; }
                .pong-score { font-size: 1.5rem; color: #4CAF50; }
                .pong-controls { margin-top: 1rem; color: #666; font-size: 0.8rem; }
                .close-pong { position: absolute; top: 1rem; right: 1rem; background: none; border: 2px solid #f44336; color: #f44336; padding: 0.5rem 1rem; cursor: pointer; border-radius: 4px; }
                .close-pong:hover { background: #f44336; color: #fff; }
                .pong-overlay { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #222; padding: 2rem; border-radius: 10px; text-align: center; border: 2px solid #4CAF50; }
                .pong-overlay h2 { color: #4CAF50; margin-bottom: 1rem; }
                .pong-btn { background: #4CAF50; border: none; color: #fff; padding: 0.8rem 2rem; cursor: pointer; border-radius: 5px; margin: 0.5rem; }
            </style>
            <button class="close-pong" id="close-pong">ESC</button>
            <h1 class="pong-title">PONG</h1>
            <canvas id="pong-canvas" width="600" height="400"></canvas>
            <div class="pong-info">
                <div>Spieler: <span class="pong-score" id="player-score">0</span></div>
                <div>Computer: <span class="pong-score" id="cpu-score">0</span></div>
            </div>
            <div class="pong-controls">&#8593; / &#8595; oder W / S zum Steuern (gedr&#252;ckt halten)</div>
            <div class="pong-overlay" id="pong-settings">
                <h2>Schwierigkeit</h2>
                <button class="pong-btn" data-diff="easy">Leicht</button>
                <button class="pong-btn" data-diff="normal">Normal</button>
                <button class="pong-btn" data-diff="hard">Schwer</button>
            </div>
        `;

        document.body.appendChild(gameContainer);
        gameContainer.appendChild(createGameSwitcher('pong'));

        const canvas = document.getElementById('pong-canvas');
        const ctx = canvas.getContext('2d');

        let playerY = 150, cpuY = 150;
        let ballX = 300, ballY = 200, ballDX = 4, ballDY = 3;
        let playerScore = 0, cpuScore = 0;
        let cpuSpeed = 3, playerSpeed = 8;
        let gameLoop, gameRunning = false;
        const paddleH = 80, paddleW = 10, ballSize = 10;

        // Smooth key tracking
        let upPressed = false, downPressed = false;

        document.querySelectorAll('#pong-game-container [data-diff]').forEach(btn => {
            btn.addEventListener('click', () => {
                cpuSpeed = btn.dataset.diff === 'easy' ? 2 : btn.dataset.diff === 'hard' ? 5 : 3;
                document.getElementById('pong-settings').style.display = 'none';
                gameRunning = true;
                gameLoop = setInterval(updatePong, 16);
            });
        });

        document.getElementById('close-pong').addEventListener('click', closePong);

        function closePong() {
            clearInterval(gameLoop);
            gameContainer.classList.add('closing');
            setTimeout(() => gameContainer.remove(), 300);
            document.removeEventListener('keydown', pongKeyDown);
            document.removeEventListener('keyup', pongKeyUp);
        }

        function updatePong() {
            if (!gameRunning) return;

            // Smooth player movement
            if (upPressed) playerY = Math.max(0, playerY - playerSpeed);
            if (downPressed) playerY = Math.min(canvas.height - paddleH, playerY + playerSpeed);

            // Ball movement
            ballX += ballDX;
            ballY += ballDY;

            if (ballY <= 0 || ballY >= canvas.height - ballSize) ballDY = -ballDY;

            if (ballX <= paddleW + 10 && ballY >= playerY && ballY <= playerY + paddleH) {
                ballDX = Math.abs(ballDX);
                ballDY += (ballY - playerY - paddleH / 2) * 0.1;
            }
            if (ballX >= canvas.width - paddleW - 10 - ballSize && ballY >= cpuY && ballY <= cpuY + paddleH) {
                ballDX = -Math.abs(ballDX);
            }

            if (ballX < 0) { cpuScore++; resetBall(); }
            if (ballX > canvas.width) { playerScore++; resetBall(); }

            document.getElementById('player-score').textContent = playerScore;
            document.getElementById('cpu-score').textContent = cpuScore;

            if (cpuY + paddleH / 2 < ballY) cpuY += cpuSpeed;
            if (cpuY + paddleH / 2 > ballY) cpuY -= cpuSpeed;
            cpuY = Math.max(0, Math.min(canvas.height - paddleH, cpuY));

            drawPong();
        }

        function resetBall() {
            ballX = 300; ballY = 200;
            ballDX = (Math.random() > 0.5 ? 4 : -4);
            ballDY = (Math.random() - 0.5) * 6;
        }

        function drawPong() {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#333';
            ctx.setLineDash([10, 10]);
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, 0);
            ctx.lineTo(canvas.width / 2, canvas.height);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(10, playerY, paddleW, paddleH);
            ctx.fillRect(canvas.width - 20, cpuY, paddleW, paddleH);
            ctx.fillStyle = '#fff';
            ctx.fillRect(ballX, ballY, ballSize, ballSize);
        }

        function pongKeyDown(e) {
            if (e.key === 'Escape') { closePong(); return; }
            if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') { upPressed = true; e.preventDefault(); }
            if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') { downPressed = true; e.preventDefault(); }
        }

        function pongKeyUp(e) {
            if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') upPressed = false;
            if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') downPressed = false;
        }

        document.addEventListener('keydown', pongKeyDown);
        document.addEventListener('keyup', pongKeyUp);

        drawPong();
    }

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    // TETRIS GAME
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

    function launchTetrisGame() {
        if (document.getElementById('tetris-game-container')) return;

        const gameContainer = document.createElement('div');
        gameContainer.id = 'tetris-game-container';
        gameContainer.innerHTML = `
            <style>
                #tetris-game-container {
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: #1a1a1a; z-index: 99999; display: flex; flex-direction: column;
                    align-items: center; justify-content: center; font-family: Arial, sans-serif;
                }
                #tetris-game-container.closing { animation: fadeOut 0.3s ease-in forwards; }
                @keyframes fadeOut { to { opacity: 0; } }
                .tetris-title { font-size: 2rem; color: #4CAF50; margin-bottom: 0.5rem; }
                .tetris-wrapper { display: flex; gap: 1rem; align-items: flex-start; }
                #tetris-canvas { border: 3px solid #4CAF50; background: #000; }
                .tetris-sidebar { display: flex; flex-direction: column; gap: 1rem; }
                .tetris-panel { background: #222; padding: 0.8rem; border-radius: 8px; border: 2px solid #333; text-align: center; }
                .tetris-panel-title { color: #888; font-size: 0.7rem; text-transform: uppercase; margin-bottom: 0.3rem; }
                .tetris-panel-value { color: #4CAF50; font-size: 1.3rem; font-weight: bold; }
                #next-canvas { background: #000; border: 2px solid #333; }
                .tetris-controls { margin-top: 0.5rem; color: #666; font-size: 0.7rem; text-align: center; }
                .close-tetris { position: absolute; top: 1rem; right: 1rem; background: none; border: 2px solid #f44336; color: #f44336; padding: 0.5rem 1rem; cursor: pointer; border-radius: 4px; }
                .close-tetris:hover { background: #f44336; color: #fff; }
                .tetris-overlay { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #222; padding: 2rem; border-radius: 10px; text-align: center; border: 2px solid #4CAF50; z-index: 10; }
                .tetris-overlay h2 { color: #4CAF50; margin-bottom: 1rem; }
                .tetris-btn { background: #4CAF50; border: none; color: #fff; padding: 0.8rem 2rem; cursor: pointer; border-radius: 5px; margin: 0.3rem; display: block; width: 100%; }
                .level-up { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #FFD700; font-size: 2rem; font-weight: bold; animation: levelUp 1s ease-out forwards; pointer-events: none; }
                @keyframes levelUp { 0% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 100% { opacity: 0; transform: translate(-50%, -100%) scale(1.5); } }
            </style>
            <button class="close-tetris" id="close-tetris">ESC</button>
            <h1 class="tetris-title">TETRIS</h1>
            <div class="tetris-wrapper">
                <canvas id="tetris-canvas" width="200" height="400"></canvas>
                <div class="tetris-sidebar">
                    <div class="tetris-panel">
                        <div class="tetris-panel-title">N&#228;chster</div>
                        <canvas id="next-canvas" width="80" height="60"></canvas>
                    </div>
                    <div class="tetris-panel">
                        <div class="tetris-panel-title">Score</div>
                        <div class="tetris-panel-value" id="tetris-score">0</div>
                    </div>
                    <div class="tetris-panel">
                        <div class="tetris-panel-title">Level</div>
                        <div class="tetris-panel-value" id="tetris-level">1</div>
                    </div>
                    <div class="tetris-panel">
                        <div class="tetris-panel-title">Reihen</div>
                        <div class="tetris-panel-value" id="tetris-lines">0</div>
                    </div>
                </div>
            </div>
            <div class="tetris-controls">&#8592; &#8594; Bewegen | &#8593; Drehen | &#8595; Schneller | Leertaste = Sofort fallen</div>
            <div class="tetris-overlay" id="tetris-settings">
                <h2>Start-Level</h2>
                <button class="tetris-btn" data-level="1">Level 1</button>
                <button class="tetris-btn" data-level="5">Level 5</button>
                <button class="tetris-btn" data-level="10">Level 10</button>
            </div>
        `;

        document.body.appendChild(gameContainer);
        gameContainer.appendChild(createGameSwitcher('tetris'));

        const canvas = document.getElementById('tetris-canvas');
        const ctx = canvas.getContext('2d');
        const nextCanvas = document.getElementById('next-canvas');
        const nextCtx = nextCanvas.getContext('2d');
        const COLS = 10, ROWS = 20, BLOCK = 20;
        const COLORS = ['#00f0f0', '#0000f0', '#f0a000', '#f0f000', '#00f000', '#a000f0', '#f00000'];
        const SHAPES = [
            [[1, 1, 1, 1]],
            [[1, 0, 0], [1, 1, 1]],
            [[0, 0, 1], [1, 1, 1]],
            [[1, 1], [1, 1]],
            [[0, 1, 1], [1, 1, 0]],
            [[0, 1, 0], [1, 1, 1]],
            [[1, 1, 0], [0, 1, 1]]
        ];

        let board = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));
        let score = 0, level = 1, lines = 0;
        let piece, pieceX, pieceY, pieceType, nextType;
        let gameLoop, baseSpeed = 500, gameRunning = false;
        let clearingLines = [], blinkCount = 0;

        // Smooth controls
        let leftPressed = false, rightPressed = false, downPressed = false;
        let moveTimer = null, moveDelay = 100;

        function getSpeed() {
            return Math.max(50, baseSpeed - (level - 1) * 40);
        }

        function newPiece() {
            pieceType = nextType !== undefined ? nextType : Math.floor(Math.random() * SHAPES.length);
            nextType = Math.floor(Math.random() * SHAPES.length);
            piece = SHAPES[pieceType].map(r => [...r]);
            pieceX = Math.floor(COLS / 2) - Math.floor(piece[0].length / 2);
            pieceY = 0;
            drawNext();
            if (collision()) gameOver();
        }

        function drawNext() {
            nextCtx.fillStyle = '#000';
            nextCtx.fillRect(0, 0, nextCanvas.width, nextCanvas.height);
            const shape = SHAPES[nextType];
            const blockSize = 15;
            const offsetX = (nextCanvas.width - shape[0].length * blockSize) / 2;
            const offsetY = (nextCanvas.height - shape.length * blockSize) / 2;
            nextCtx.fillStyle = COLORS[nextType];
            for (let y = 0; y < shape.length; y++) {
                for (let x = 0; x < shape[y].length; x++) {
                    if (shape[y][x]) {
                        nextCtx.fillRect(offsetX + x * blockSize, offsetY + y * blockSize, blockSize - 1, blockSize - 1);
                    }
                }
            }
        }

        function collision(px = pieceX, py = pieceY, p = piece) {
            for (let y = 0; y < p.length; y++) {
                for (let x = 0; x < p[y].length; x++) {
                    if (p[y][x] && (board[py + y]?.[px + x] !== 0 || px + x < 0 || px + x >= COLS || py + y >= ROWS)) return true;
                }
            }
            return false;
        }

        function merge() {
            for (let y = 0; y < piece.length; y++) {
                for (let x = 0; x < piece[y].length; x++) {
                    if (piece[y][x]) board[pieceY + y][pieceX + x] = pieceType + 1;
                }
            }
        }

        function checkLines() {
            clearingLines = [];
            for (let y = 0; y < ROWS; y++) {
                if (board[y].every(c => c !== 0)) {
                    clearingLines.push(y);
                }
            }
            if (clearingLines.length > 0) {
                blinkCount = 0;
                blinkLines();
            } else {
                newPiece();
            }
        }

        function blinkLines() {
            blinkCount++;
            draw(blinkCount % 2 === 0);
            if (blinkCount < 6) {
                setTimeout(blinkLines, 80);
            } else {
                // Actually clear lines
                for (const y of clearingLines.sort((a, b) => b - a)) {
                    board.splice(y, 1);
                    board.unshift(Array(COLS).fill(0));
                }
                const cleared = clearingLines.length;
                lines += cleared;
                score += cleared * 100 * level;

                const newLevel = Math.floor(lines / 10) + 1;
                if (newLevel > level) {
                    level = newLevel;
                    showLevelUp();
                    clearInterval(gameLoop);
                    gameLoop = setInterval(tick, getSpeed());
                }

                updateDisplay();
                clearingLines = [];
                newPiece();
            }
        }

        function showLevelUp() {
            const levelUp = document.createElement('div');
            levelUp.className = 'level-up';
            levelUp.textContent = 'LEVEL ' + level + '!';
            gameContainer.appendChild(levelUp);
            setTimeout(() => levelUp.remove(), 1000);
        }

        function updateDisplay() {
            document.getElementById('tetris-score').textContent = score;
            document.getElementById('tetris-level').textContent = level;
            document.getElementById('tetris-lines').textContent = lines;
        }

        function rotate() {
            const rotated = piece[0].map((_, i) => piece.map(r => r[i]).reverse());
            if (!collision(pieceX, pieceY, rotated)) piece = rotated;
        }

        function hardDrop() {
            while (!collision(pieceX, pieceY + 1)) pieceY++;
            merge();
            checkLines();
        }

        function drop() {
            if (clearingLines.length > 0) return;
            if (!collision(pieceX, pieceY + 1)) pieceY++;
            else { merge(); checkLines(); }
        }

        function tick() {
            if (!gameRunning || clearingLines.length > 0) return;
            drop();
            draw();
        }

        function draw(hideClearingLines = false) {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let y = 0; y < ROWS; y++) {
                for (let x = 0; x < COLS; x++) {
                    if (board[y][x]) {
                        if (hideClearingLines && clearingLines.includes(y)) {
                            ctx.fillStyle = '#fff';
                        } else {
                            ctx.fillStyle = COLORS[board[y][x] - 1];
                        }
                        ctx.fillRect(x * BLOCK, y * BLOCK, BLOCK - 1, BLOCK - 1);
                    }
                }
            }

            if (clearingLines.length === 0 && piece) {
                ctx.fillStyle = COLORS[pieceType];
                for (let y = 0; y < piece.length; y++) {
                    for (let x = 0; x < piece[y].length; x++) {
                        if (piece[y][x]) ctx.fillRect((pieceX + x) * BLOCK, (pieceY + y) * BLOCK, BLOCK - 1, BLOCK - 1);
                    }
                }
            }
        }

        function gameOver() {
            gameRunning = false;
            clearInterval(gameLoop);
            clearInterval(moveTimer);

            // Save to global highscores
            HighscoreManager.saveScore('tetris', score, `Level ${level}`);

            // Check challenge
            let challengeResult = '';
            if (HighscoreManager.challengeTarget) {
                const target = HighscoreManager.challengeTarget;
                if (score >= target.score) {
                    challengeResult = `<div style="color:#4CAF50;margin-bottom:0.5rem;">&#9876;&#65039; ${target.name} geschlagen!</div>`;
                } else {
                    challengeResult = `<div style="color:#f44336;margin-bottom:0.5rem;">&#9876;&#65039; ${target.score - score} Punkte gefehlt</div>`;
                }
                HighscoreManager.clearChallenge();
            }

            const overlay = document.createElement('div');
            overlay.className = 'tetris-overlay';
            overlay.innerHTML = `${challengeResult}<h2 style="color:#f44336">GAME OVER</h2><p style="color:#fff">Score: ${score}<br>Level: ${level}</p><button class="tetris-btn" id="tetris-restart">NOCHMAL</button>`;
            gameContainer.appendChild(overlay);
            document.getElementById('tetris-restart').addEventListener('click', () => {
                overlay.remove();
                board = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));
                score = 0; lines = 0; level = 1;
                updateDisplay();
                nextType = Math.floor(Math.random() * SHAPES.length);
                newPiece();
                gameRunning = true;
                gameLoop = setInterval(tick, getSpeed());
            });
        }

        document.querySelectorAll('#tetris-game-container [data-level]').forEach(btn => {
            btn.addEventListener('click', () => {
                level = parseInt(btn.dataset.level);
                document.getElementById('tetris-settings').style.display = 'none';
                updateDisplay();
                nextType = Math.floor(Math.random() * SHAPES.length);
                newPiece();
                gameRunning = true;
                gameLoop = setInterval(tick, getSpeed());
                moveTimer = setInterval(handleHeldKeys, 120);
            });
        });

        function handleHeldKeys() {
            if (!gameRunning || clearingLines.length > 0) return;
            if (leftPressed && !collision(pieceX - 1, pieceY)) { pieceX--; draw(); }
            if (rightPressed && !collision(pieceX + 1, pieceY)) { pieceX++; draw(); }
            if (downPressed) { drop(); draw(); }
        }

        function closeTetris() {
            clearInterval(gameLoop);
            clearInterval(moveTimer);
            gameContainer.classList.add('closing');
            setTimeout(() => gameContainer.remove(), 300);
            document.removeEventListener('keydown', tetrisKeyDown);
            document.removeEventListener('keyup', tetrisKeyUp);
        }

        document.getElementById('close-tetris').addEventListener('click', closeTetris);

        function tetrisKeyDown(e) {
            if (e.key === 'Escape') { closeTetris(); return; }
            if (!gameRunning || clearingLines.length > 0) return;
            if (e.key === 'ArrowLeft' || e.key === 'a') { leftPressed = true; if (!collision(pieceX - 1, pieceY)) { pieceX--; draw(); } }
            if (e.key === 'ArrowRight' || e.key === 'd') { rightPressed = true; if (!collision(pieceX + 1, pieceY)) { pieceX++; draw(); } }
            if (e.key === 'ArrowUp' || e.key === 'w') { rotate(); draw(); }
            if (e.key === 'ArrowDown' || e.key === 's') { downPressed = true; }
            if (e.key === ' ') { hardDrop(); draw(); }
            e.preventDefault();
        }

        function tetrisKeyUp(e) {
            if (e.key === 'ArrowLeft' || e.key === 'a') leftPressed = false;
            if (e.key === 'ArrowRight' || e.key === 'd') rightPressed = false;
            if (e.key === 'ArrowDown' || e.key === 's') downPressed = false;
        }

        document.addEventListener('keydown', tetrisKeyDown);
        document.addEventListener('keyup', tetrisKeyUp);

        draw();
    }


    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    // BREAKOUT GAME - ENHANCED WITH POWER-UPS, WORLDS, MULTI-BALL - ULTIMATE
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

    function launchBreakoutGame() {
        if (document.getElementById('breakout-game-container')) return;

        const gameContainer = document.createElement('div');
        gameContainer.id = 'breakout-game-container';
        gameContainer.innerHTML = `
            <style>
                #breakout-game-container {
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: #1a1a1a; z-index: 99999; display: flex; flex-direction: column;
                    align-items: center; justify-content: center; font-family: Arial, sans-serif;
                }
                #breakout-game-container.closing { animation: fadeOut 0.3s ease-in forwards; }
                @keyframes fadeOut { to { opacity: 0; } }
                .breakout-title { font-size: 2rem; color: #4CAF50; margin-bottom: 0.5rem; text-shadow: 0 0 10px rgba(76, 175, 80, 0.5); }
                #breakout-canvas { border: 3px solid #4CAF50; background: #000; box-shadow: 0 0 20px rgba(0,0,0,0.5); cursor: none; }
                .breakout-info { display: flex; gap: 1.5rem; margin-top: 1rem; color: #fff; font-size: 0.9rem; align-items: center; }
                .breakout-stat { text-align: center; }
                .breakout-stat-label { color: #888; font-size: 0.7rem; text-transform: uppercase; }
                .breakout-stat-value { color: #4CAF50; font-size: 1.2rem; font-weight: bold; }
                .breakout-controls-hint { margin-top: 0.5rem; color: #666; font-size: 0.7rem; }
                .close-breakout { position: absolute; top: 1rem; right: 1rem; background: none; border: 2px solid #f44336; color: #f44336; padding: 0.5rem 1rem; cursor: pointer; border-radius: 4px; z-index: 100; }
                .close-breakout:hover { background: #f44336; color: #fff; }
                .breakout-overlay { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(34, 34, 34, 0.95); padding: 2rem; border-radius: 12px; text-align: center; border: 2px solid #4CAF50; z-index: 20; min-width: 300px; backdrop-filter: blur(5px); }
                .breakout-overlay h2 { color: #4CAF50; margin-bottom: 1.5rem; font-size: 1.8rem; }
                .breakout-btn { background: #4CAF50; border: none; color: #fff; padding: 0.6rem 1.5rem; cursor: pointer; border-radius: 5px; margin: 0.3rem; font-size: 0.9rem; transition: transform 0.1s; }
                .breakout-btn:hover { background: #45a049; transform: scale(1.05); }
                .world-action-btn { background: #333; border: 1px solid #555; color: #fff; padding: 0.4rem 0.8rem; border-radius: 4px; cursor: pointer; font-size: 0.8rem; margin-left: 1rem; }
                .world-action-btn:hover { border-color: #4CAF50; color: #4CAF50; }
                
                .world-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.8rem; margin: 1rem 0; max-width: 800px; }
                .world-btn { background: #333; border: 2px solid #555; color: #fff; padding: 1rem 0.5rem; cursor: pointer; border-radius: 8px; transition: all 0.2s; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 80px; }
                .world-btn:hover { border-color: #4CAF50; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
                .world-btn.active { border-color: #4CAF50; background: #2e3b2f; }
                .world-icon { font-size: 1.5rem; margin-bottom: 0.3rem; }
                .world-name { font-size: 0.8rem; font-weight: bold; }
                
                .level-banner { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #FFD700; font-size: 3rem; font-weight: bold; animation: levelBanner 2s ease-out forwards; pointer-events: none; text-shadow: 0 0 20px #FFD700, 0 0 40px #FFD700; z-index: 15; width: 100%; text-align: center; }
                @keyframes levelBanner { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 15% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); } 85% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 100% { opacity: 0; transform: translate(-50%, -70%) scale(1.2); } }
                
                .powerup-info { position: absolute; top: 100px; left: 50%; transform: translateX(-50%); color: #fff; font-size: 1.2rem; font-weight: bold; animation: powerupPop 0.8s ease-out forwards; z-index: 15; text-shadow: 0 2px 4px rgba(0,0,0,0.8); }
                @keyframes powerupPop { 0% { opacity: 0; transform: translateX(-50%) translateY(20px); } 20% { opacity: 1; transform: translateX(-50%) translateY(0); } 100% { opacity: 0; transform: translateX(-50%) translateY(-30px); } }
            </style>
            
            <button class="close-breakout" id="close-breakout">ESC</button>
            <h1 class="breakout-title">BREAKOUT</h1>
            
            <!-- Width increased to 600px -->
            <canvas id="breakout-canvas" width="600" height="450"></canvas>
            
            <div class="breakout-info">
                <div class="breakout-stat"><div class="breakout-stat-label">Score</div><div class="breakout-stat-value" id="breakout-score">0</div></div>
                <div class="breakout-stat"><div class="breakout-stat-label">Welt</div><div class="breakout-stat-value" id="breakout-world">1</div></div>
                <div class="breakout-stat"><div class="breakout-stat-label">Level</div><div class="breakout-stat-value" id="breakout-level">1</div></div>
                <div class="breakout-stat"><div class="breakout-stat-label">Leben</div><div class="breakout-stat-value" id="breakout-lives">3</div></div>
                <div class="breakout-stat"><div class="breakout-stat-label">B&#228;lle</div><div class="breakout-stat-value" id="breakout-balls">1</div></div>
                <button class="world-action-btn" id="open-world-menu">&#127757; WELT WECHSELN</button>
            
            <div class="breakout-controls-hint">Maus oder Pfeiltasten zum Bewegen â€¢ ESC zum Beenden</div>
            
            <div class="breakout-overlay" id="breakout-menu">
                <h2>&#127757; WELT W&#196;HLEN</h2>
                <div class="world-grid">
                    <button class="world-btn" data-world="1"><span class="world-icon">&#127795;</span><span class="world-name">Classic</span></button>
                    <button class="world-btn" data-world="2"><span class="world-icon">&#127807;</span><span class="world-name">Nature</span></button>
                    <button class="world-btn" data-world="3"><span class="world-icon">&#127754;</span><span class="world-name">Ocean</span></button>
                    <button class="world-btn" data-world="4"><span class="world-icon">&#127755;</span><span class="world-name">Volcanic</span></button>
                    <button class="world-btn" data-world="5"><span class="world-icon">&#128737;</span><span class="world-name">Iron</span></button>
                    <button class="world-btn" data-world="6"><span class="world-icon">&#10052;</span><span class="world-name">Glacier</span></button>
                    <button class="world-btn" data-world="7"><span class="world-icon">&#128302;</span><span class="world-name">Neon</span></button>
                    <button class="world-btn" data-world="8"><span class="world-icon">&#128126;</span><span class="world-name">Retro</span></button>
                    <button class="world-btn" data-world="9"><span class="world-icon">&#127744;</span><span class="world-name">Chaos</span></button>
                    <button class="world-btn" data-world="10"><span class="world-icon">&#9760;</span><span class="world-name">Impossible</span></button>
                </div>
                <button class="breakout-btn" id="resume-btn" style="display:none; margin-top:1rem; background:#666;">ABBRECHEN</button>
            </div>
        `;

        document.body.appendChild(gameContainer);
        gameContainer.appendChild(createGameSwitcher('breakout'));

        const canvas = document.getElementById('breakout-canvas');
        const ctx = canvas.getContext('2d');

        // Game state
        let paddleW = 80, paddleH = 12;
        let paddleX = (canvas.width - paddleW) / 2;
        let balls = [];
        let powerups = [];
        let score = 0, lives = 3, world = 1, level = 1;
        let gameLoop, gameRunning = false;
        let bricks = [];
        // Adjusted brick size for 600px width (10 columns)
        // 600px - 20px padding = 580px / 10 = 58px per block space
        // block width 54px + 4px gap
        const brickCols = 10;
        const brickGap = 4;
        const brickW = (canvas.width - 20 - (brickCols - 1) * brickGap) / brickCols; // ~54px
        const brickH = 15;
        const brickTop = 60, brickLeft = 10;

        // Power-up types
        const POWERUP_TYPES = {
            SPLIT: { color: '#FF00FF', icon: '\u26A1', text: 'SPLIT BALL', effect: 'split' },
            MULTI: { color: '#00FFFF', icon: '\u2795', text: 'MULTI BALL', effect: 'multi' },
            LIFE: { color: '#00FF00', icon: '\u2764\uFE0F', text: 'EXTRA LIFE', effect: 'life' },
            BIG: { color: '#FFA500', icon: '\u2194\uFE0F', text: 'BIG PADDLE', effect: 'paddle' }
        };

        // Worlds Config
        const WORLDS = {
            1: { name: 'Classic', color: '#4CAF50', levels: 4, pattern: 'classic' },
            2: { name: 'Nature', color: '#8BC34A', levels: 4, pattern: 'organic' },
            3: { name: 'Ocean', color: '#03A9F4', levels: 4, pattern: 'waves' },
            4: { name: 'Volcanic', color: '#FF5722', levels: 4, pattern: 'pyramid' },
            5: { name: 'Iron', color: '#9E9E9E', levels: 4, pattern: 'fortress' },
            6: { name: 'Glacier', color: '#00BCD4', levels: 4, pattern: 'ice' },
            7: { name: 'Neon', color: '#E91E63', levels: 4, pattern: 'neon' },
            8: { name: 'Retro', color: '#FFC107', levels: 4, pattern: 'retro' },
            9: { name: 'Chaos', color: '#9C27B0', levels: 4, pattern: 'random' },
            10: { name: 'Impossible', color: '#F44336', levels: 4, pattern: 'hard' }
        };

        function createBall(x, y, dx, dy) {
            return { x, y, dx, dy, speed: 4.5 + (world * 0.3) + (level * 0.2) };
        }

        function initLevel() {
            const worldInfo = WORLDS[world];
            // Increase rows for higher worlds
            const baseRows = 4 + Math.floor((world - 1) / 2); // 4 to 8 rows
            const rows = Math.min(baseRows + Math.floor((level - 1) / 2), 12);

            bricks = [];
            for (let r = 0; r < rows; r++) {
                bricks[r] = [];
                for (let c = 0; c < brickCols; c++) {
                    let status = 1; // 1=active, 0=broken, -1=indestructible, 2=hard

                    // Pattern Generation Logic
                    const p = worldInfo.pattern;

                    if (p === 'classic') {
                        if (level % 2 === 0 && (r + c) % 2 === 0) status = 0;
                    }
                    else if (p === 'organic') {
                        if (Math.sin(r * c) > 0.5) status = 0;
                        if (r === 0 && c % 3 === 0) status = 2; // Hard blocks
                    }
                    else if (p === 'waves') {
                        if (r % 2 === 0 && c % 2 !== 0) status = 0;
                    }
                    else if (p === 'pyramid') {
                        if (c < r || c >= brickCols - r) status = 0;
                        if (level > 2 && r === 0) status = 2;
                    }
                    else if (p === 'fortress') {
                        if (r % 2 === 0 && c % 2 === 0) status = 2; // Lots of hard blocks
                        if (level > 2 && r === rows - 1 && c % 3 === 0) status = -1; // Indestructible
                    }
                    else if (p === 'ice') {
                        if (Math.random() > 0.8) status = 2;
                        if (level > 2 && r % 3 === 0) status = -1;
                    }
                    else if (p === 'neon') {
                        if ((c + r) % 3 === 0) status = 0;
                    }
                    else if (p === 'retro') {
                        if (r < 2) status = 2;
                    }
                    else if (p === 'random') {
                        if (Math.random() > 0.3) status = Math.random() > 0.5 ? 1 : 0;
                    }
                    else if (p === 'hard') {
                        status = 2;
                        if (Math.random() > 0.8) status = -1;
                    }

                    // Ensure at least some blocks are breakable
                    if (status === -1 && Math.random() > 0.3) status = 2;

                    bricks[r][c] = {
                        x: 0, y: 0,
                        status: status,
                        maxHits: status === 2 ? 2 : 1
                    };
                }
            }

            balls = [createBall(canvas.width / 2, canvas.height - 50, (Math.random() - 0.5) * 4, -5)];
            powerups = [];
            paddleX = (canvas.width - paddleW) / 2;
            // Paddle shrinks in higher worlds
            paddleW = Math.max(50, 80 - (world * 3));
        }

        function drawBricks() {
            const colors = [
                '#f44336', '#e91e63', '#9c27b0', '#673ab7',
                '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
                '#009688', '#4caf50', '#8bc34a', '#cddc39'
            ];

            for (let r = 0; r < bricks.length; r++) {
                for (let c = 0; c < bricks[r].length; c++) {
                    const b = bricks[r][c];
                    if (b.status !== 0) {
                        const bX = c * (brickW + brickGap) + brickLeft;
                        const bY = r * (brickH + brickGap) + brickTop;
                        b.x = bX; b.y = bY;

                        if (b.status === -1) {
                            // Indestructible
                            ctx.fillStyle = '#555';
                            ctx.strokeStyle = '#888';
                            ctx.lineWidth = 2;
                            ctx.fillRect(bX, bY, brickW, brickH);
                            ctx.strokeRect(bX, bY, brickW, brickH);

                            // Rivet details
                            ctx.fillStyle = '#aaa';
                            ctx.beginPath(); ctx.arc(bX + 4, bY + 4, 2, 0, Math.PI * 2); ctx.fill();
                            ctx.beginPath(); ctx.arc(bX + brickW - 4, bY + 4, 2, 0, Math.PI * 2); ctx.fill();
                            ctx.beginPath(); ctx.arc(bX + 4, bY + brickH - 4, 2, 0, Math.PI * 2); ctx.fill();
                            ctx.beginPath(); ctx.arc(bX + brickW - 4, bY + brickH - 4, 2, 0, Math.PI * 2); ctx.fill();

                        } else {
                            // Normal or Hard
                            ctx.fillStyle = b.status === 2 ? '#DDDDDD' : colors[(r + world) % colors.length];
                            ctx.fillRect(bX, bY, brickW, brickH);

                            // Shine effect
                            ctx.fillStyle = 'rgba(255,255,255,0.2)';
                            ctx.fillRect(bX, bY, brickW, brickH / 2);

                            if (b.status === 2) {
                                // Hard block indicator
                                ctx.strokeStyle = '#000';
                                ctx.lineWidth = 1;
                                ctx.strokeRect(bX + 2, bY + 2, brickW - 4, brickH - 4);
                            }
                        }
                    }
                }
            }
        }

        function spawnPowerup(x, y) {
            if (Math.random() > 0.12) return; // 12% chance
            const keys = Object.keys(POWERUP_TYPES);
            const key = keys[Math.floor(Math.random() * keys.length)];
            powerups.push({ x, y, type: key, dy: 2.5 });
        }

        function applyPowerup(key) {
            const p = POWERUP_TYPES[key];
            const info = document.createElement('div');
            info.className = 'powerup-info';
            info.innerHTML = `${p.icon} ${p.text}`;
            info.style.color = p.color;
            gameContainer.appendChild(info);
            setTimeout(() => info.remove(), 1000);

            if (p.effect === 'split') {
                const newBalls = [];
                balls.forEach(b => {
                    newBalls.push(b);
                    newBalls.push(createBall(b.x, b.y, b.dx * 1.2, b.dy)); // Slightly different angles
                    newBalls.push(createBall(b.x, b.y, b.dx * 0.8, b.dy));
                });
                balls = newBalls;
            } else if (p.effect === 'multi') {
                for (let i = 0; i < 3; i++) {
                    balls.push(createBall(paddleX + paddleW / 2, canvas.height - 50, (Math.random() - 0.5) * 8, -5));
                }
            } else if (p.effect === 'life') {
                lives++;
                updateDisplay();
            } else if (p.effect === 'paddle') {
                paddleW += 30;
                setTimeout(() => paddleW -= 30, 8000); // Temporary
            }
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('breakout-score').textContent = score;
            document.getElementById('breakout-world').textContent = world;
            document.getElementById('breakout-level').textContent = level;
            document.getElementById('breakout-lives').textContent = lives;
            document.getElementById('breakout-balls').textContent = balls.length;
        }

        function showLevelBanner(text) {
            const banner = document.createElement('div');
            banner.className = 'level-banner';
            banner.innerHTML = text || `<span style="font-size:1.5rem">WELT ${world}</span><br>LEVEL ${level}`;
            gameContainer.appendChild(banner);
            setTimeout(() => banner.remove(), 2000);
        }

        function nextLevel() {
            level++;
            if (level > WORLDS[world].levels) {
                level = 1;
                world++;
                if (world > 10) {
                    showVictory();
                    return;
                }
            }
            updateDisplay();
            showLevelBanner();
            initLevel();
            // Pause briefly
            gameRunning = false;
            setTimeout(() => gameRunning = true, 1500);
        }

        function showVictory() {
            gameRunning = false;
            HighscoreManager.saveScore('breakout', score, `Welt ${world} (Gewonnen)`);
            const overlay = document.createElement('div');
            overlay.className = 'breakout-overlay';
            overlay.innerHTML = `<h2 style="color:#FFD700">ðŸ† LEGENDARY!</h2><p style="color:#fff">Du hast alle 10 Welten bezwungen!<br>Finaler Score: ${score}</p><button class="breakout-btn" id="breakout-restart">NEUES SPIEL</button>`;
            gameContainer.appendChild(overlay);
            document.getElementById('breakout-restart').addEventListener('click', restart);
        }

        function showGameOver() {
            gameRunning = false;
            HighscoreManager.saveScore('breakout', score, `Welt ${world} Level ${level}`);
            const overlay = document.createElement('div');
            overlay.className = 'breakout-overlay';
            overlay.style.borderColor = '#f44336';
            overlay.innerHTML = `<h2 style="color:#f44336">GAME OVER</h2><p style="color:#fff">Score: ${score}<br>Welt ${world} - Level ${level}</p><button class="breakout-btn" id="breakout-restart">NOCHMAL</button>`;
            gameContainer.appendChild(overlay);
            document.getElementById('breakout-restart').addEventListener('click', restart);
        }

        function restart() {
            document.querySelectorAll('.breakout-overlay').forEach(o => o.remove());
            score = 0; lives = 3; level = 1;
            // Reset to World 1 on full restart? Or current world? Let's do current.
            // world = 1; 
            updateDisplay();
            initLevel();
            showLevelBanner();
            gameRunning = true;
        }

        function update() {
            if (!gameRunning) return;

            // Updated collision logic for smoother physics
            for (let i = balls.length - 1; i >= 0; i--) {
                let b = balls[i];
                b.x += b.dx;
                b.y += b.dy;

                // Walls
                if (b.x < 6 || b.x > canvas.width - 6) b.dx = -b.dx;
                if (b.y < 6) b.dy = -b.dy;

                // Paddle
                if (b.y > canvas.height - paddleH - 12 && b.y < canvas.height - 2 &&
                    b.x > paddleX - 5 && b.x < paddleX + paddleW + 5) {

                    b.dy = -Math.abs(b.dy);
                    // Add spin based on where hit
                    const hitPoint = b.x - (paddleX + paddleW / 2);
                    b.dx = hitPoint * 0.15; // Sharper angles

                    // Min vertical speed to prevent horizontal loops
                    if (Math.abs(b.dy) < 3) b.dy = b.dy < 0 ? -3 : 3;
                }

                // Floor
                if (b.y > canvas.height + 10) {
                    balls.splice(i, 1);
                }

                // Bricks (Improved collision)
                let hitIdx = -1;
                // Optimization: Only check bricks near ball? No, simple loop for now
                for (let r = 0; r < bricks.length; r++) {
                    for (let c = 0; c < bricks[r].length; c++) {
                        let brick = bricks[r][c];
                        if (brick.status !== 0) {
                            if (b.x > brick.x && b.x < brick.x + brickW &&
                                b.y > brick.y && b.y < brick.y + brickH) {

                                // Standard reflection
                                // Determine closest side? Simplified for now: just flip Y
                                // To do proper: check previous position
                                const prevY = b.y - b.dy;
                                if (prevY < brick.y || prevY > brick.y + brickH) b.dy = -b.dy;
                                else b.dx = -b.dx;

                                if (brick.status > 0) {
                                    brick.status--;
                                    score += (10 + world * 2) * (brick.status === 0 ? 1 : 0.5);
                                    if (brick.status === 0) spawnPowerup(brick.x + brickW / 2, brick.y + brickH);
                                }
                                // Indestructible bricks just bounce
                                updateDisplay();
                                gotoNextBall = true;
                                break;
                            }
                        }
                    }
                    if (typeof gotoNextBall !== 'undefined') { delete gotoNextBall; break; }
                }
            }

            // Powerups
            for (let i = powerups.length - 1; i >= 0; i--) {
                let p = powerups[i];
                p.y += p.dy;
                // Hit paddle?
                if (p.y > canvas.height - paddleH - 12 && p.y < canvas.height &&
                    p.x > paddleX && p.x < paddleX + paddleW) {
                    applyPowerup(p.type);
                    powerups.splice(i, 1);
                } else if (p.y > canvas.height) {
                    powerups.splice(i, 1);
                }
            }

            // Life lost
            if (balls.length === 0) {
                lives--;
                updateDisplay();
                if (lives <= 0) showGameOver();
                else balls = [createBall(paddleX + paddleW / 2, canvas.height - 40, 0, -5)];
            }

            // Level Check
            let allCleared = true;
            for (let r = 0; r < bricks.length; r++) {
                for (let c = 0; c < bricks[r].length; c++) {
                    if (bricks[r][c].status > 0) { allCleared = false; break; }
                }
            }
            if (allCleared) nextLevel();

            draw();
        }

        function draw() {
            // Trail effect? No, simpler for performance
            ctx.fillStyle = '#111';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drawBricks();

            // Paddle
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#4CAF50';
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(paddleX, canvas.height - paddleH - 5, paddleW, paddleH);
            ctx.shadowBlur = 0;

            // Balls
            balls.forEach(b => {
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.arc(b.x, b.y, 6, 0, Math.PI * 2);
                ctx.fill();
            });

            // Powerups
            powerups.forEach(p => {
                const type = POWERUP_TYPES[p.type];
                ctx.shadowBlur = 5;
                ctx.shadowColor = type.color;
                ctx.fillStyle = type.color;
                ctx.beginPath(); ctx.arc(p.x, p.y, 9, 0, Math.PI * 2); ctx.fill();
                ctx.shadowBlur = 0;
                ctx.fillStyle = '#000';
                ctx.font = '10px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(type.icon, p.x, p.y + 3);
            });
        }

        // --- Controls ---

        // Mouse Move
        canvas.addEventListener('mousemove', (e) => {
            if (!gameRunning) return;
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            paddleX = mouseX - paddleW / 2;

            // Clamp
            if (paddleX < 0) paddleX = 0;
            if (paddleX > canvas.width - paddleW) paddleX = canvas.width - paddleW;
        });

        // Touch (basic)
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (!gameRunning) return;
            const rect = canvas.getBoundingClientRect();
            const touchX = e.touches[0].clientX - rect.left;
            paddleX = touchX - paddleW / 2;
            if (paddleX < 0) paddleX = 0;
            if (paddleX > canvas.width - paddleW) paddleX = canvas.width - paddleW;
        }, { passive: false });

        // World Menu Interaction
        document.querySelectorAll('.world-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                world = parseInt(btn.dataset.world);
                level = 1;
                document.getElementById('breakout-menu').style.display = 'none';
                document.getElementById('breakout-menu').querySelector('.breakout-overlay')?.remove();

                // Reset resume button state
                const resumeBtn = document.getElementById('resume-btn');
                if (resumeBtn) resumeBtn.style.display = 'none';

                initLevel();
                showLevelBanner();
                gameRunning = true;
                if (!gameLoop) gameLoop = setInterval(update, 16);
            });
        });

        // Open World Menu Button
        document.getElementById('open-world-menu').addEventListener('click', () => {
            gameRunning = false;
            const menu = document.getElementById('breakout-menu');
            menu.style.display = 'block';

            // Show resume button
            const resumeBtn = document.getElementById('resume-btn');
            if (resumeBtn) {
                resumeBtn.style.display = 'inline-block';
                resumeBtn.onclick = () => {
                    menu.style.display = 'none';
                    gameRunning = true;
                };
            }
        });

        // Keyboard
        let leftPressed = false, rightPressed = false;
        document.addEventListener('keydown', breakoutKeyDown);
        document.addEventListener('keyup', breakoutKeyUp);

        // Keyboard loop
        let keyInterval = setInterval(() => {
            if (!gameRunning) return;
            if (leftPressed && paddleX > 0) paddleX -= 9;
            if (rightPressed && paddleX < canvas.width - paddleW) paddleX += 9;
        }, 16);

        function breakoutKeyDown(e) {
            if (e.key === 'Escape') { closeBreakout(); return; }
            if (e.key === 'ArrowLeft' || e.key === 'a') leftPressed = true;
            if (e.key === 'ArrowRight' || e.key === 'd') rightPressed = true;
        }
        function breakoutKeyUp(e) {
            if (e.key === 'ArrowLeft' || e.key === 'a') leftPressed = false;
            if (e.key === 'ArrowRight' || e.key === 'd') rightPressed = false;
        }

        function closeBreakout() {
            clearInterval(gameLoop);
            clearInterval(keyInterval);
            gameContainer.classList.add('closing');
            setTimeout(() => gameContainer.remove(), 300);
            document.removeEventListener('keydown', breakoutKeyDown);
            document.removeEventListener('keyup', breakoutKeyUp);
        }
        document.getElementById('close-breakout').addEventListener('click', closeBreakout);

        // Start initial state
        draw();
    }

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    // 2048 GAME
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

    function launch2048Game() {
        if (document.getElementById('game-2048-container')) return;

        const gameContainer = document.createElement('div');
        gameContainer.id = 'game-2048-container';
        gameContainer.innerHTML = `
            <style>
                #game-2048-container {
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: #1a1a1a; z-index: 99999; display: flex; flex-direction: column;
                    align-items: center; justify-content: center; font-family: Arial, sans-serif;
                }
                #game-2048-container.closing { animation: fadeOut 0.3s ease-in forwards; }
                @keyframes fadeOut { to { opacity: 0; } }
                .g2048-title { font-size: 2.5rem; color: #EDC22E; margin-bottom: 0.5rem; font-weight: bold; }
                .g2048-info { display: flex; gap: 1rem; margin-bottom: 1rem; }
                .g2048-score-box { background: #bbada0; padding: 0.5rem 1.5rem; border-radius: 6px; text-align: center; }
                .g2048-score-label { color: #eee4da; font-size: 0.7rem; text-transform: uppercase; }
                .g2048-score-value { color: #fff; font-size: 1.5rem; font-weight: bold; }
                .g2048-board { background: #bbada0; padding: 10px; border-radius: 8px; display: grid; grid-template-columns: repeat(4, 80px); gap: 10px; }
                .g2048-tile { width: 80px; height: 80px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.8rem; transition: transform 0.1s ease; }
                .g2048-tile.new { animation: tileAppear 0.15s ease; }
                .g2048-tile.merged { animation: tileMerge 0.15s ease; }
                @keyframes tileAppear { from { transform: scale(0); } to { transform: scale(1); } }
                @keyframes tileMerge { 0% { transform: scale(1); } 50% { transform: scale(1.15); } 100% { transform: scale(1); } }
                .g2048-controls { margin-top: 1rem; color: #666; font-size: 0.75rem; }
                .close-2048 { position: absolute; top: 1rem; right: 1rem; background: none; border: 2px solid #f44336; color: #f44336; padding: 0.5rem 1rem; cursor: pointer; border-radius: 4px; }
                .close-2048:hover { background: #f44336; color: #fff; }
                .g2048-overlay { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(34,34,34,0.95); padding: 2rem 3rem; border-radius: 10px; text-align: center; border: 3px solid #EDC22E; z-index: 10; }
                .g2048-overlay h2 { color: #EDC22E; margin-bottom: 1rem; font-size: 2rem; }
                .g2048-btn { background: #8f7a66; border: none; color: #fff; padding: 0.8rem 2rem; cursor: pointer; border-radius: 5px; margin: 0.5rem; font-size: 1rem; }
                .g2048-btn:hover { background: #9f8b77; }
            </style>
            <button class="close-2048" id="close-2048">ESC</button>
            <h1 class="g2048-title">2048</h1>
            <div class="g2048-info">
                <div class="g2048-score-box">
                    <div class="g2048-score-label">Score</div>
                    <div class="g2048-score-value" id="g2048-score">0</div>
                </div>
                <div class="g2048-score-box">
                    <div class="g2048-score-label">Best</div>
                    <div class="g2048-score-value" id="g2048-best">0</div>
                </div>
            </div>
            <div class="g2048-board" id="g2048-board"></div>
            <div class="g2048-controls">Pfeiltasten oder WASD zum Bewegen</div>
        `;

        document.body.appendChild(gameContainer);
        gameContainer.appendChild(createGameSwitcher('2048'));

        const TILE_COLORS = {
            0: '#cdc1b4', 2: '#eee4da', 4: '#ede0c8', 8: '#f2b179', 16: '#f59563',
            32: '#f67c5f', 64: '#f65e3b', 128: '#edcf72', 256: '#edcc61',
            512: '#edc850', 1024: '#edc53f', 2048: '#edc22e'
        };
        const TEXT_COLORS = { 2: '#776e65', 4: '#776e65' };

        let grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        let score = 0;
        let best = parseInt(localStorage.getItem('2048best')) || 0;
        let gameOver = false;
        let won = false;

        document.getElementById('g2048-best').textContent = best;
        let prevGrid = null;
        let newTilePos = null;

        function addRandomTile() {
            const empty = [];
            for (let r = 0; r < 4; r++) {
                for (let c = 0; c < 4; c++) {
                    if (grid[r][c] === 0) empty.push({ r, c });
                }
            }
            if (empty.length > 0) {
                const pos = empty[Math.floor(Math.random() * empty.length)];
                grid[pos.r][pos.c] = Math.random() < 0.9 ? 2 : 4;
                newTilePos = pos;
            }
        }

        function render() {
            const board = document.getElementById('g2048-board');
            board.innerHTML = '';
            for (let r = 0; r < 4; r++) {
                for (let c = 0; c < 4; c++) {
                    const val = grid[r][c];
                    const tile = document.createElement('div');
                    tile.className = 'g2048-tile';

                    // Animation classes
                    if (newTilePos && newTilePos.r === r && newTilePos.c === c) {
                        tile.classList.add('new');
                    } else if (prevGrid && prevGrid[r][c] !== 0 && prevGrid[r][c] !== val && val !== 0) {
                        tile.classList.add('merged');
                    }

                    tile.style.background = TILE_COLORS[val] || '#3c3a32';
                    tile.style.color = TEXT_COLORS[val] || '#f9f6f2';
                    tile.style.fontSize = val >= 1024 ? '1.3rem' : val >= 128 ? '1.5rem' : '1.8rem';
                    tile.textContent = val || '';
                    board.appendChild(tile);
                }
            }
            document.getElementById('g2048-score').textContent = score;
            prevGrid = grid.map(row => [...row]);
            newTilePos = null;
        }

        function slide(row) {
            let arr = row.filter(v => v !== 0);
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] === arr[i + 1]) {
                    arr[i] *= 2;
                    score += arr[i];
                    arr.splice(i + 1, 1);
                }
            }
            while (arr.length < 4) arr.push(0);
            return arr;
        }

        function move(dir) {
            if (gameOver) return;

            let moved = false;
            const oldGrid = JSON.stringify(grid);

            if (dir === 'left') {
                for (let r = 0; r < 4; r++) grid[r] = slide(grid[r]);
            } else if (dir === 'right') {
                for (let r = 0; r < 4; r++) grid[r] = slide(grid[r].reverse()).reverse();
            } else if (dir === 'up') {
                for (let c = 0; c < 4; c++) {
                    let col = [grid[0][c], grid[1][c], grid[2][c], grid[3][c]];
                    col = slide(col);
                    for (let r = 0; r < 4; r++) grid[r][c] = col[r];
                }
            } else if (dir === 'down') {
                for (let c = 0; c < 4; c++) {
                    let col = [grid[3][c], grid[2][c], grid[1][c], grid[0][c]];
                    col = slide(col);
                    grid[3][c] = col[0]; grid[2][c] = col[1]; grid[1][c] = col[2]; grid[0][c] = col[3];
                }
            }

            if (JSON.stringify(grid) !== oldGrid) {
                addRandomTile();
                render();

                if (score > best) {
                    best = score;
                    localStorage.setItem('2048best', best);
                    document.getElementById('g2048-best').textContent = best;
                }

                // Check win
                if (!won && grid.some(row => row.some(v => v === 2048))) {
                    won = true;
                    showWin();
                }

                // Check game over
                if (isGameOver()) {
                    showGameOver();
                }
            }
        }

        function isGameOver() {
            for (let r = 0; r < 4; r++) {
                for (let c = 0; c < 4; c++) {
                    if (grid[r][c] === 0) return false;
                    if (c < 3 && grid[r][c] === grid[r][c + 1]) return false;
                    if (r < 3 && grid[r][c] === grid[r + 1][c]) return false;
                }
            }
            return true;
        }

        function showWin() {
            const overlay = document.createElement('div');
            overlay.className = 'g2048-overlay';
            overlay.innerHTML = `<h2>2048 ERREICHT!</h2><p style="color:#fff">Du kannst weiterspielen!</p><button class="g2048-btn" id="g2048-continue">WEITERSPIELEN</button>`;
            gameContainer.appendChild(overlay);
            document.getElementById('g2048-continue').addEventListener('click', () => overlay.remove());
        }

        function showGameOver() {
            gameOver = true;

            // Find highest tile for difficulty label
            const maxTile = Math.max(...grid.flat());
            HighscoreManager.saveScore('2048', score, `Max: ${maxTile}`);

            // Check challenge
            let challengeResult = '';
            if (HighscoreManager.challengeTarget) {
                const target = HighscoreManager.challengeTarget;
                if (score >= target.score) {
                    challengeResult = `<div style="color:#4CAF50;margin-bottom:0.5rem;">&#9876;&#65039; ${target.name} geschlagen!</div>`;
                } else {
                    challengeResult = `<div style="color:#f44336;margin-bottom:0.5rem;">&#9876;&#65039; ${target.score - score} Punkte gefehlt</div>`;
                }
                HighscoreManager.clearChallenge();
            }

            const overlay = document.createElement('div');
            overlay.className = 'g2048-overlay';
            overlay.style.borderColor = '#f44336';
            overlay.innerHTML = `${challengeResult}<h2 style="color:#f44336">GAME OVER</h2><p style="color:#fff">Score: ${score}</p><button class="g2048-btn" id="g2048-restart">NOCHMAL</button>`;
            gameContainer.appendChild(overlay);
            document.getElementById('g2048-restart').addEventListener('click', restart);
        }

        function restart() {
            document.querySelectorAll('.g2048-overlay').forEach(o => o.remove());
            grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
            score = 0;
            gameOver = false;
            won = false;
            addRandomTile();
            addRandomTile();
            render();
        }

        function close2048() {
            gameContainer.classList.add('closing');
            setTimeout(() => gameContainer.remove(), 300);
            document.removeEventListener('keydown', handle2048Keys);
        }

        document.getElementById('close-2048').addEventListener('click', close2048);

        function handle2048Keys(e) {
            if (e.key === 'Escape') { close2048(); return; }
            if (e.key === 'ArrowLeft' || e.key === 'a') { move('left'); e.preventDefault(); }
            if (e.key === 'ArrowRight' || e.key === 'd') { move('right'); e.preventDefault(); }
            if (e.key === 'ArrowUp' || e.key === 'w') { move('up'); e.preventDefault(); }
            if (e.key === 'ArrowDown' || e.key === 's') { move('down'); e.preventDefault(); }
        }

        document.addEventListener('keydown', handle2048Keys);

        // Start game
        addRandomTile();
        addRandomTile();
        render();
    }
});
