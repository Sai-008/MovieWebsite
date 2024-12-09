
    // Function to show the selected category content and hide others
    function showCategory(category) {
        // Hide all category contents first
        var contents = document.querySelectorAll('.category-content');
        contents.forEach(function(content) {
            content.style.display = 'none';  // Hide content
        });

        // Show the selected category content
        var selectedCategory = document.getElementById(category);
        selectedCategory.style.display = 'block';  // Show content
    }

    // Detect clicks outside the category content to hide it
    document.addEventListener('click', function(event) {
        var visibleContent = document.querySelector('.category-content[style="display: block;"]');

        // If there is any visible content and the click is outside it
        if (visibleContent && !visibleContent.contains(event.target)) {
            visibleContent.style.display = 'none';  // Hide content
        }
    });
