function gambar_titik (imageDataTemp, x, y, r, g, b) {
var index;
index =4 * (x+
    y *canvasKita.width);
imageDataTemp.data[index + 0] = r; // red
imageDataTemp.data[index + 1] = g; // green     
imageDataTemp.data[index + 2] = b; // blue
imageDataTemp.data[index + 3] = 255; // alpha

}
function gambar_lingkaran (imageDataTemp, xc, yc,radius, r, g, b) {
    for (var x=xc-radius;x<=xc+radius; x++){
var y = Math.sqrt (Math.pow(radius,2) - Math.pow((x - xc),2)) + yc;
    gambar_titik (imageDataTemp,Math.ceil(x),Math.ceil(y),r,g,b);
var y =-Math.sqrt (Math.pow(radius,2) - Math.pow((x - xc),2)) + yc;
    gambar_titik (imageDataTemp,Math.ceil(x),Math.ceil(y),r,g,b);
}
    for (var x=xc-radius;x<=xc+radius; x++){
var y = Math.sqrt (Math.pow(radius,2) - Math.pow((x - xc),2)) + yc;
    gambar_titik (imageDataTemp,Math.ceil(y),Math.ceil(x),r,g,b);
var y =-Math.sqrt (Math.pow(radius,2) - Math.pow((x - xc),2)) + yc;
    gambar_titik (imageDataTemp,Math.ceil(y),Math.ceil(x),r,g,b);
}
}

function gambar_elips (imageDataTemp, xc, yc,radius, r, g, b) {
    for (var x=xc-radius;x<=xc+radius; x++){
var y = Math.sqrt (Math.pow(radius,2) - Math.pow((x - xc),2)) + yc;
    gambar_titik (imageDataTemp,Math.ceil(x),Math.ceil(y),r,g,b);
var y =-Math.sqrt (Math.pow(radius,2) - Math.pow((x - xc),2)) + yc;
    gambar_titik (imageDataTemp,Math.ceil(x),Math.ceil(y),r,g,b);
}
    for (var x=xc-radius;x<=xc+radius; x++){
var y = Math.sqrt (Math.pow(radius,2) - Math.pow((x - xc),2)) + yc;
    gambar_titik (imageDataTemp,Math.ceil(y),Math.ceil(x),r,g,b);
var y =-Math.sqrt (Math.pow(radius,2) - Math.pow((x - xc),2)) + yc;
    gambar_titik (imageDataTemp,Math.ceil(y),Math.ceil(x),r,g,b);
}
}



function lingkaran_sudut(imageDataTemp, xc, yc, radius, r, g, b) {
  for (var teta = 0; teta < Math.PI * 2; teta += 0.1) {
    x = xc + radius * Math.cos(teta);
    y = yc + radius * Math.sin(teta);
    gambar_titik(imageDataTemp, Math.ceil(x), Math.ceil(y), r, g, b);
  }
}
