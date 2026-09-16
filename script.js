// Game Database
const games = [
    {
        id: 1,
        name: "Flappy Bird",
        category: "casual",
        rating: 4.2,
        reviews: 1245,
        image: "fa-user-secret",
        description: "Classic Flappy Bird game - tap to make the bird fly and avoid obstacles!",
        developer: "Open Source Community",
        platform: "Web, Android, iOS",
        size: "5 MB",
        version: "1.0.0",
        downloads: "500K+"
    },
    {
        id: 2,
        name: "Tetris Classic",
        category: "puzzle",
        rating: 4.7,
        reviews: 2340,
        image: "fa-cube",
        description: "The legendary Tetris game! Stack blocks and complete lines to score points.",
        developer: "Game Developers",
        platform: "Web, Windows, Mac",
        size: "8 MB",
        version: "2.1.0",
        downloads: "1M+"
    },
    {
        id: 3,
        name: "Space Shooter",
        category: "action",
        rating: 4.5,
        reviews: 1890,
        image: "fa-rocket",
        description: "Shoot down aliens and survive waves of enemies in this arcade shooter.",
        developer: "Action Games Inc",
        platform: "Web, Mobile",
        size: "12 MB",
        version: "3.0.0",
        downloads: "750K+"
    },
    {
        id: 4,
        name: "Chess Master",
        category: "strategy",
        rating: 4.8,
        reviews: 3120,
        image: "fa-chess",
        description: "Play chess against AI or challenge friends online. Multiple difficulty levels.",
        developer: "Chess Community",
        platform: "Web, All Platforms",
        size: "10 MB",
        version: "4.2.0",
        downloads: "2M+"
    },
    {
        id: 5,
        name: "Soccer Champions",
        category: "sports",
        rating: 4.3,
        reviews: 1560,
        image: "fa-futbol",
        description: "Manage your team and lead them to victory in this soccer simulation.",
        developer: "Sports Games Studio",
        platform: "Web, Mobile",
        size: "45 MB",
        version: "1.5.0",
        downloads: "600K+"
    },
    {
        id: 6,
        name: "Adventure Quest",
        category: "adventure",
        rating: 4.6,
        reviews: 2100,
        image: "fa-map",
        description: "Explore dungeons, solve puzzles, and defeat monsters in this epic adventure.",
        developer: "Adventure Labs",
        platform: "Web, Windows, Mac",
        size: "35 MB",
        version: "2.0.0",
        downloads: "900K+"
    },
    {
        id: 7,
        name: "Candy Crush Clone",
        category: "casual",
        rating: 4.4,
        reviews: 2800,
        image: "fa-candy-cane",
        description: "Match colorful candies and complete challenging levels.",
        developer: "Puzzle Masters",
        platform: "Web, Mobile",
        size: "20 MB",
        version: "5.1.0",
        downloads: "3M+"
    },
    {
        id: 8,
        name: "Logic Puzzle Pro",
        category: "puzzle",
        rating: 4.5,
        reviews: 1430,
        image: "fa-brain",
        description: "Challenge your mind with hundreds of brain-teasing puzzles.",
        developer: "Brain Games",
        platform: "Web, Mobile",
        size: "15 MB",
        version: "1.3.0",
        downloads: "450K+"
    },
    {
        id: 9,
        name: "Zombie Apocalypse",
        category: "action",
        rating: 4.3,
        reviews: 1680,
        image: "fa-biohazard",
        description: "Survive the zombie invasion and defend your base.",
        developer: "Horror Games Co",
        platform: "Web, Mobile",
        size: "50 MB",
        version: "2.5.0",
        downloads: "800K+"
    },
    {
        id: 10,
        name: "Fantasy RPG",
        category: "adventure",
        rating: 4.7,
        reviews: 2500,
        image: "fa-wand-magic-sparkles",
        description: "Epic fantasy world with quests, magic, and legendary battles.",
        developer: "RPG Studios",
        platform: "Web, Windows, Mac, Mobile",
        size: "100 MB",
        version: "3.2.0",
        downloads: "1.5M+"
    },
    {
        id: 11,
        name: "Racing Revolution",
        category: "sports",
        rating: 4.6,
        reviews: 1950,
        image: "fa-car",
        description: "High-speed racing with stunning graphics and multiple game modes.",
        developer: "Racing Studios",
        platform: "Web, Console",
        size: "60 MB",
        version: "2.0.0",
        downloads: "1M+"
    },
    {
        id: 12,
        name: "Tower Defense Pro",
        category: "strategy",
        rating: 4.4,
        reviews: 1720,
        image: "fa-gopuram",
        description: "Build towers and defend against waves of enemies.",
        developer: "Strategy Games",
        platform: "Web, Mobile",
        size: "25 MB",
        version: "1.8.0",
        downloads: "700K+"
    }
];

// DOM Elements
const gamesGrid = document.getElementById('gamesGrid');
const gameModal = document.getElementById('gameModal');
const closeBtn = document.querySelector('.close');
const searchInput = document.getElementById('searchInput');
const categoryCards = document.querySelectorAll('.category-card');
const downloadBtn = document.querySelector('.download-btn');

// Load Games
function loadGames(gamesToLoad = games) {
    gamesGrid.innerHTML = '';
    gamesToLoad.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// Create Game Card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <div class="game-image">
            <i class="fas ${game.image}"></i>
        </div>
        <div class="game-info">
            <div class="game-name">${game.name}</div>
            <div class="game-meta">
                <span class="game-rating">⭐ ${game.rating}</span>
                <span>${game.reviews} reviews</span>
            </div>
            <div class="game-description-short">${game.description}</div>
            <div class="game-footer">
                <span class="free-badge">FREE</span>
                <i class="fas fa-download download-icon" onclick="openGameModal(${game.id})"></i>
            </div>
        </div>
    `;
    card.onclick = () => openGameModal(game.id);
    return card;
}

// Open Game Modal
function openGameModal(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    document.getElementById('modalGameImage').src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect fill="%236366f1" width="300" height="200"/><text x="50%" y="50%" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle"><tspan class="fas">${game.image}</tspan></text></svg>`;
    document.getElementById('modalGameName').textContent = game.name;
    document.getElementById('modalGameRatingText').textContent = `${game.rating} (${game.reviews} reviews)`;
    document.getElementById('modalGameRating').innerHTML = '⭐'.repeat(Math.floor(game.rating));
    document.getElementById('modalGameCategory').textContent = game.category.charAt(0).toUpperCase() + game.category.slice(1);
    document.getElementById('modalGameDescription').textContent = game.description;
    document.getElementById('modalGameDeveloper').textContent = game.developer;
    document.getElementById('modalGamePlatform').textContent = game.platform;
    document.getElementById('modalGameSize').textContent = game.size;
    document.getElementById('modalGameVersion').textContent = game.version;

    gameModal.style.display = 'block';
}

// Close Modal
closeBtn.onclick = () => {
    gameModal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target == gameModal) {
        gameModal.style.display = 'none';
    }
};

// Search Games
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = games.filter(game =>
        game.name.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query)
    );
    loadGames(filtered);
});

// Filter by Category
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        const filtered = games.filter(game => game.category === category);
        loadGames(filtered);
        
        // Scroll to games section
        document.getElementById('gamesGrid').scrollIntoView({ behavior: 'smooth' });
    });
});

// Download Button
downloadBtn.addEventListener('click', () => {
    alert('✨ Download your games from the store!\nSelect a game to download or manage your downloads.');
});

// CTA Button
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.getElementById('gamesGrid').scrollIntoView({ behavior: 'smooth' });
});

// Download Game Button
document.addEventListener('click', (e) => {
    if (e.target.id === 'downloadBtn') {
        const gameName = document.getElementById('modalGameName').textContent;
        alert(`🎮 "${gameName}" download started!\n\nYour download will begin shortly. Check your downloads folder.`);
        gameModal.style.display = 'none';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadGames();
    
    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});