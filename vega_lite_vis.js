var vg_1 = "homeworkw10.vg.json";
var vg_2 = "homeworkw9.vg.json";
vegaEmbed("#line_chart", vg_1) .then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#map", vg_2).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);