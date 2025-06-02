function gambar_titik(imageDataTemp, x, y, r, g, b) {
    x = Math.floor(x);
    y = Math.floor(y);
    if (x >= 0 && x < canvasKita.width && y >= 0 && y < canvasKita.height) {
        var index = 4 * (x + (y * canvasKita.width));
        imageDataTemp.data[index] = r;
        imageDataTemp.data[index + 1] = g;
        imageDataTemp.data[index + 2] = b;
        imageDataTemp.data[index + 3] = 255;
    }
}

function gambar_lingkaran(imageDataTemp, xc, yc, radius, r, g, b) {
    for (var x = xc - radius; x <= xc + radius; x++) {
        var y = Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc), 2));
        gambar_titik(imageDataTemp, x, yc + y, r, g, b);
        gambar_titik(imageDataTemp, x, yc - y, r, g, b);
    }
}

function lingkaran_sudut(imageDataTemp, xc, yc, radius, r, g, b) {
    for (var teta = 0; teta < Math.PI * 2; teta += 0.05) {
        var x = xc + radius * Math.cos(teta);
        var y = yc + radius * Math.sin(teta);
        gambar_titik(imageDataTemp, x, y, r, g, b);
    }
}

function gambar_elips(imageDataTemp, xc, yc, rx, ry, r, g, b) {
    for (var teta = 0; teta < Math.PI * 2; teta += 0.05) {
        var x = xc + rx * Math.cos(teta);
        var y = yc + ry * Math.sin(teta);
        gambar_titik(imageDataTemp, x, y, r, g, b);
    }
}

function gambar_titik(imageData, x, y, r, g, b) {
    x = Math.floor(x);
    y = Math.floor(y);
    if (x >= 0 && x < canvasKita.width && y >= 0 && y < canvasKita.height) {
        let index = 4 * (x + y * canvasKita.width);
        imageData.data[index] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
        imageData.data[index + 3] = 255;
    }
}

function dda_line(imageData, x1, y1, x2, y2, r, g, b) {
    let dx = x2 - x1;
    let dy = y2 - y1;

    let steps = Math.max(Math.abs(dx), Math.abs(dy));

    let xInc = dx / steps;
    let yInc = dy / steps;

    let x = x1;
    let y = y1;

    for (let i = 0; i <= steps; i++) {
        gambar_titik(imageData, x, y, r, g, b);
        x += xInc;
        y += yInc;
    }
}

function polygon(imageData, point_array, r, g, b) {
    if (point_array.length < 2) return;

    let point = point_array[0];

    for (let i = 1; i < point_array.length; i++) {
        let point_2 = point_array[i];
        dda_line(imageData, point.x, point.y, point_2.x, point_2.y, r, g, b);
        point = point_2;
    }

    // Tutup garis ke titik awal
    dda_line(imageData, point.x, point.y, point_array[0].x, point_array[0].y, r, g, b);
}

function floodFill(imageData, canvas, x, y, toFlood, color) {
    // Cek batas canvas
    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
        return;
    }

    // Hitung index data array
    const index = 4 * (x + y * canvas.width);

    // Ambil warna piksel saat ini
    const r1 = imageData.data[index];
    const g1 = imageData.data[index + 1];
    const b1 = imageData.data[index + 2];

    // Cek apakah warna cocok dengan warna yang akan diganti
    if (r1 === toFlood.r && g1 === toFlood.g && b1 === toFlood.b) {
        // Ganti warna piksel
        imageData.data[index]     = color.r;
        imageData.data[index + 1] = color.g;
        imageData.data[index + 2] = color.b;
        imageData.data[index + 3] = 255; // alpha (fully opaque)

        // Rekursif ke 4 arah
        floodFill(imageData, canvas, x + 1, y, toFlood, color); // kanan
        floodFill(imageData, canvas, x - 1, y, toFlood, color); // kiri
        floodFill(imageData, canvas, x, y + 1, toFlood, color); // bawah
        floodFill(imageData, canvas, x, y - 1, toFlood, color); // atas
    }
}

function transform(titik_lama, T){
    var x_baru = titik_lama.x + T.x;
    var y_baru = titik_lama.y + T.y;

    return {x:x_baru, y:y_baru};
    
}
