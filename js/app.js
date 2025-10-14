const samplePosts = [
    {
        id: 1,
        username: "Hades.Hell",
        userAvatar: "https://i.pinimg.com/736x/e5/00/e8/e500e85724b9b0f4fa4e539e3ba5f5a9.jpg",
        imageUrl: "https://i.pinimg.com/1200x/96/71/a9/9671a9585c82fb5d36204d42a38c2668.jpg",
        description: "Un fanart de mi serie favorita. ¡Espero que les guste!",
        likes: 42,
        comments: [
            { user: "marissa.koi", text: "Que bonito uso de colores", avatar: "https://i.pinimg.com/736x/64/1d/cd/641dcd4e94878b9d5a427ee13881ac7e.jpg" },
            { user: "yonniu", text: "Me encantan los colores del fanart", avatar: "https://i.pinimg.com/736x/cf/f3/cd/cff3cd9ee2d17278931ae62649a338e7.jpg" }
        ],
        category: "Art",
        date: "2023-04-15",
        saved: false
    },
    {
        id: 2,
        username: "Wons.WOs",
        userAvatar: "https://i.pinimg.com/736x/7f/ee/ad/7feead7fff356b081cfd9925ccac9aef.jpg",
        imageUrl: "https://i.pinimg.com/736x/c0/ae/c9/c0aec941e7a4517de3bd69cf259795d4.jpg",
        description: "Mi última obra de arte abstracto. Me inspiré en los colores del otoño.",
        likes: 78,
        comments: [
            { user: "MassimoRam", text: "Increíble trabajo ", avatar: "https://i.pinimg.com/736x/d6/30/d4/d630d42a8fc178af9e1d1a7958a28e0e.jpg" }
        ],
        category: "art",
        date: "2023-04-14",
        saved: true
    },
    {
        id: 3,
        username: "FlutterXayah",
        userAvatar: "https://i.pinimg.com/1200x/38/07/b5/3807b537d5aecb768bc94acf5aacfca5.jpg",
        imageUrl: "https://i.pinimg.com/736x/5e/e8/76/5ee87627a736ab27971dabc8528470f9.jpg",
        description: "Una de mis primeras ilustraciones digitales. ¡Todavía tengo mucho que aprender!",
        likes: 34,
        comments: [],
        category: "design",
        date: "2023-04-13",
        saved: false
    },
    {
        id: 4,
        username: "Elenar.Dan",
        userAvatar: "https://i.pinimg.com/736x/34/83/ab/3483ab21ec14bc9796103b2a5a75d9d5.jpg",
        imageUrl: "https://i.pinimg.com/1200x/16/92/15/169215aedd8465336dfa156230e2ff9a.jpg",
        description: "Una pintura profunda sobre la naturaleza y el reciclaje. ¿Qué opinan?",
        likes: 56,
        comments: [
            { user: "Riruc", text: "Muy creativo!", avatar: "https://i.pinimg.com/736x/4a/bc/44/4abc441f1e65624e4b23d07fe0877da0.jpg" },
            { user: "KadaKadoso", text: "Que bello mensaje", avatar: "https://i.pinimg.com/736x/f4/d9/42/f4d9424fec6f9cceb9d38b44a5ba3482.jpg" }
        ],
        category: "crafts",
        date: "2023-04-12",
        saved: false
    },
    {
        id: 5,
        username: "JavierGames",
        userAvatar: "https://i.pinimg.com/1200x/a2/13/8c/a2138cbe8d929452581f060463a7a33f.jpg",
        imageUrl: "https://i.pinimg.com/1200x/89/92/03/899203ea876889653b52cb185e2e5b98.jpg",
        description: "Dibujo algo abstracto de Hatsune Miku que hice el otro día.",
        likes: 2900,
        comments: [],
        category: "art",
        date: "2023-04-11",
        saved: true
    },
    {
        id: 6,
        username: "Seba.Goranger",
        userAvatar: "https://i.pinimg.com/736x/a5/93/43/a593439f0fb8ee975e1c5a5ff53b2541.jpg",
        imageUrl: "https://i.pinimg.com/1200x/f5/28/cc/f528cc217f14d67402e923752a0e2270.jpg",
        description: "Ilustracion de Power Rangers que hice en mis tiempos libres.",
        likes: 63,
        comments: [
            { user: "pupipy", text: "Que bello saber que aun hay fans de esto", avatar: "https://i.pinimg.com/736x/d3/03/dd/d303ddbac77a0879c97fe16f491a19e0.jpg" }
        ],
        category: "design",
        date: "2023-04-10",
        saved: false
    }
];

// Datos de usuarios
const users = [
    {
        username: "Mario.Dekaranger",
        name: "Mario Carreño",
        avatar: "https://i.pinimg.com/736x/55/28/2e/55282e2aad52760a952bc253fd9dd474.jpg",
        bio: "Programador y desarrollador web. Apasionado por el código limpio y las nuevas tecnologías.",
        followers: 1245,
        following: 342,
        posts: 89
    },
    {
        username: "Jcarlosl",
        name: "juan Carlos López",
        avatar: "https://i.pinimg.com/736x/83/6f/a8/836fa89f634f50f80534365894a7cef3.jpg",
        bio: "Artista visual y pintor. Amante del arte abstracto y contemporáneo.",
        followers: 876,
        following: 231,
        posts: 67
    },
    {
        username: "PixelArt",
        name: "Aja Pixel",
        avatar: "https://i.pinimg.com/736x/1d/95/1e/1d951edbfe6dfe9629cb7bbaa758ee98.jpg",
        bio: "Animadora y diseñadora gráfica. Creando mundos pixelados.",
        followers: 543,
        following: 189,
        posts: 45
    },
    {
        username: "Blaziken.duet",
        name: "Elena Rodríguez",
        avatar: "https://i.pinimg.com/1200x/12/c6/48/12c648da3faea78cb5521c65c1a99c86.jpg",
        bio: "Artista de manualidades y sostenibilidad. Transformando lo viejo en nuevo.",
        followers: 765,
        following: 298,
        posts: 78
    },
    {
        username: "Tinini",
        name: "Martina Saavedra",
        avatar: "https://i.pinimg.com/1200x/41/dc/f5/41dcf59781a99ccc0f52ed2c971d1b51.jpg",
        bio: "Fotógrafa urbana capturando la esencia de la ciudad.",
        followers: 432,
        following: 156,
        posts: 34
    },
    {
        username: "Kotsu",
        name: "Nicolas Kotzias",
        avatar: "https://cdnb.artstation.com/p/assets/images/images/027/311/917/large/jr-pencil-1024-1.jpg?1591183097",
        bio: "Pintor tradicional especializado en óleo y acuarela.",
        followers: 987,
        following: 276,
        posts: 56
    },
    {
        username: "SkyniDragon",
        name: "Daniela Gonzalez",
        avatar: "https://i.pinimg.com/736x/e9/f1/a8/e9f1a83f2519c46e07f01ba3b1396b83.jpg",
        bio: "Desarrolladora de videdojuegos y artista digital. Apasionada por la creatividad y la innovación.",
        followers: 1245,
        following: 568,
        posts: 245
    }
];


let currentPostId = null;

/**
 * Función para renderizar las publicaciones en el DOM
 * @param {Array} posts - Array de objetos de publicación
 */
function renderPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';
    
    // Si no hay publicaciones que coincidan con los filtros
    if (posts.length === 0) {
        postsContainer.innerHTML = `
            <div class="alert alert-info text-center">
                No hay publicaciones que coincidan con los filtros aplicados.
            </div>
        `;
        return;
    }
    
    // Crear y añadir cada publicación al contenedor
    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'card';
        postElement.innerHTML = `
            <div class="card-header bg-white d-flex align-items-center">
                <img src="${post.userAvatar}" class="user-avatar me-2" alt="Avatar de ${post.username}">
                <div>
                    <h6 class="mb-0">${post.username}</h6>
                    <small class="text-muted">${formatDate(post.date)}</small>
                </div>
            </div>
            <img src="${post.imageUrl}" class="card-img-top" alt="Publicación de ${post.username}">
            <div class="card-body">
                <div class="post-actions mb-2">
                    <i class="${post.likes > 0 ? 'fas' : 'far'} fa-heart ${post.likes > 0 ? 'liked' : ''}" data-post-id="${post.id}"></i>
                    <i class="far fa-comment" data-post-id="${post.id}" data-bs-toggle="modal" data-bs-target="#commentsModal"></i>
                    <i class="${post.saved ? 'fas' : 'far'} fa-bookmark ${post.saved ? 'saved' : ''}" data-post-id="${post.id}"></i>
                    <span class="float-end">
                        <span class="badge bg-primary">${post.category}</span>
                    </span>
                </div>
                <p class="card-text"><strong>${post.username}</strong> ${post.description}</p>
                <p class="text-muted">${post.likes} me gusta • ${post.comments.length} comentarios</p>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
    
    
    addPostEventListeners();
}

/**
 * Función para añadir event listeners a las acciones de publicaciones
 */
function addPostEventListeners() {
    // Botones de like
    document.querySelectorAll('.fa-heart').forEach(heart => {
        heart.addEventListener('click', toggleLike);
    });
    
    // Botones de guardar
    document.querySelectorAll('.fa-bookmark').forEach(bookmark => {
        bookmark.addEventListener('click', toggleSave);
    });
    
    // Botones de comentarios
    document.querySelectorAll('.fa-comment').forEach(comment => {
        comment.addEventListener('click', function() {
            currentPostId = this.getAttribute('data-post-id');
            showComments(currentPostId);
        });
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

/**
 * Función para alternar el estado de "me gusta" en una publicación
 * @param {Event} event - Evento del click
 */
function toggleLike(event) {
    const heart = event.target;
    const postId = heart.getAttribute('data-post-id');
    
    // Encontrar el post en los datos
    const post = samplePosts.find(p => p.id == postId);
    
    if (heart.classList.contains('far')) {
        // Cambiar a "me gusta"
        heart.classList.remove('far');
        heart.classList.add('fas', 'liked');
        post.likes += 1;
    } else {
        // Quitar "me gusta"
        heart.classList.remove('fas', 'liked');
        heart.classList.add('far');
        post.likes -= 1;
    }
    
    // Actualizar el contador de likes en la interfaz
    const likesText = heart.closest('.card-body').querySelector('.text-muted');
    likesText.textContent = `${post.likes} me gusta • ${post.comments.length} comentarios`;
}

/**
 * Función para alternar el estado de guardado de una publicación
 * @param {Event} event - Evento del click
 */
function toggleSave(event) {
    const bookmark = event.target;
    const postId = bookmark.getAttribute('data-post-id');
    
    // Encontrar el post en los datos
    const post = samplePosts.find(p => p.id == postId);
    
    // Añadir animación
    bookmark.classList.add('saving');
    setTimeout(() => {
        bookmark.classList.remove('saving');
    }, 500);
    
    if (bookmark.classList.contains('far')) {
        // Guardar publicación
        bookmark.classList.remove('far');
        bookmark.classList.add('fas', 'saved');
        post.saved = true;
    } else {
        // Quitar de guardados
        bookmark.classList.remove('fas', 'saved');
        bookmark.classList.add('far');
        post.saved = false;
    }
    
    // Guardar en localStorage (simulación)
    updateSavedPosts();
}

/**
 * Función para actualizar las publicaciones guardadas en localStorage
 */
function updateSavedPosts() {
    const savedPosts = samplePosts.filter(post => post.saved);
    localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
}

/**
 * Función para mostrar comentarios en el modal
 * @param {number} postId - ID de la publicación
 */
function showComments(postId) {
    const post = samplePosts.find(p => p.id == postId);
    const modalBody = document.getElementById('commentsModalBody');
    
    let commentsHTML = '';
    
    if (post.comments.length === 0) {
        commentsHTML = '<p class="text-muted text-center">No hay comentarios aún. ¡Sé el primero en comentar!</p>';
    } else {
        post.comments.forEach(comment => {
            commentsHTML += `
                <div class="comment">
                    <div class="d-flex align-items-start">
                        <img src="${comment.avatar}" class="comment-avatar me-2" alt="Avatar de ${comment.user}">
                        <div>
                            <strong>${comment.user}</strong>
                            <p class="mb-0">${comment.text}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    modalBody.innerHTML = commentsHTML;
    
    // Configurar el botón de añadir comentario
    document.getElementById('addCommentBtn').onclick = function() {
        addComment(postId);
    };
}

/**
 * Función para añadir un comentario
 * @param {number} postId - ID de la publicación
 */
function addComment(postId) {
    const commentInput = document.getElementById('newComment');
    const commentText = commentInput.value.trim();
    
    if (commentText === '') return;
    
    const post = samplePosts.find(p => p.id == postId);
    
    // Añadir el comentario
    post.comments.push({
        user: "SkyniDragon",
        text: commentText,
        avatar: "https://i.pinimg.com/736x/e9/f1/a8/e9f1a83f2519c46e07f01ba3b1396b83.jpg"
    });
    
    // Limpiar el input
    commentInput.value = '';
    
    // Mostrar los comentarios actualizados
    showComments(postId);
    
    // Actualizar el contador de comentarios en la publicación
    const commentCount = document.querySelector(`[data-post-id="${postId}"]`).closest('.card-body').querySelector('.text-muted');
    commentCount.textContent = `${post.likes} me gusta • ${post.comments.length} comentarios`;
}

/**
 * Función para filtrar publicaciones según los criterios seleccionados
 */
function filterPosts() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;
    
    let filteredPosts = [...samplePosts];
    
    // Filtrar por categoría
    if (categoryFilter !== 'all') {
        filteredPosts = filteredPosts.filter(post => post.category === categoryFilter);
    }
    
    // Filtrar por fecha
    if (dateFilter !== 'all') {
        const today = new Date();
        let startDate;
        
        switch(dateFilter) {
            case 'today':
                startDate = new Date(today);
                startDate.setHours(0, 0, 0, 0);
                break;
            case 'week':
                startDate = new Date(today);
                startDate.setDate(today.getDate() - 7);
                break;
            case 'month':
                startDate = new Date(today);
                startDate.setMonth(today.getMonth() - 1);
                break;
        }
        
        filteredPosts = filteredPosts.filter(post => {
            const postDate = new Date(post.date);
            return postDate >= startDate;
        });
    }
    
    renderPosts(filteredPosts);
}

/**
 * Función para obtener datos de una API externa
 */
async function fetchApiData() {
    try {
        // Usamos una API pública de ejemplo (JSONPlaceholder)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        
        const data = await response.json();
        
        const apiContainer = document.getElementById('apiData');
        apiContainer.innerHTML = '';
        
        // Mostrar los datos de la API en el contenedor
        data.forEach(item => {
            const apiItem = document.createElement('div');
            apiItem.className = 'mb-3';
            apiItem.innerHTML = `
                <h6 class="mb-1">${item.title}</h6>
                <p class="text-muted small">${item.body.substring(0, 80)}...</p>
            `;
            apiContainer.appendChild(apiItem);
        });
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        document.getElementById('apiData').innerHTML = `
            <div class="alert alert-warning">
                No se pudieron cargar las tendencias en este momento.
            </div>
        `;
    }
}

/**
 * Función para renderizar usuarios sugeridos
 */
function renderSuggestedUsers() {
    const suggestedUsersContainer = document.getElementById('suggestedUsers');
    const suggestedUsers = users.filter(user => user.username !== 'mariag').slice(0, 3);
    
    suggestedUsersContainer.innerHTML = '';
    
    suggestedUsers.forEach(user => {
        const userElement = document.createElement('div');
        userElement.className = 'd-flex align-items-center mb-3';
        userElement.innerHTML = `
            <img src="${user.avatar}" class="user-avatar me-2" alt="Avatar de ${user.username}">
            <div class="flex-grow-1">
                <h6 class="mb-0">${user.username}</h6>
                <small class="text-muted">${user.name}</small>
            </div>
            <button class="btn btn-sm btn-outline-primary">Seguir</button>
        `;
        suggestedUsersContainer.appendChild(userElement);
    });
}

/**
 * Función para manejar la subida de imágenes
 * @param {Event} event - Evento del formulario
 */
function handleImageUpload(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('imageUpload');
    const description = document.getElementById('imageDescription').value;
    const category = document.getElementById('imageCategory').value;
    
    // Validar que se haya seleccionado una imagen
    if (!fileInput.files[0]) {
        alert('Por favor, selecciona una imagen para publicar.');
        return;
    }
    
    // En una aplicación real, aquí enviaríamos la imagen al servidor
    // Por ahora, simulamos la publicación con una imagen de ejemplo
    
    // Crear un objeto URL para la imagen seleccionada
    const imageUrl = URL.createObjectURL(fileInput.files[0]);
    
    // Crear un nuevo post
    const newPost = {
        id: samplePosts.length + 1,
        username: "SkyniDragon",
        userAvatar: "https://i.pinimg.com/736x/e9/f1/a8/e9f1a83f2519c46e07f01ba3b1396b83.jpg",
        imageUrl: imageUrl,
        description: description || "Sin descripción",
        likes: 0,
        comments: [],
        category: category,
        date: new Date().toISOString().split('T')[0],
        saved: false
    };
    
    // Añadir el nuevo post al principio del array
    samplePosts.unshift(newPost);
    
    // Renderizar las publicaciones
    renderPosts(samplePosts);
    
    // Resetear el formulario
    document.getElementById('uploadForm').reset();
    
    // Mostrar mensaje de éxito
    alert('¡Tu publicación se ha compartido exitosamente!');
}

/**
 * Función para ordenar publicaciones
 * @param {Event} event - Evento del click
 */
function sortPosts(event) {
    // Quitar clase active de todos los botones
    document.querySelectorAll('[data-sort]').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Añadir clase active al botón clickeado
    event.target.classList.add('active');
    
    // Ordenar posts según el criterio seleccionado
    const sortBy = event.target.getAttribute('data-sort');
    let sortedPosts = [...samplePosts];
    
    if (sortBy === 'recent') {
        sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'popular') {
        sortedPosts.sort((a, b) => b.likes - a.likes);
    }
    
    renderPosts(sortedPosts);
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar publicaciones iniciales
    renderPosts(samplePosts);
    
    // Obtener datos de la API
    fetchApiData();
    
    // Renderizar usuarios sugeridos
    renderSuggestedUsers();
    
    // Configurar event listeners
    document.getElementById('applyFilters').addEventListener('click', filterPosts);
    document.getElementById('uploadForm').addEventListener('submit', handleImageUpload);
    
    // Configurar botones de ordenación
    document.querySelectorAll('[data-sort]').forEach(button => {
        button.addEventListener('click', sortPosts);
    });
    
    // Permitir enviar comentarios con Enter
    document.getElementById('newComment').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('addCommentBtn').click();
        }
    });
});
