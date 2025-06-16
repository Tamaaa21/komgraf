function dda_line(imageData, x1, y1, x2, y2, r, g, b) {
    var dx = x2 - x1; //bisa positif, bisa negatif
    var dy = y2 - y1; //bisa positif, bisa negatif

    if (Math.abs(dx) > Math.abs(dy)) {
        //jalan di sumbu x
        if (x2 > x1) {
            //ke kanan
            var y = y1;
            for (var x = x1; x <= x2; x++) {
                y = y + dy / Math.abs(dx); //1/m
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
            }
        }
        else {
            //ke kiri
            var y = y1;
            for (var x = x1; x >= x2; x--) {
                y = y + dy / Math.abs(dx); //1/m
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
            }
        }
    }
    else {
        //jalan di sumbu y
        if (y2 > y1) {
            //ke kanan
            var x = x1;
            for (var y = y1; y <= y2; y++) {
                x = x + dx / Math.abs(dy); //m
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
            }
        }
        else {
            //ke kiri
            var x = x1;
            for (var y = y1; y >= y2; y--) {
                x = x + dx / Math.abs(dy); //m
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
            }
        }
    }

}
