const fs = require('fs');
const path = require('path');

// Path to the images directory
const imagesDirectory = path.join(__dirname, '/Abheek/images');

// Function to generate the gallery JSON
async function generateGalleryJSON() {
  const gallery = [];

  try {
    // Read the images directory
    const files = await fs.promises.readdir(imagesDirectory);

    for (const file of files) {
      const filePath = path.join(imagesDirectory, file);
      const stat = await fs.promises.stat(filePath);

      // Check if it's a file
      if (stat.isFile()) {
        // Get creation date and check filename suffix
        const createdDate = stat.birthtime;
        const isWideImage = file.match(/-w\./);
        const isFourGrid = file.match(/-f\./);

        // Push image data to the gallery array
        gallery.push({
          filename: file,
          createdDate: createdDate,
          classes: [
            ...(isWideImage ? ['wide-image'] : []),
            ...(isFourGrid ? ['four-grid-cells'] : []),
          ]
        });
      }
    }

    // Sort by newest first (descending order by creation date)
    gallery.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

    // Write gallery.json file
    const jsonFilePath = path.join(__dirname, 'gallery.json');
    await fs.promises.writeFile(jsonFilePath, JSON.stringify(gallery, null, 2));

    console.log('gallery.json has been generated');
  } catch (error) {
    console.error('Error generating gallery JSON:', error);
  }
}

generateGalleryJSON();
          
