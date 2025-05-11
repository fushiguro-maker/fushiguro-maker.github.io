let Image = document.createElement("img");
immagine.src = 'cestino-vuoto.jpg';
immagine.addEventListener('load', () => {
    ctx.drawImage(immagine, 0, 0, 320, 240)
  }, false);
  
