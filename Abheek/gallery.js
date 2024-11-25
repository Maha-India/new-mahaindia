import lightGallery from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3"; র

import lgZoom from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3/plugins/zoom";

lightGallery(document.getElementById("gallery-container"), {
  speed: 500,
  plugins: [lgZoom]
});
