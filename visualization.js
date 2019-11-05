d3.csv("/data/survey-data.csv").then(function (data) {
    tabulate(data, data.columns)
});


function tabulate(data, columns) {
    let svg = d3.select("#vis-svg");
    let table = svg.append("foreignObject")
        .attr("width", 480)
        .attr("height", 500)
        .append("xhtml:body");
    let thead = table.append("thead");
    let tbody = table.append("tbody");

    thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function (column) {
            return column
        });

    return table
}