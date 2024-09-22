// Sample Artworks Data
const artworks = [
    { id: 1, image: './assets/images/m-1.jpg', date: '2023-09-01', info: 'Artwork 1 Description' },
    { id: 2, image: './assets/images/l-1.jpg', date: '2023-08-15', info: 'Artwork 2 Description' },
    { id: 3, image: './assets/images/l-2.jpeg.jpg', date: '2023-08-15', info: 'Artwork 3 Description' },
    { id: 4, image: './assets/images/l-3.jpg', date: '2023-08-15', info: 'Artwork 4 Description' },
    { id: 5, image: './assets/images/l-4.png', date: '2023-08-15', info: 'Artwork 5 Description' },
    { id: 6, image: './assets/images/l-5.jpg', date: '2023-08-15', info: 'Artwork 6 Description' },
    { id: 7, image: './assets/images/l-6.jpeg.jpg', date: '2023-08-15', info: 'Artwork 7 Description' },
    { id: 8, image: './assets/images/m-1.jpg', date: '2023-08-15', info: 'Artwork 8 Description' },
    { id: 9, image: './assets/images/m-2.jpg', date: '2023-08-15', info: 'Artwork 9 Description' },
    { id: 10, image: './assets/images/m-3.jpeg.jpg', date: '2023-08-15', info: 'Artwork 10 Description' },
    { id: 11, image: './assets/images/m-4.jpg', date: '2023-08-15', info: 'Artwork 11 Description' },
    { id: 12, image: './assets/images/m-5.jpeg.jpg', date: '2023-08-15', info: 'Artwork 12 Description' },
    { id: 13, image: './assets/images/m-6.jpeg.jpg', date: '2023-08-15', info: 'Artwork 13 Description' },
    { id: 14, image: './assets/images/p-2.jpeg.jpg', date: '2023-08-15', info: 'Artwork 14 Description' },
    { id: 15, image: './assets/images/p-3.jpeg.jpg', date: '2023-08-15', info: 'Artwork 15 Description' },
    { id: 16, image: './assets/images/p-4.jpg', date: '2023-08-15', info: 'Artwork 16 Description' },
    { id: 17, image: './assets/images/p-5.jpeg.jpg', date: '2023-08-15', info: 'Artwork 17 Description' },
    { id: 18, image: './assets/images/p-6.jpeg.jpg', date: '2023-08-15', info: 'Artwork 18 Description' },
    
  ];
  
  let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  
  function loadArtworks() {
    const artworkGrid = document.getElementById('artwork-grid');
    artworkGrid.innerHTML = '';
    artworks.forEach((art) => {
      const artworkBox = document.createElement('div');
      artworkBox.classList.add('artwork-item');
      artworkBox.innerHTML = `
        <img src="${art.image}" alt="Artwork">
        <p class="info">Published: ${art.date}</p>
        <button onclick="viewDetails(${art.id})">View Details</button>
        <button onclick="addToFavourites(${art.id})">Add to Favourites</button>
      `;
      artworkGrid.appendChild(artworkBox);
    });
  }
  
  // View Details in Modal
  function viewDetails(id) {
    const artwork = artworks.find(art => art.id === id);
    document.getElementById('modal-image').src = artwork.image;
    document.getElementById('modal-info').innerText = artwork.info;
    document.getElementById('details-modal').classList.remove('hidden');
  }
  
  function closeModal() {
    document.getElementById('details-modal').classList.add('hidden');
  }
  
  // Add to Favourites
  function addToFavourites(id) {
    const artwork = artworks.find(art => art.id === id);
    if (!favourites.some(fav => fav.id === id)) {
      favourites.push(artwork);
      localStorage.setItem('favourites', JSON.stringify(favourites));
      alert('Added to favourites!');
    }
  }
  
  // Remove from Favourites
  function removeFromFavourites(id) {
    favourites = favourites.filter(fav => fav.id !== id);
    localStorage.setItem('favourites', JSON.stringify(favourites));
    loadFavourites();
  }
  
  // Load Favourites
  function loadFavourites() {
    const favouritesGrid = document.getElementById('favourites-grid');
    favouritesGrid.innerHTML = '';
    if (favourites.length === 0) {
      document.getElementById('empty-message').style.display = 'block';
    } else {
      document.getElementById('empty-message').style.display = 'none';
      favourites.forEach(fav => {
        const favBox = document.createElement('div');
        favBox.classList.add('artwork-item');
        favBox.innerHTML = `
          <img src="${fav.image}" alt="Artwork">
          <p class="info">Published: ${fav.date}</p>
          <button onclick="removeFromFavourites(${fav.id})">Remove</button>
        `;
        favouritesGrid.appendChild(favBox);
      });
    }
  }
  
  function openFavourites() {
    document.getElementById('gallery').classList.add('hidden');
    document.getElementById('favourites-section').classList.remove('hidden');
    loadFavourites();
  }
  
  window.onload = loadArtworks;
  