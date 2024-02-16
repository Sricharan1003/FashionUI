document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('mainContent');

    // Fetch data from the API
    fetch('https://products-api-2ttf.onrender.com/api/products')
        .then(response => response.json())
        .then(data => {
            // Display data dynamically
            data.forEach(item => {
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('category');

                const imgElement = document.createElement('img');
                imgElement.src = item.image;
                imgElement.alt = item.title;

                const heading = document.createElement('p');
                heading.classList.add('heading');
                heading.textContent = item.title;

                imgContainer.appendChild(heading);
                imgContainer.appendChild(imgElement);
                mainContent.appendChild(imgContainer);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    
    // Add event listeners
    document.getElementById('viewAllBtn').addEventListener('click', function() {
        alert('View All button clicked');
    });

    document.getElementById('watchNowBtn').addEventListener('click', function() {
        alert('Watch Now button clicked');
    });
});
