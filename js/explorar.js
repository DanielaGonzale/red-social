// Datos de usuarios (los mismos que en app.js)
const users = [
    {
        username: "Tucúquere",
        name: "Piero Aguirre",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Fotógrafo profesional especializado en pajaros y naturaleza. Capturando momentos únicos.",
        followers: 1245,
        following: 342,
        posts: 89
    },
    {
        username: "Adallyd",
        name: "Gustavo Maidana",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Artista visual y pintora. Amante del arte abstracto y contemporáneo.",
        followers: 876,
        following: 231,
        posts: 67
    },
    {
        username: "ClaudBlackz",
        name: "Claudio Espinoza",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Diseñador de interiores y arquitecto. Creando espacios que inspiran.",
        followers: 543,
        following: 189,
        posts: 45
    },
    {
        username: "Walax",
        name: "Felipe Rubio",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Artista de manualidades y sostenibilidad. Transformando lo viejo en nuevo.",
        followers: 765,
        following: 298,
        posts: 78
    },
    {
        username: "Nomi",
        name: "Carolina Rioseco",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Fotógrafo urbano capturando la esencia de la ciudad.",
        followers: 432,
        following: 156,
        posts: 34
    },
    {
        username: "Kathie.Chincol",
        name: "KAtherine Garcia",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Pintora tradicional especializada en óleo y acuarela.",
        followers: 987,
        following: 276,
        posts: 56
    }
];

/**
 * Función para renderizar usuarios en la página de explorar
 * @param {Array} usersToRender - Array de usuarios a renderizar
 */
function renderUsers(usersToRender) {
    const usersContainer = document.getElementById('usersContainer');
    usersContainer.innerHTML = '';
    
    if (usersToRender.length === 0) {
        usersContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info text-center">
                    No se encontraron usuarios que coincidan con tu búsqueda.
                </div>
            </div>
        `;
        return;
    }
    
    usersToRender.forEach(user => {
        const userCol = document.createElement('div');
        userCol.className = 'col-md-6 col-lg-4 mb-4';
        userCol.innerHTML = `
            <div class="card h-100">
                <div class="card-body text-center">
                    <img src="${user.avatar}" class="user-avatar-large mb-3" alt="Avatar de ${user.username}">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="text-muted">@${user.username}</p>
                    <p class="card-text small">${user.bio}</p>
                    <div class="d-flex justify-content-around mb-3">
                        <div class="text-center">
                            <h6 class="mb-0">${user.posts}</h6>
                            <small class="text-muted">Publicaciones</small>
                        </div>
                        <div class="text-center">
                            <h6 class="mb-0">${user.followers}</h6>
                            <small class="text-muted">Seguidores</small>
                        </div>
                        <div class="text-center">
                            <h6 class="mb-0">${user.following}</h6>
                            <small class="text-muted">Siguiendo</small>
                        </div>
                    </div>
                    <button class="btn btn-primary w-100">Seguir</button>
                </div>
            </div>
        `;
        usersContainer.appendChild(userCol);
    });
}

/**
 * Función para buscar usuarios
 */
function searchUsers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // Si no hay término de búsqueda, mostrar todos los usuarios
        renderUsers(users);
        return;
    }
    
    // Filtrar usuarios por nombre de usuario o nombre real
    const filteredUsers = users.filter(user => 
        user.username.toLowerCase().includes(searchTerm) || 
        user.name.toLowerCase().includes(searchTerm)
    );
    
    renderUsers(filteredUsers);
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar todos los usuarios inicialmente
    renderUsers(users);
    
    // Configurar event listeners
    document.getElementById('searchButton').addEventListener('click', searchUsers);
    
    // Buscar también al presionar Enter
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchUsers();
        }
    });
    
    // Hacer que las tarjetas de categorías sean clickeables
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.querySelector('h5').textContent;
            alert(`Explorar categoría: ${category}`);
            // En una implementación real, aquí redirigiríamos o filtraríamos por categoría
        });
    });
});
