import { useState, useEffect } from 'react';

export const useLightbox = () => {
   const [lightbox, setLightbox] = useState(false);
   const [lightboxImage, setLightboxImage] = useState(0)
   
   const handleClose = () => setLightbox(false)

   useEffect(() => {
      const handleOpen = (val) => setLightboxImage(() => val == 'imageA' ? 1 : 2)

      const imageA = document?.getElementById('imageA')
      const imageB = document?.getElementById('imageB')

      if (imageA && imageB) {
         imageA.addEventListener('click', () => handleOpen('imageA'));
         imageB.addEventListener('click', () => handleOpen('imageB'));
      }

      // window.addEventListener('click', (e) => handleOpen());

      return () => {
         imageA.removeEventListener('click', handleOpen);
         imageB.removeEventListener('click', handleOpen);
      }
   }, []);

   useEffect(() => {
      if (lightboxImage > 0) setLightbox(true)
   }, [lightboxImage])

   useEffect(() => {
      if (!lightbox) setLightboxImage(0)
   }, [lightbox])

   return { lightbox, lightboxImage, handleClose }
}
