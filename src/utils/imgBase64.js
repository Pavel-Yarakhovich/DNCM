export default (img) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 250;
        canvas.height = 250;
        // img.width and img.height will contain the original dimensions
        ctx.drawImage(img, 0, 0, 250, 250);

        const b64 = canvas.toDataURL("image/png");
        resolve(b64);
      };
    };
    reader.onerror = (error) => {
      console.error(error);
      resolve("");
    };
  });
};
