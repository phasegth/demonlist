async function loadList() {
    const response = await fetch('data.json');
    const levels = await response.json();
    const container = document.getElementById('list-container');
    
    container.innerHTML = ''; // Clear the loading text

    levels.forEach(level => {
        const levelCard = document.createElement('div');
        levelCard.className = 'level-card';
        levelCard.innerHTML = `
            <div class="rank">#${level.rank}</div>
            <div class="info">
                <h3>${level.name}</h3>
                <p>By ${level.author} - <strong>${level.difficulty}</strong></p>
                <a href="${level.link}" target="_blank">Watch Video</a>
            </div>
        `;
        container.appendChild(levelCard);
    });
}

loadList();
