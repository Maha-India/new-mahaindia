// Fetch media data from the Netlify function
fetch('../gallery.json')
  .then(response => response.json())
  .then(media => {
    const gallery = document.querySelector('.gallery');

    // Loop through the media array and create elements dynamically
    media.forEach(item => {
      let mediaElement;

      // Determine if the item is an image or a video
      if (/\.(jpg|jpeg|png)$/.test(item.filename.toLowerCase())) {
        // Create img element for images
        mediaElement = document.createElement('img');
        mediaElement.src = `images/${item.filename}`;
        mediaElement.alt = item.altText || 'Image';
        
        // Add relevant classes based on filename patterns
        if (item.filename.toLowerCase().endsWith('-w.jpg') || item.filename.toLowerCase().endsWith('-w.jpeg') || item.filename.toLowerCase().endsWith('-w.png')) {
          mediaElement.classList.add('wide-image');
        }
        if (item.filename.toLowerCase().endsWith('-f.jpg') || item.filename.toLowerCase().endsWith('-f.jpeg') || item.filename.toLowerCase().endsWith('-f.png')) {
          mediaElement.classList.add('four-grid-cells');
        }
        if (item.filename.toLowerCase().endsWith('-t.jpg') || item.filename.toLowerCase().endsWith('-t.jpeg') || item.filename.toLowerCase().endsWith('-t.png')) {
          mediaElement.classList.add('tall-image');
        }
      } else if (/\.(mp4|mov)$/.test(item.filename.toLowerCase())) {
        // Create video element for videos
        mediaElement = document.createElement('video');
        mediaElement.src = `images/${item.filename}`;
        mediaElement.controls = true;  // Add controls for video playback
        mediaElement.alt = item.altText || 'Video';

        // Add relevant classes for videos if needed (optional)
        if (item.filename.toLowerCase().endsWith('-w.mp4') || item.filename.toLowerCase().endsWith('-w.mov')) {
          mediaElement.classList.add('wide-image');
        }
        if (item.filename.toLowerCase().endsWith('-f.mp4') || item.filename.toLowerCase().endsWith('-f.mov')) {
          mediaElement.classList.add('four-grid-cells');
        }
      }
      gallery.appendChild(mediaElement);
    });
  })
  .catch(error => console.error('Error fetching media:', error));
