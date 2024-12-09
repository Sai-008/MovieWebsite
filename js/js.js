// Search functionality
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('movieSearch');
const searchResults = document.getElementById('searchResults');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        // Mock search results
        searchResults.innerHTML = `
            <div class="col-md-4">
                <div class="card bg-dark text-light">
                    <img src="https://via.placeholder.com/300x400" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                        <h5 class="card-title">${query}</h5>
                        <p class="card-text">Mock description for ${query}.</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        alert('Please enter a movie name to search.');
    }
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally
    
    // Display success message
    document.getElementById('successMessage').style.display = 'block';
    
    // Optionally, you can reset the form after submission
    setTimeout(function() {
        document.getElementById('contactForm').reset();
        document.getElementById('successMessage').style.display = 'none';
    }, 3000); // Success message disappears after 3 seconds
});