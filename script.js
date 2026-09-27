// Função de Busca em Tempo Real
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.product-card');

        cards.forEach(card => {
            const nomeProduto = (card.dataset.name || '').toLowerCase();
            if (nomeProduto.includes(termo)) {
                card.style.display = 'flex'; // Mantém o layout flex do card
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Função de Filtrar por Categoria (Abas)
function filterCategory(categoryId, eventObj) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Usando Optional Chaining (?.) para resolver o aviso do SonarLint
    eventObj?.currentTarget?.classList.add('active');

    // Oculta todas as seções e mostra apenas a selecionada
    const sections = document.querySelectorAll('.category-section');
    sections.forEach(section => {
        if (section.id === categoryId) {
            section.style.display = 'grid';
        } else {
            section.style.display = 'none';
        }
    });
}

// Tratamento de erro da logo
const storeLogo = document.querySelector('.store-logo');
if (storeLogo) {
    storeLogo.addEventListener('error', () => {
        storeLogo.style.display = 'none';
    });
}