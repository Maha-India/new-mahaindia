fetch('/gallery.json')
    .then(response => response.json())
    .then(images => {
      const galleryDiv = document.querySelector('.gallery');
      images.forEach(image => {
        const img = document.createElement('img');
        img.src = `images/${image.filename}`;
        img.alt = image.filename;

        // Add any applicable classes
        image.classes.forEach(className => img.classList.add(className));

        galleryDiv.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching gallery JSON:', error));
