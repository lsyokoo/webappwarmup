const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');


        if (!img.classList.contains('enlarged')) {
   
            img.classList.add('enlarged');
            img.style.position = 'fixed';
            img.style.top = '50%';
            img.style.left = '50%';
            img.style.transform = 'translate(-50%, -50%)';
            img.style.maxWidth = '90vw'; //doesn't exceed window size
            img.style.maxHeight = '90vh'; 
            img.style.width = 'auto'; // ratio
            img.style.height = 'auto';
            img.style.zIndex = '1000';
            img.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
            
        } else {
            img.classList.remove('enlarged');
            img.style.position = 'static';
            img.style.transform = 'none';
            img.style.maxWidth = '100%';
            img.style.maxHeight = 'auto';
            img.style.width = '100%'; // Reset to container size
            img.style.height = 'auto';
            img.style.zIndex = '0';
            img.style.boxShadow = 'none';
        }
    });
});

