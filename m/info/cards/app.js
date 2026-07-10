document.addEventListener('DOMContentLoaded', () => {
    const cardsGrid = document.getElementById('cards-grid');
    const categoryFilters = document.getElementById('category-filters');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const resetBtn = document.getElementById('reset-btn');
    const totalCardsEl = document.getElementById('total-cards');
    const studiedCardsEl = document.getElementById('studied-cards');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    // Navigation elements
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentIndexEl = document.getElementById('current-index');
    const totalFilteredEl = document.getElementById('total-filtered');

    // Music elements
    const musicBtn = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    let isMusicPlaying = false;

    let currentCards = [...flashcardsDB];
    let studiedSet = new Set();
    let currentCategory = 'all';
    let currentIndex = 0;

    // Inicializar
    function init() {
        renderCategoryFilters();
        updateStats();
        renderCurrentCard();
        setupMusicToggle();
    }

    // Configurar música
    function setupMusicToggle() {
        if (!musicBtn || !bgMusic) return;
        
        bgMusic.volume = 0.3; // volume agradável

        const setMusicOn = () => {
            isMusicPlaying = true;
            musicBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
                Música: ON
            `;
            musicBtn.style.color = '#10b981';
            musicBtn.style.borderColor = '#10b981';
        };

        const setMusicOff = () => {
            isMusicPlaying = false;
            musicBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
                Música: OFF
            `;
            musicBtn.style.color = 'var(--text-muted)';
            musicBtn.style.borderColor = 'var(--border-color)';
        };

        // Tentar tocar automaticamente no carregamento
        const tryAutoplay = () => {
            bgMusic.play().then(() => {
                setMusicOn();
            }).catch(e => {
                console.log('Autoplay bloqueado pelo navegador. Aguardando interação do usuário.', e);
                // Aguarda o primeiro clique na tela para iniciar
                document.body.addEventListener('click', function startOnFirstClick() {
                    if (!isMusicPlaying) {
                        bgMusic.play().then(() => {
                            setMusicOn();
                        }).catch(err => console.log('Erro ao iniciar áudio:', err));
                    }
                    document.body.removeEventListener('click', startOnFirstClick);
                }, { once: true });
            });
        };

        tryAutoplay();
        
        musicBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita conflito com o clique do body
            if (isMusicPlaying) {
                bgMusic.pause();
                setMusicOff();
            } else {
                bgMusic.play().then(() => {
                    setMusicOn();
                });
            }
        });
    }

    // Renderizar categorias
    function renderCategoryFilters() {
        const categories = Object.keys(categoryColors);
        
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'cat-pill';
            btn.dataset.category = cat;
            btn.textContent = cat;
            
            // Aplicar cores com base na categoria
            const colors = categoryColors[cat];
            btn.style.color = colors.primary;
            btn.style.borderColor = colors.primary;
            
            btn.addEventListener('click', () => {
                // Remover 'active' de todos
                document.querySelectorAll('.cat-pill').forEach(p => {
                    p.classList.remove('active');
                    p.style.background = 'transparent';
                    p.style.color = p.dataset.category === 'all' ? 'var(--text-primary)' : categoryColors[p.dataset.category]?.primary;
                });
                
                // Adicionar 'active' no atual
                btn.classList.add('active');
                if (cat !== 'all') {
                    btn.style.background = colors.bg;
                    btn.style.color = colors.primary;
                } else {
                    btn.style.background = 'rgba(255,255,255,0.1)';
                    btn.style.color = 'var(--text-primary)';
                }
                
                currentCategory = cat;
                filterCards();
            });
            
            categoryFilters.appendChild(btn);
        });

        // Estilizar botão 'all'
        const allBtn = document.querySelector('.cat-pill[data-category="all"]');
        allBtn.addEventListener('click', () => {
            document.querySelectorAll('.cat-pill').forEach(p => {
                p.classList.remove('active');
                p.style.background = 'transparent';
                if(p.dataset.category !== 'all') {
                     p.style.color = categoryColors[p.dataset.category]?.primary;
                }
            });
            allBtn.classList.add('active');
            allBtn.style.background = 'rgba(255,255,255,0.1)';
            allBtn.style.color = 'var(--text-primary)';
            currentCategory = 'all';
            filterCards();
        });
        allBtn.style.background = 'rgba(255,255,255,0.1)';
        allBtn.style.borderColor = 'rgba(255,255,255,0.2)';
    }

    // Filtrar cards
    function filterCards() {
        if (currentCategory === 'all') {
            currentCards = [...flashcardsDB];
        } else {
            currentCards = flashcardsDB.filter(c => c.category === currentCategory);
        }
        currentIndex = 0; // Reset index when filtering
        renderCurrentCard();
    }

    // Renderizar APENAS o card atual
    function renderCurrentCard() {
        cardsGrid.innerHTML = '';
        
        if (currentCards.length === 0) {
            cardsGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📭</div>
                    <h3>Nenhum flashcard encontrado</h3>
                    <p>Tente selecionar outra categoria.</p>
                </div>
            `;
            updateNavigationControls();
            return;
        }

        const card = currentCards[currentIndex];
        const colors = categoryColors[card.category] || categoryColors["Sistemas Operacionais"];
        const iconSvg = categoryIcons[card.category] || categoryIcons["Sistemas Operacionais"];
        
        const cardEl = document.createElement('div');
        cardEl.className = 'flashcard-wrapper carousel-card-wrapper';
        // Add a smooth appearance animation
        cardEl.style.animation = 'none';
        cardEl.offsetHeight; // trigger reflow
        cardEl.style.animation = 'cardAppear 0.4s ease-out both';
        
        const isStudied = studiedSet.has(card.id);
        
        cardEl.innerHTML = `
            <div class="flashcard">
                <div class="flashcard-face flashcard-front">
                    <div class="card-header">
                        <div class="card-category-icon" style="background: ${colors.gradient}; box-shadow: 0 4px 12px ${colors.glow};">
                            ${iconSvg}
                        </div>
                        <div class="card-number">#${String(card.id).padStart(2, '0')}</div>
                    </div>
                    <div class="card-body">
                        <div class="card-emoji">${card.emoji}</div>
                        <h2 class="card-term">${card.term}</h2>
                    </div>
                    <div class="card-footer">
                        <div class="card-subcategory">${card.subcategory}</div>
                        <div class="card-flip-hint">
                            Virar
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
                        </div>
                    </div>
                </div>
                <div class="flashcard-face flashcard-back">
                    <div class="card-glow" style="background: ${colors.gradient}"></div>
                    <div class="back-header">
                        <div class="back-term">
                            <span>${card.emoji}</span>
                            ${card.term}
                        </div>
                        <div class="back-close-hint">Voltar</div>
                    </div>
                    <div class="back-detail">${card.detail}</div>
                    <div class="back-tip" style="background: ${colors.bg}; color: ${colors.primary}; border-left-color: ${colors.primary}">
                        ${card.tip}
                    </div>
                </div>
            </div>
        `;
        
        if(isStudied) {
            cardEl.querySelector('.flashcard-front').style.borderColor = colors.primary;
        }

        cardEl.addEventListener('click', () => {
            const flashcardInner = cardEl.querySelector('.flashcard');
            flashcardInner.classList.toggle('flipped');
            
            if (!studiedSet.has(card.id)) {
                studiedSet.add(card.id);
                cardEl.querySelector('.flashcard-front').style.borderColor = colors.primary;
                updateStats();
            }
        });

        cardsGrid.appendChild(cardEl);
        updateNavigationControls();
    }

    function updateNavigationControls() {
        if (currentCards.length === 0) {
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            currentIndexEl.textContent = '0';
            totalFilteredEl.textContent = '0';
            return;
        }

        currentIndexEl.textContent = currentIndex + 1;
        totalFilteredEl.textContent = currentCards.length;

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === currentCards.length - 1;
    }

    // Navigation events
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderCurrentCard();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < currentCards.length - 1) {
            currentIndex++;
            renderCurrentCard();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            prevBtn.click();
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            nextBtn.click();
        }
    });

    // Embaralhar
    shuffleBtn.addEventListener('click', () => {
        currentCards = shuffleArray(currentCards);
        currentIndex = 0; // reset to first card
        renderCurrentCard();
        
        // Efeito visual no botão
        shuffleBtn.classList.add('active');
        setTimeout(() => shuffleBtn.classList.remove('active'), 200);
    });

    // Reiniciar
    resetBtn.addEventListener('click', () => {
        studiedSet.clear();
        updateStats();
        // Remove border colors from the current card if visible
        const frontFace = document.querySelector('.flashcard-front');
        if (frontFace) {
            frontFace.style.borderColor = 'var(--border-color)';
        }
        
        // Efeito visual no botão
        resetBtn.classList.add('active');
        setTimeout(() => resetBtn.classList.remove('active'), 200);
    });

    // Atualizar estatísticas
    function updateStats() {
        const total = flashcardsDB.length;
        const studied = studiedSet.size;
        const percent = Math.round((studied / total) * 100) || 0;
        
        totalCardsEl.textContent = total;
        studiedCardsEl.textContent = studied;
        progressBar.style.width = `${percent}%`;
        progressText.textContent = `${percent}% concluído`;
    }

    init();
});
