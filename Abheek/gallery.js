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

      // Add a span for the date created (acts as a section break)
      const dateSpan = document.createElement('span');
      dateSpan.classList.add('creation-date');
      dateSpan.textContent = formatDate(new Date(item.dateCreated)); // Format the date

      // Append the date span and media element to the gallery
      gallery.appendChild(dateSpan);
      gallery.appendChild(mediaElement);
    });
  })
  .catch(error => console.error('Error fetching media:', error));
function formatDate(date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero to day if needed
  const month = months[date.getMonth()];               // Get month name
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
