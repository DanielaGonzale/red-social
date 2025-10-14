// Datos de publicaciones del usuario (filtradas para mostrar solo las de mariag)
const userPosts = [
    {
        id: 101,
        username: "mariag",
        userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        imageUrl: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Mi primera pintura digital usando Procreate. ¡Estoy muy contenta con el resultado!",
        likes: 45,
        comments: 12,
        category: "art",
        date: "2023-04-16"
    },
    {
        id: 102,
        username: "mariag",
        userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Paisaje montañoso al atardecer. Los colores del cielo eran increíbles.",
        likes: 78,
        comments: 8,
        category: "photography",
        date: "2023-04-14"
    },
    {
        id: 103,
        username: "mariag",
        userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Experimentando con acuarelas. Me encanta cómo fluyen los colores.",
        likes: 34,
        comments: 5,
        category: "art",
        date: "2023-04-12"
    },
    {
        id: 104,
        username: "mariag",
        userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        imageUrl: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Retrato en blanco y negro. Enfocándome en las expresiones y emociones.",
        likes: 56,
        comments: 15,
        category: "photography",
        date: "2023-04-10"
    },
    {
        id: 105,
        username: "mariag",
        userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Diseño de logotipo para un café local. Inspirado en la naturaleza.",
        likes: 23,
        comments: 3,
        category: "design",
        date: "2023-04-08"
    },
    {
        id: 106,
        username: "mariag",
        userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        imageUrl: "https://images.unsplash.com/photo-1580834340752-35df8c82e068?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Macetas decoradas a mano. Un proyecto divertido para el fin de semana.",
        likes: 67,
        comments: 9,
        category: "crafts",
        date: "2023-04-05"
    }
];

/**
 * Función para renderizar las publicaciones del usuario en formato de grid
 */
function renderUserPosts() {
    const userPostsContainer = document.getElementById('userPosts');
    userPostsContainer.innerHTML = '';
    
    userPosts.forEach(post => {
        const postCol = document.createElement('div');
        postCol.className = 'col-md-4 mb-4';
        postCol.innerHTML = `
            <div class="card post-grid">
                <img src="${post.imageUrl}" class="card-img-top" alt="Publicación de ${post.username}">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="post-actions">
                            <i class="fas fa-heart text-danger me-1"></i>
                            <small class="text-muted">${post.likes}</small>
                            <i class="far fa-comment mx-2"></i>
                            <small class="text-muted">${post.comments}</small>
                        </div>
                        <span class="badge bg-primary">${post.category}</span>
                    </div>
                </div>
            </div>
        `;
        userPostsContainer.appendChild(postCol);
    });
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    renderUserPosts();
});
