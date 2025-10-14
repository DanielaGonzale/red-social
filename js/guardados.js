/**
 * Función para renderizar publicaciones guardadas
 */
function renderSavedPosts() {
    const savedPostsContainer = document.getElementById('savedPostsContainer');
    const noSavedPosts = document.getElementById('noSavedPosts');
    
    // Obtener publicaciones guardadas del localStorage (en una app real, vendrían del servidor)
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || [];
    
    if (savedPosts.length === 0) {
        savedPostsContainer.style.display = 'none';
        noSavedPosts.style.display = 'block';
        return;
    }
    
    savedPostsContainer.innerHTML = '';
    noSavedPosts.style.display = 'none';
    
    savedPosts.forEach(post => {
        const postCol = document.createElement('div');
        postCol.className = 'col-md-4 mb-4';
        postCol.innerHTML = `
            <div class="card">
                <div class="card-header bg-white d-flex align-items-center">
                    <img src="${post.userAvatar}" class="user-avatar me-2" alt="Avatar de ${post.username}">
                    <div>
                        <h6 class="mb-0">${post.username}</h6>
                        <small class="text-muted">${formatDate(post.date)}</small>
                    </div>
                </div>
                <img src="${post.imageUrl}" class="card-img-top" alt="Publicación de ${post.username}">
                <div class="card-body">
                    <p class="card-text">${post.description}</p>
                    <div class="d-flex justify-content-between">
                        <div>
                            <i class="fas fa-heart text-danger me-1"></i>
                            <small class="text-muted">${post.likes}</small>
                            <i class="far fa-comment mx-2"></i>
                            <small class="text-muted">${post.comments.length}</small>
                        </div>
                        <span class="badge bg-primary">${post.category}</span>
                    </div>
                </div>
            </div>
        `;
        savedPostsContainer.appendChild(postCol);
    });
}

/**
 * Función para formatear la fecha en formato legible
 * @param {string} dateString - Fecha en formato string
 * @returns {string} Fecha formateada
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    renderSavedPosts();
});



