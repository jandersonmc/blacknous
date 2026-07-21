document.addEventListener('DOMContentLoaded', () => {
    const wordsGrid = document.getElementById('wordsGrid');
    const searchInput = document.getElementById('searchInput');
    const wordCount = document.getElementById('wordCount');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const printBtn = document.getElementById('printBtn');

    let currentFilter = 'all';

    // Speech synthesis function
    window.speakText = function(text, lang = 'es-ES') {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        window.speechSynthesis.speak(utterance);
    };

    // Render words to the grid
    function renderWords(words) {
        wordsGrid.innerHTML = '';
        
        if (words.length === 0) {
            wordsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 1.1rem; padding: 2rem;">Nenhuma palavra encontrada. Tente outra busca.</p>';
            wordCount.textContent = `Mostrando 0 palavras`;
            return;
        }

        words.forEach(data => {
            const card = document.createElement('div');
            card.className = 'word-card';
            
            // Generate examples HTML with TTS button
            const examplesHtml = data.examples.map(ex => `
                <li class="example-item">
                    <span class="example-es">
                        ${ex.es}
                        <button class="speak-btn small" onclick="speakText('${ex.es.replace(/'/g, "\\'")}')" title="Ouvir frase">🔊</button>
                    </span>
                    <span class="example-pt">${ex.pt}</span>
                </li>
            `).join('');

            card.innerHTML = `
                <div class="word-header">
                    <div class="word-main">
                        <div class="emoji-box">${data.emoji}</div>
                        <div>
                            <h2 class="word-title">
                                ${data.word}
                                <button class="speak-btn" onclick="speakText('${data.word.replace(/'/g, "\\'")}')" title="Ouvir palavra">🔊</button>
                            </h2>
                            <p class="word-translation">${data.translation}</p>
                        </div>
                    </div>
                    <span class="word-category">${data.category.split('-')[0].trim()}</span>
                </div>
                <ul class="examples-list">
                    ${examplesHtml}
                </ul>
            `;
            
            wordsGrid.appendChild(card);
        });

        wordCount.textContent = `Mostrando ${words.length} palavra${words.length !== 1 ? 's' : ''}`;
    }

    // Filter logic
    function filterWords() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        const filtered = wordsData.filter(item => {
            // Check text match
            const matchesText = 
                item.word.toLowerCase().includes(searchTerm) || 
                item.translation.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm);
            
            // Check category match
            const matchesCategory = currentFilter === 'all' || item.filterId === currentFilter;

            return matchesText && matchesCategory;
        });

        renderWords(filtered);
    }

    // Event Listeners
    searchInput.addEventListener('input', filterWords);

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update filter and re-render
            currentFilter = btn.getAttribute('data-filter');
            filterWords();
        });
    });

    printBtn.addEventListener('click', () => {
        window.print();
    });

    // Initial render
    renderWords(wordsData);
});
