var wms_layers = [];

var lyr_OpenStreetMap_0 = new ol.layer.Tile({
  title: "OpenStreetMap",
  //'type': 'base',
  opacity: 1.0,

  source: new ol.source.XYZ({
    attributions: " ",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  }),
});
var format_AdministrasiPonggok_1 = new ol.format.GeoJSON();
var features_AdministrasiPonggok_1 = format_AdministrasiPonggok_1.readFeatures(json_AdministrasiPonggok_1, { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" });
var jsonSource_AdministrasiPonggok_1 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_AdministrasiPonggok_1.addFeatures(features_AdministrasiPonggok_1);
var lyr_AdministrasiPonggok_1 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_AdministrasiPonggok_1,
  style: style_AdministrasiPonggok_1,
  popuplayertitle: "Administrasi Ponggok",
  interactive: true,
  title: '<img src="styles/legend/AdministrasiPonggok_1.png" /> Administrasi Ponggok',
});
var format_UMKMdanSaranaPrasarana_2 = new ol.format.GeoJSON();
var features_UMKMdanSaranaPrasarana_2 = format_UMKMdanSaranaPrasarana_2.readFeatures(json_UMKMdanSaranaPrasarana_2, { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" });
var jsonSource_UMKMdanSaranaPrasarana_2 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_UMKMdanSaranaPrasarana_2.addFeatures(features_UMKMdanSaranaPrasarana_2);
var lyr_UMKMdanSaranaPrasarana_2 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_UMKMdanSaranaPrasarana_2,
  style: style_UMKMdanSaranaPrasarana_2,
  popuplayertitle: "UMKM dan Sarana Prasarana",
  interactive: true,
  title:
    'UMKM dan Sarana Prasarana<br />\
<img src="styles/working-tools-svgrepo-com.svg" /> (Bengkel)<br />\
<img src="styles/food-restaurant-svgrepo-com.svg" /> (Kuliner)<br />\
<img src="styles/mosque-svgrepo-com (1).svg" /> (Masjid)<br />\
<img src="styles/market-purchase-svgrepo-com.svg" /> (Toko Kelontong)<br />\
<img src="styles/coin-svgrepo-com.svg" /> (UMKM)<br />\
<img src="styles/hotel-svgrepo-com.svg" /> (Penginapan)<br />',
});

lyr_OpenStreetMap_0.setVisible(true);
lyr_AdministrasiPonggok_1.setVisible(true);
lyr_UMKMdanSaranaPrasarana_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0, lyr_AdministrasiPonggok_1, lyr_UMKMdanSaranaPrasarana_2];
lyr_AdministrasiPonggok_1.set("fieldAliases", { Id: "Id", topo_desa: "topo_desa", topo_dusun: "topo_dusun", topo_rw: "topo_rw" });
lyr_UMKMdanSaranaPrasarana_2.set("fieldAliases", { Foto: "Foto", Sarana: "Sarana", X: "X", Y: "Y", Deskripsi: "Deskripsi", Jam_Operas: "Jam_Operas", Contact_Pe: "Contact_Pe", Fasilitas: "Fasilitas", Metode_bay: "Metode_bay" });
lyr_AdministrasiPonggok_1.set("fieldImages", { Id: "Range", topo_desa: "TextEdit", topo_dusun: "TextEdit", topo_rw: "TextEdit" });
lyr_UMKMdanSaranaPrasarana_2.set("fieldImages", {
  Foto: "ExternalResource",
  Sarana: "TextEdit",
  X: "TextEdit",
  Y: "TextEdit",
  Deskripsi: "TextEdit",
  Jam_Operas: "TextEdit",
  Contact_Pe: "TextEdit",
  Fasilitas: "TextEdit",
  Metode_bay: "TextEdit",
});
lyr_AdministrasiPonggok_1.set("fieldLabels", { Id: "hidden field", topo_desa: "no label", topo_dusun: "hidden field", topo_rw: "hidden field" });
lyr_UMKMdanSaranaPrasarana_2.set("fieldLabels", {
  Foto: "no label",
  Sarana: "inline label - visible with data",
  X: "inline label - visible with data",
  Y: "inline label - visible with data",
  Deskripsi: "inline label - visible with data",
  Jam_Operas: "inline label - visible with data",
  Contact_Pe: "inline label - visible with data",
  Fasilitas: "inline label - visible with data",
  Metode_bay: "inline label - visible with data",
});
lyr_UMKMdanSaranaPrasarana_2.on("precompose", function (evt) {
  evt.context.globalCompositeOperation = "normal";
});
