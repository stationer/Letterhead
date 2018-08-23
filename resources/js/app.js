import $ from 'jquery';
import 'bootstrap';
import Chart from 'chart.js';

$(document).ready(function($) {
    $("#menu-toggle").on('click', function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("[id^=subnav-menu-]").on('show.bs.collapse', function () {
        $(this).parent().toggleClass('show');
    });

    $("[id^=subnav-menu]").on('hidden.bs.collapse', function () {
        $(this).parent().toggleClass('show');
    });


    ['chart-1', 'chart-2', 'chart-3'].forEach(function(item) {
        var ctx = document.getElementById(item);
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [0,1,2,3,4,5],
                datasets: [{
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 3
                }]
            },
            options: {
                global: {
                    responsive: true,
                    maintainAspectRatio: false,
                    bezierCurve : false,

                },
                scaleShowLabels : false,
                tooltips: {
                    enabled: false
                },

                legend: {
                    display: false
                },
                elements: {
                    point: {
                        radius: 0
                    },
                    line: {
                        tension: 0
                    }
                },
                scales: {
                    yAxes: [{
                        display:false
                    }],
                    xAxes: [{
                        display:false
                    }]
                }
            }
        });
    })

});
