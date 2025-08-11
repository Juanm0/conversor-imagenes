document.getElementById("convertBtn").addEventListener("click", () => {
    const fileInput = document.getElementById("imageInput");
    const format = document.getElementById("formatSelect").value;
    const preview = document.getElementById("preview");

    if (!fileInput.files.length) {
        alert("Por favor selecciona una imagen");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            // Convertir y mostrar enlace de descarga
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                preview.innerHTML = `
                    <h3>Imagen Convertida:</h3>
                    <img src="${url}">
                    <br>
                    <a href="${url}" download="imagen_convertida.${format.split('/')[1]}">Descargar</a>
                `;
            }, format);
        };
    };

    reader.readAsDataURL(file);
});
