document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("questions-container");
    const btnPrint = document.getElementById("btn-print");
    const btnToggleAll = document.getElementById("btn-toggle-answers");

    // Render questions from data.js
    if (typeof questoes !== 'undefined' && questoes.length > 0) {
        questoes.forEach((q, index) => {
            const card = document.createElement("article");
            card.className = "question-card";
            
            // Build alternatives HTML
            let altsHtml = '<ul class="alternatives">';
            q.alternativas.forEach((alt, i) => {
                const letter = String.fromCharCode(65 + i); // A, B, C...
                altsHtml += `
                    <li class="alternative">
                        <span class="alt-letter">${letter})</span>
                        <span class="alt-text">${alt}</span>
                    </li>
                `;
            });
            altsHtml += '</ul>';

            const correctLetter = String.fromCharCode(65 + q.resposta);

            card.innerHTML = `
                <div class="q-meta">
                    <span class="q-number">Questão ${index + 1}</span>
                    <div class="q-tags">
                        <span class="q-tag">${q.banca}</span>
                        <span class="q-tag">${q.orgao}</span>
                        <span class="q-tag">${q.ano}</span>
                    </div>
                </div>
                <div class="q-text">
                    <p>${q.enunciado}</p>
                </div>
                ${altsHtml}
                <div class="resolution-section no-print">
                    <button class="btn small btn-res-toggle">Mostrar Resolução</button>
                    <div class="resolution-content">
                        <span class="res-correct">Gabarito: ${correctLetter}</span>
                        <div class="res-text">${q.comentario}</div>
                    </div>
                </div>
                <!-- This block will only show on print to ensure it's always printed beautifully -->
                <div class="resolution-content only-print">
                    <span class="res-correct">Gabarito: ${correctLetter}</span>
                    <div class="res-text">${q.comentario}</div>
                </div>
            `;
            container.appendChild(card);
        });
    } else {
        container.innerHTML = "<p>Nenhuma questão encontrada. Verifique o arquivo data.js.</p>";
    }

    // Toggle individual resolution
    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-res-toggle")) {
            const content = e.target.nextElementSibling;
            if (content.classList.contains("show")) {
                content.classList.remove("show");
                e.target.innerText = "Mostrar Resolução";
            } else {
                content.classList.add("show");
                e.target.innerText = "Ocultar Resolução";
            }
        }
    });

    // Toggle all resolutions
    let allOpen = false;
    btnToggleAll.addEventListener("click", () => {
        const contents = document.querySelectorAll(".resolution-section .resolution-content");
        const buttons = document.querySelectorAll(".btn-res-toggle");
        
        allOpen = !allOpen;
        
        contents.forEach(c => {
            if (allOpen) c.classList.add("show");
            else c.classList.remove("show");
        });

        buttons.forEach(b => {
            b.innerText = allOpen ? "Ocultar Resolução" : "Mostrar Resolução";
        });

        btnToggleAll.innerText = allOpen ? "Ocultar Todas as Resoluções" : "Mostrar Todas as Resoluções";
    });

    // Print functionality
    btnPrint.addEventListener("click", () => {
        window.print();
    });
});
