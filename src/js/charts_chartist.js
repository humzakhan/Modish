$(function () {
    var lineChart = new Chartist.Line('.ct-chart-line', {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    }, {
        fullWidth: true,
        chartPadding: {
            right: 40
        }
    });

    var lineChartArea = new Chartist.Line('.ct-chart-line-area', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
        ]
    }, {
        low: 0,
        showArea: true
    });

    var bipolarChart = new Chartist.Line('.ct-chart-bipolar', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [1, 2, 3, 1, -2, 0, 1, 0],
            [-2, -1, -2, -1, -2.5, -1, -2, -1],
            [0, 0, 0, 1, 2, 2.5, 2, 1],
            [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
        ]
    }, {
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: false,
        fullWidth: true,
        axisX: {
            showLabel: false,
            showGrid: false
        }
    });

    // Bars Chart
    var dataBars = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
    };

    var optionBars = {
        seriesBarDistance: 10
    };

    var responsiveOptionBars = [
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ];

    var barsChart = new Chartist.Bar('.ct-chart-bars', dataBars, optionBars, responsiveOptionBars);

    // Pie Chart
    var dataPie = {
        series: [5, 3, 4]
    };

    var sum = function (a, b) {
        return a + b
    };

    new Chartist.Pie('.ct-chart-pie', dataPie, {
        labelInterpolationFnc: function (value) {
            return Math.round(value / dataPie.series.reduce(sum) * 100) + '%';
        }
    });

    // Gauge Chart
    var gaugeChart = new Chartist.Pie('.ct-chart-gauge', {
        series: [20, 10, 30, 40]
    }, {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: false
    });
});