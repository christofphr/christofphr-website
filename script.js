// Disable right-click on images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.work-item img, .club55-item img');
    
    images.forEach(img => {
        // Prevent right-click
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Prevent drag
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    });
});
// Disable right-click on print images
document.addEventListener('DOMContentLoaded', function() {
    const printImages = document.querySelectorAll('.print-image img');
    
    printImages.forEach(img => {
        // Prevent right-click
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Prevent drag
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    });
});