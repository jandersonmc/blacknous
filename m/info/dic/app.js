// termosData já está disponível no escopo global graças ao data.js

document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('dictionary-content');
    const searchInput = document.getElementById('searchInput');

    function renderTerms(terms) {
        contentContainer.innerHTML = '';

        if (terms.length === 0) {
            contentContainer.innerHTML = `
                <div class="no-results">
                    <p>Nenhum termo encontrado. Refine sua busca.</p>
                </div>
            `;
            return;
        }

        // Agrupar por categoria
        const categorias = {};
        terms.forEach(t => {
            if (!categorias[t.categoria]) categorias[t.categoria] = [];
            categorias[t.categoria].push(t);
        });

        // Gerar HTML
        for (const [categoria, itens] of Object.entries(categorias)) {
            const section = document.createElement('section');
            section.className = 'category-section';
            
            section.innerHTML = `
                <h2 class="category-title">${categoria}</h2>
                <div class="terms-grid">
                    ${itens.map(item => `
                        <article class="term-card">
                            <div class="term-header">
                                <span class="term-emoji">${item.emoji}</span>
                                <h3 class="term-title">${item.termo}</h3>
                            </div>
                            <p class="term-definition">${item.definicao}</p>
                        </article>
                    `).join('')}
                </div>
            `;
            contentContainer.appendChild(section);
        }
    }

    // Render inicial
    renderTerms(termosData);

    // Evento de busca dinâmico
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        const filtered = termosData.filter(t => 
            t.termo.toLowerCase().includes(query) || 
            t.definicao.toLowerCase().includes(query)
        );
        
        renderTerms(filtered);
    });
});
