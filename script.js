// * code for data page
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawZooplanktonPieChart);

function drawZooplanktonPieChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Zooplankton Type');
    data.addColumn('number', 'Count');
    data.addRows([
        ['Chaetognatha', 9295],
        ['Zoea Larvae', 10080],
        ['Copepods', 1792],
        ['Luciferidae', 3032],
        ['Larvaceans', 1032],
        ['Cladocerans', 576]
    ]);
  
    // Set chart options
    var options = {
      title: 'Zooplankton Counts by Type',
      titleTextStyle: {
        color: '#dce0e8',
        fontSize: 20
      },
      height: 300,
      width: 600,
      backgroundColor: '#4c4f69',
      legend: {
        textStyle: {
            color: '#dce0e8',
            fontSize: 16
        }
      },
      is3D: true
    };
  
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chartZooplanktonCount'));
    chart.draw(data, options);
}