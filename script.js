// Disable right-click and drag on images across all gallery pages
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.work-item img, .club55-item img, .nyfw-item img, .print-image img, .horizontal-item img');
    
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