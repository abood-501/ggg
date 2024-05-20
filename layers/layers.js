ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([3839911.423700, 1814998.785400, 6196706.517000, 3783330.798400]);
var wms_layers = [];

var format_Areas_0 = new ol.format.GeoJSON();
var features_Areas_0 = format_Areas_0.readFeatures(json_Areas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_0.addFeatures(features_Areas_0);
var lyr_Areas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_0, 
                style: style_Areas_0,
                popuplayertitle: "Areas",
                interactive: true,
    title: 'Areas<br />\
    <img src="styles/legend/Areas_0_0.png" /> ١٩.٩٠ - ٢٩.٨٨<br />\
    <img src="styles/legend/Areas_0_1.png" /> ٢٩.٨٨ - ٣٠.٣٦<br />\
    <img src="styles/legend/Areas_0_2.png" /> ٣٠.٣٦ - ٣٤.١٤<br />\
    <img src="styles/legend/Areas_0_3.png" /> ٣٤.١٤ - ٣٤.٨٢<br />\
    <img src="styles/legend/Areas_0_4.png" /> ٣٤.٨٢ - ٣٥.٤٠<br />'
        });

lyr_Areas_0.setVisible(true);
var layersList = [lyr_Areas_0];
lyr_Areas_0.set('fieldAliases', {'PROV_NAME_': 'PROV_NAME_', 'الحر_1': 'الحر_1', 'كميات': 'كميات', 'الحرا': 'الحرا', });
lyr_Areas_0.set('fieldImages', {'PROV_NAME_': 'TextEdit', 'الحر_1': 'TextEdit', 'كميات': 'TextEdit', 'الحرا': 'TextEdit', });
lyr_Areas_0.set('fieldLabels', {'PROV_NAME_': 'no label', 'الحر_1': 'no label', 'كميات': 'no label', 'الحرا': 'no label', });
lyr_Areas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});