const fs = require('fs');
const path = require('path');

// Netlify function to fetch image and video metadata
exports.handler = async function() {
  const mediaDir = path.join(__dirname, '/Abheek/images');  // Adjust path if necessary
  
  try {
    // Read the media directory
    const files = fs.readdirSync(mediaDir);
    
    // Filter images and videos based on extensions
    const media = files.filter(file => /\.(jpg|jpeg|png|mp4|mov)$/.test(file)).map(file => {
      const stats = fs.statSync(path.join(mediaDir, file));
      return {
        filename: file,
        dateCreated: stats.mtime,  // Use modification time as creation date
        altText: file.replace(/[-_]/g, ' ').replace(/\.[a-z]+$/, '')  // Create alt text
      };
    });

    // Sort media by dateCreated (newest first)
    media.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));

    // Return the sorted media metadata
    return {
      statusCode: 200,
      body: JSON.stringify(media)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error reading media directory' })
    };
  }
};
               
