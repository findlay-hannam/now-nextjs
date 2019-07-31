import ImageGallery from 'react-grid-gallery';

import images from '../resources/images';
const formattedImages = images
  .map(url => ({
    src: url,
    thumbnail: url,
  }));

export default function Gallery() {
  return <ImageGallery images={formattedImages} />;
}
