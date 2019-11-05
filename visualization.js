d3.csv("/data/survey-data.csv").then(function (data) {
    tabulate(data, data.columns)
});


function tabulate(data, columns) {
    let svg = d3.select("#vis-svg");
    let table = svg.append("foreignObject")
        .attr("width", 800)
        .attr("height", '100%')
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

    let rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

    let cells = rows.selectAll('td')
        .data(function (row) {
            return columns.map(function (column) {
                return {column: column, value: row[column]}
            })
        })
        .enter()
        .append('td')
        .html(function (d) {
            return d.value
        });

    return table
}