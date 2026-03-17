ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-45.414311, -23.826834, -45.373826, -23.803848]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FundeadourosLongoPrazo_1 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_1 = format_FundeadourosLongoPrazo_1.readFeatures(json_FundeadourosLongoPrazo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_1.addFeatures(features_FundeadourosLongoPrazo_1);
var lyr_FundeadourosLongoPrazo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_1, 
                style: style_FundeadourosLongoPrazo_1,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_1.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_2 = format_FundeadourosMdioPrazo_2.readFeatures(json_FundeadourosMdioPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_2.addFeatures(features_FundeadourosMdioPrazo_2);
var lyr_FundeadourosMdioPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_2, 
                style: style_FundeadourosMdioPrazo_2,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_2.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_3 = format_FundeadourosCurtoPrazo_3.readFeatures(json_FundeadourosCurtoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_3.addFeatures(features_FundeadourosCurtoPrazo_3);
var lyr_FundeadourosCurtoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_3, 
                style: style_FundeadourosCurtoPrazo_3,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_3.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_4 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_4 = format_FundeadourosSituaoAtual_4.readFeatures(json_FundeadourosSituaoAtual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_4.addFeatures(features_FundeadourosSituaoAtual_4);
var lyr_FundeadourosSituaoAtual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_4, 
                style: style_FundeadourosSituaoAtual_4,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_4.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_5 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_5 = format_BaciasdeEvoluoLongoPrazo_5.readFeatures(json_BaciasdeEvoluoLongoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_5.addFeatures(features_BaciasdeEvoluoLongoPrazo_5);
var lyr_BaciasdeEvoluoLongoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_5, 
                style: style_BaciasdeEvoluoLongoPrazo_5,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_5.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_6 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_6 = format_BaciasdeEvoluoMdioPrazo_6.readFeatures(json_BaciasdeEvoluoMdioPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_6.addFeatures(features_BaciasdeEvoluoMdioPrazo_6);
var lyr_BaciasdeEvoluoMdioPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_6, 
                style: style_BaciasdeEvoluoMdioPrazo_6,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_6.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_7 = format_BaciasdeEvoluoCurtoPrazo_7.readFeatures(json_BaciasdeEvoluoCurtoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_7.addFeatures(features_BaciasdeEvoluoCurtoPrazo_7);
var lyr_BaciasdeEvoluoCurtoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_7, 
                style: style_BaciasdeEvoluoCurtoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_7.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_8 = format_BaciasdeEvoluoSituaoAtual_8.readFeatures(json_BaciasdeEvoluoSituaoAtual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_8.addFeatures(features_BaciasdeEvoluoSituaoAtual_8);
var lyr_BaciasdeEvoluoSituaoAtual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_8, 
                style: style_BaciasdeEvoluoSituaoAtual_8,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_8.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_9 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_9 = format_CanaisdeAcessoLongoPrazo_9.readFeatures(json_CanaisdeAcessoLongoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_9.addFeatures(features_CanaisdeAcessoLongoPrazo_9);
var lyr_CanaisdeAcessoLongoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_9, 
                style: style_CanaisdeAcessoLongoPrazo_9,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_9.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_10 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_10 = format_CanaisdeAcessoMdioPrazo_10.readFeatures(json_CanaisdeAcessoMdioPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_10.addFeatures(features_CanaisdeAcessoMdioPrazo_10);
var lyr_CanaisdeAcessoMdioPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_10, 
                style: style_CanaisdeAcessoMdioPrazo_10,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_10.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_11 = format_CanaisdeAcessoCurtoPrazo_11.readFeatures(json_CanaisdeAcessoCurtoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_11.addFeatures(features_CanaisdeAcessoCurtoPrazo_11);
var lyr_CanaisdeAcessoCurtoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_11, 
                style: style_CanaisdeAcessoCurtoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_11.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_12 = format_CanaisdeAcessoSituaoAtual_12.readFeatures(json_CanaisdeAcessoSituaoAtual_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_12.addFeatures(features_CanaisdeAcessoSituaoAtual_12);
var lyr_CanaisdeAcessoSituaoAtual_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_12, 
                style: style_CanaisdeAcessoSituaoAtual_12,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_12.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosRodoviriosInternosLongoPrazo_13 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_13 = format_AcessosRodoviriosInternosLongoPrazo_13.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_13.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_13);
var lyr_AcessosRodoviriosInternosLongoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_13, 
                style: style_AcessosRodoviriosInternosLongoPrazo_13,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_13.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_14 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_14 = format_AcessosRodoviriosInternosMdioPrazo_14.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_14.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_14);
var lyr_AcessosRodoviriosInternosMdioPrazo_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_14, 
                style: style_AcessosRodoviriosInternosMdioPrazo_14,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_14.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_15 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_15 = format_AcessosRodoviriosInternosCurtoPrazo_15.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_15.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_15);
var lyr_AcessosRodoviriosInternosCurtoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_15, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_15,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_15.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_16 = format_AcessosRodoviriosInternosSituaoAtual_16.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_16.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_16);
var lyr_AcessosRodoviriosInternosSituaoAtual_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_16, 
                style: style_AcessosRodoviriosInternosSituaoAtual_16,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_16.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_17 = format_AcessosRodoviriosExternos_17.readFeatures(json_AcessosRodoviriosExternos_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_17.addFeatures(features_AcessosRodoviriosExternos_17);
var lyr_AcessosRodoviriosExternos_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_17, 
                style: style_AcessosRodoviriosExternos_17,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_17.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_26 = format_reasNoAfetassOperaesPorturiasLongoPrazo_26.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_26.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_26);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_26, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_26.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_27 = format_reasNoAfetassOperaesPorturiasMdioPrazo_27.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_27.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_27);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_27, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_27.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_28 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_28.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_28.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_28);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_28, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_28.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_29 = format_reasNoAfetassOperaesPorturiasSituaoAtual_29.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_29.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_29);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_29, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_29.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_reaseInstalaesAlfandegadas_30 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_30 = format_reaseInstalaesAlfandegadas_30.readFeatures(json_reaseInstalaesAlfandegadas_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_30.addFeatures(features_reaseInstalaesAlfandegadas_30);
var lyr_reaseInstalaesAlfandegadas_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_30, 
                style: style_reaseInstalaesAlfandegadas_30,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_30.png" /> Áreas e Instalações Alfandegadas '
            });
var format_AcostagemLongoPrazo_31 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_31 = format_AcostagemLongoPrazo_31.readFeatures(json_AcostagemLongoPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_31.addFeatures(features_AcostagemLongoPrazo_31);
var lyr_AcostagemLongoPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_31, 
                style: style_AcostagemLongoPrazo_31,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_31.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_32 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_32 = format_AcostagemMdioPrazo_32.readFeatures(json_AcostagemMdioPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_32.addFeatures(features_AcostagemMdioPrazo_32);
var lyr_AcostagemMdioPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_32, 
                style: style_AcostagemMdioPrazo_32,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_32.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_33 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_33 = format_AcostagemCurtoPrazo_33.readFeatures(json_AcostagemCurtoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_33.addFeatures(features_AcostagemCurtoPrazo_33);
var lyr_AcostagemCurtoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_33, 
                style: style_AcostagemCurtoPrazo_33,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_33.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_34 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_34 = format_AcostagemSituaoAtual_34.readFeatures(json_AcostagemSituaoAtual_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_34.addFeatures(features_AcostagemSituaoAtual_34);
var lyr_AcostagemSituaoAtual_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_34, 
                style: style_AcostagemSituaoAtual_34,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_34.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_35 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_35 = format_ArmazenagemLongoPrazo_35.readFeatures(json_ArmazenagemLongoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_35.addFeatures(features_ArmazenagemLongoPrazo_35);
var lyr_ArmazenagemLongoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_35, 
                style: style_ArmazenagemLongoPrazo_35,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_35.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_36 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_36 = format_ArmazenagemMdioPrazo_36.readFeatures(json_ArmazenagemMdioPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_36.addFeatures(features_ArmazenagemMdioPrazo_36);
var lyr_ArmazenagemMdioPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_36, 
                style: style_ArmazenagemMdioPrazo_36,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_36.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_37 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_37 = format_ArmazenagemCurtoPrazo_37.readFeatures(json_ArmazenagemCurtoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_37.addFeatures(features_ArmazenagemCurtoPrazo_37);
var lyr_ArmazenagemCurtoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_37, 
                style: style_ArmazenagemCurtoPrazo_37,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_37.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_38 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_38 = format_ArmazenagemSituaoAtual_38.readFeatures(json_ArmazenagemSituaoAtual_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_38.addFeatures(features_ArmazenagemSituaoAtual_38);
var lyr_ArmazenagemSituaoAtual_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_38, 
                style: style_ArmazenagemSituaoAtual_38,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_38.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_43 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_43 = format_reasAfetassOperaesPorturiasLongoPrazo_43.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_43.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_43);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_43, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_43,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_43.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_44 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_44 = format_reasAfetassOperaesPorturiasMdioPrazo_44.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_44.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_44);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_44, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_44,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_44.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_45 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_45 = format_reasAfetassOperaesPorturiasCurtoPrazo_45.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_45.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_45);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_45, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_45,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_45.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_46 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_46 = format_reasAfetassOperaesPorturiasSituaoAtual_46.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_46.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_46);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_46, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_46,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_46.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeSoSebastio_47 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeSoSebastio_47 = format_PoligonaldareadoPortoOrganizadodeSoSebastio_47.readFeatures(json_PoligonaldareadoPortoOrganizadodeSoSebastio_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeSoSebastio_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeSoSebastio_47.addFeatures(features_PoligonaldareadoPortoOrganizadodeSoSebastio_47);
var lyr_PoligonaldareadoPortoOrganizadodeSoSebastio_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeSoSebastio_47, 
                style: style_PoligonaldareadoPortoOrganizadodeSoSebastio_47,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de São Sebastião',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeSoSebastio_47.png" /> Poligonal da Área do Porto Organizado de São Sebastião'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeSoSebastio_47,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_43,lyr_reasAfetassOperaesPorturiasMdioPrazo_44,lyr_reasAfetassOperaesPorturiasCurtoPrazo_45,lyr_reasAfetassOperaesPorturiasSituaoAtual_46,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_35,lyr_ArmazenagemMdioPrazo_36,lyr_ArmazenagemCurtoPrazo_37,lyr_ArmazenagemSituaoAtual_38,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_31,lyr_AcostagemMdioPrazo_32,lyr_AcostagemCurtoPrazo_33,lyr_AcostagemSituaoAtual_34,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_30,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_26,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_27,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_28,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_29,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_17,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_13,lyr_AcessosRodoviriosInternosMdioPrazo_14,lyr_AcessosRodoviriosInternosCurtoPrazo_15,lyr_AcessosRodoviriosInternosSituaoAtual_16,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_9,lyr_CanaisdeAcessoMdioPrazo_10,lyr_CanaisdeAcessoCurtoPrazo_11,lyr_CanaisdeAcessoSituaoAtual_12,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_5,lyr_BaciasdeEvoluoMdioPrazo_6,lyr_BaciasdeEvoluoCurtoPrazo_7,lyr_BaciasdeEvoluoSituaoAtual_8,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_1,lyr_FundeadourosMdioPrazo_2,lyr_FundeadourosCurtoPrazo_3,lyr_FundeadourosSituaoAtual_4,],
                                fold: 'open',
                                title: 'Fundeadouros '});

lyr_GoogleSatellite_0.setVisible(true);lyr_FundeadourosLongoPrazo_1.setVisible(false);lyr_FundeadourosMdioPrazo_2.setVisible(false);lyr_FundeadourosCurtoPrazo_3.setVisible(false);lyr_FundeadourosSituaoAtual_4.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_5.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_6.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_8.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_9.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_10.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_11.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_12.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_13.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_14.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_15.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_16.setVisible(false);lyr_AcessosRodoviriosExternos_17.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_29.setVisible(false);lyr_reaseInstalaesAlfandegadas_30.setVisible(false);lyr_AcostagemLongoPrazo_31.setVisible(false);lyr_AcostagemMdioPrazo_32.setVisible(false);lyr_AcostagemCurtoPrazo_33.setVisible(false);lyr_AcostagemSituaoAtual_34.setVisible(false);lyr_ArmazenagemLongoPrazo_35.setVisible(false);lyr_ArmazenagemMdioPrazo_36.setVisible(false);lyr_ArmazenagemCurtoPrazo_37.setVisible(false);lyr_ArmazenagemSituaoAtual_38.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_43.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_44.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_45.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_46.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeSoSebastio_47.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_reaseInstalaesAlfandegadas,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_FundeadourosLongoPrazo_1.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'FUNCAO': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_2.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'FUNCAO': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_3.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'FUNCAO': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_4.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'FUNCAO': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldAliases', {'TRECHO': 'Trecho ', 'CALADO': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldAliases', {'TRECHO': 'Trecho ', 'CALADO': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldAliases', {'TRECHO': 'Trecho ', 'CALADO': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldAliases', {'TRECHO': 'Trecho ', 'CALADO': 'Calado (m) ', });
lyr_AcessosRodoviriosInternosLongoPrazo_13.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_14.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_15.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_16.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_17.set('fieldAliases', {'Nome': 'Nome ', 'SIGLA': 'Sigla ', 'JURISDICAO': 'Jurisdição ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18.set('fieldAliases', {'NOME': 'Nome ', 'T. EXPLO.': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'UTIL. ÁRE': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19.set('fieldAliases', {'NOME': 'Nome ', 'T. EXPLO.': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'UTIL. ÁRE': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20.set('fieldAliases', {'NOME': 'Nome ', 'T. EXPLO.': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'UTIL. ÁRE': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21.set('fieldAliases', {'NOME': 'Nome ', 'T. EXPLO.': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'UTIL. ÁRE': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Termino': 'Data de Término do Contrato ', 'A. Desenvo': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Termino': 'Data de Término do Contrato ', 'A. Desenvo': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Termino': 'Data de Término do Contrato ', 'A. Desenvo': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Termino': 'Data de Término do Contrato ', 'A. Desenvo': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_26.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Destinaça': 'Destinação ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_27.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Destinaça': 'Destinação ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_28.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Destinaça': 'Destinação ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_29.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Destinaça': 'Destinação ', });
lyr_reaseInstalaesAlfandegadas_30.set('fieldAliases', {'Instrument': 'Instrumento Legal ', });
lyr_AcostagemLongoPrazo_31.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_32.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_33.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_34.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_35.set('fieldAliases', {'Nome': 'Nome', 'T. Instal.': 'Tipo da Instalação ', 'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemMdioPrazo_36.set('fieldAliases', {'Nome': 'Nome', 'T. Instal.': 'Tipo da Instalação ', 'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemCurtoPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'T. Instal.': 'Tipo da Instalação ', 'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemSituaoAtual_38.set('fieldAliases', {'Nome': 'Nome', 'T. Instal.': 'Tipo da Instalação ', 'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_43.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_44.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_45.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_46.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_PoligonaldareadoPortoOrganizadodeSoSebastio_47.set('fieldAliases', {'Instrument': 'Instrumento Legal ', 'Anexo': 'Anexo ', });
lyr_FundeadourosLongoPrazo_1.set('fieldImages', {'N. Ident.': 'TextEdit', 'FUNCAO': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_2.set('fieldImages', {'N. Ident.': 'TextEdit', 'FUNCAO': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_3.set('fieldImages', {'N. Ident.': 'TextEdit', 'FUNCAO': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_4.set('fieldImages', {'N. Ident.': 'TextEdit', 'FUNCAO': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldImages', {'TRECHO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldImages', {'TRECHO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldImages', {'TRECHO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldImages', {'TRECHO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_13.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_14.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_15.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_16.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_17.set('fieldImages', {'Nome': 'TextEdit', 'SIGLA': 'TextEdit', 'JURISDICAO': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18.set('fieldImages', {'NOME': 'TextEdit', 'T. EXPLO.': 'TextEdit', 'Área': 'TextEdit', 'UTIL. ÁRE': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19.set('fieldImages', {'NOME': 'TextEdit', 'T. EXPLO.': 'TextEdit', 'Área': 'TextEdit', 'UTIL. ÁRE': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20.set('fieldImages', {'NOME': 'TextEdit', 'T. EXPLO.': 'TextEdit', 'Área': 'TextEdit', 'UTIL. ÁRE': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21.set('fieldImages', {'NOME': 'TextEdit', 'T. EXPLO.': 'TextEdit', 'Área': 'TextEdit', 'UTIL. ÁRE': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'Área': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Termino': 'DateTime', 'A. Desenvo': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'Área': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Termino': 'DateTime', 'A. Desenvo': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'Área': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Termino': 'DateTime', 'A. Desenvo': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'Área': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Termino': 'DateTime', 'A. Desenvo': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_26.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Destinaça': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_27.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Destinaça': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_28.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Destinaça': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_29.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Destinaça': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_30.set('fieldImages', {'Instrument': 'TextEdit', });
lyr_AcostagemLongoPrazo_31.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_32.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_33.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_34.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_35.set('fieldImages', {'Nome': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_36.set('fieldImages', {'Nome': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_38.set('fieldImages', {'Nome': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_43.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_44.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_45.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_46.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeSoSebastio_47.set('fieldImages', {'Instrument': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_FundeadourosLongoPrazo_1.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'FUNCAO': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_2.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'FUNCAO': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_3.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'FUNCAO': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_4.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'FUNCAO': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldLabels', {'TRECHO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldLabels', {'TRECHO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldLabels', {'TRECHO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldLabels', {'TRECHO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_13.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_14.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_15.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_16.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'SIGLA': 'inline label - visible with data', 'JURISDICAO': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_18.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T. EXPLO.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'UTIL. ÁRE': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_19.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T. EXPLO.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'UTIL. ÁRE': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_20.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T. EXPLO.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'UTIL. ÁRE': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_21.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T. EXPLO.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'UTIL. ÁRE': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_22.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Termino': 'inline label - visible with data', 'A. Desenvo': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_23.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Termino': 'inline label - visible with data', 'A. Desenvo': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_24.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Termino': 'inline label - visible with data', 'A. Desenvo': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_25.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Termino': 'inline label - visible with data', 'A. Desenvo': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Destinaça': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Destinaça': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Destinaça': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_29.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Destinaça': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_30.set('fieldLabels', {'Instrument': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_31.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_32.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_33.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_34.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_40.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_41.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_42.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_46.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeSoSebastio_47.set('fieldLabels', {'Instrument': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeSoSebastio_47.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});