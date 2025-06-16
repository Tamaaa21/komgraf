function translasi(titik_lama, T) {
  var x_baru = titik_lama.x + T.x;
  var y_baru = titik_lama.y + T.y;

  return { x: x_baru, y: y_baru };
}
function rotasi_fp(tititk_lama, titik_putar, sudut){
    var p1= translasi(titik_lama, { x:-titik_putar.x, y :-titik_putar.y});
    var p2 = rotasi(p1, sudut);
    var p3 = translasi (p2, titik_putar);
    return p3;
}