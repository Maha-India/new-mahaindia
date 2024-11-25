// Fetch media data from the Netlify function
fetch('/.netlify/functions/getMedia')
  .then(response => response.json())
  .then(media => {
    const gallery = document.querySelector('.gallery');

    // Loop through the media array and create elements dynamically
    media.forEach(item => {
      let mediaElement;

      // Determine if the item is an image or a video
      if (/\.(jpg|jpeg|png)$/.test(item.filename)) {
        // Create img element for images
        mediaElement = document.createElement('img');
        mediaElement.src = `images/${item.filename}`;
        mediaElement.alt = item.altText || 'Image';
        
        // Add relevant classes based on filename patterns
        if (item.filename.endsWith('-w.jpg') || item.filename.endsWith('-w.jpeg') || item.filename.endsWith('-w.png')) {
          mediaElement.classList.add('wide-image');
        }
        if (item.filename.endsWith('-f.jpg') || item.filename.endsWith('-f.jpeg') || item.filename.endsWith('-f.png')) {
          mediaElement.classList.add('four-grid-cells');
        }
      } else if (/\.(mp4|mov)$/.test(item.filename)) {
        // Create video element for videos
        mediaElement = document.createElement('video');
        mediaElement.src = `images/${item.filename}`;
        mediaElement.controls = true;  // Add controls for video playback
        mediaElement.alt = item.altText || 'Video';

        // Add relevant classes for videos if needed (optional)
        if (item.filename.endsWith('-w.mp4') || item.filename.endsWith('-w.mov')) {
          mediaElement.classList.add('wide-image');
        }
        if (item.filename.endsWith('-f.mp4') || item.filename.endsWith('-f.mov')) {
          mediaElement.classList.add('four-grid-cells');
        }
      }

      // Add a span for the date created (acts as a section break)
      const dateSpan = document.createElement('span');
      dateSpan.classList.add('date-created');
      dateSpan.textContent = new Date(item.dateCreated).toLocaleDateString();

      // Append the date span and media element to the gallery
      gallery.appendChild(dateSpan);
      gallery.appendChild(mediaElement);
    });
  })
  .catch(error => console.error('Error fetching media:', error));
                                       
