(function () {
    'use strict';
    var controllerId = 'widgets';
    angular.module('Resort').controller(controllerId, ['common', '$scope', '$localStorage', widgets]);

    function widgets(common, $scope, $localStorage) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        //vm.title = 'Admin';

        $scope.$storage = $localStorage;
        $scope.data = {
            people: 20,
            messages: 57,
            tweets: 62
        }

        $scope.$storage = $localStorage.$default({
            data: $scope.data
        });

        setInterval(function updateData() {
            $scope.$storage.data.messages += 3;
            $scope.$storage.data.tweets += 3;
            //$scope.$digest();
        }, 5000);

        setInterval(function updateData2() {
            $scope.$storage.data.people += 2;
            //$scope.$digest();
        }, 8000);

        var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
        var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];

        var flotChartData1 = [
            { label: "Data 1", data: d1, color: '#17a084' },
            { label: "Data 2", data: d2, color: '#127e68' }
        ];

        var flotChartOptions1 = {
            xaxis: {
                tickDecimals: 0
            },
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 1
                        }, {
                            opacity: 1
                        }]
                    }
                },
                points: {
                    width: 0.1,
                    show: false
                }
            },
            grid: {
                show: false,
                borderWidth: 0
            },
            legend: {
                show: false
            }
        };

        var flotChartData2 = [
            { label: "Data 1", data: d1, color: '#19a0a1' }
        ];

        var flotChartOptions2 = {
            xaxis: {
                tickDecimals: 0
            },
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 1
                        }, {
                            opacity: 1
                        }]
                    }
                },
                points: {
                    width: 0.1,
                    show: false
                }
            },
            grid: {
                show: false,
                borderWidth: 0
            },
            legend: {
                show: false
            }
        };

        var flotChartData3 = [
            { label: "Data 1", data: d1, color: '#fbbe7b' },
            { label: "Data 2", data: d2, color: '#f8ac59' }
        ];

        var flotChartOptions3 = {
            xaxis: {
                tickDecimals: 0
            },
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 1
                        }, {
                            opacity: 1
                        }]
                    }
                },
                points: {
                    width: 0.1,
                    show: false
                }
            },
            grid: {
                show: false,
                borderWidth: 0
            },
            legend: {
                show: false
            }
        };

        /**
         * Definition of variables
         * Flot chart
         */

        vm.flotChartData1 = flotChartData1;
        vm.flotChartOptions1 = flotChartOptions1;
        vm.flotChartData2 = flotChartData2;
        vm.flotChartOptions2 = flotChartOptions2;
        vm.flotChartData3 = flotChartData3;
        vm.flotChartOptions3 = flotChartOptions3;

        /**
         * Line Chart Data
         */
        var lineAreaData = [
            {
                label: "line",
                data: [
                    [1, 34],
                    [2, 22],
                    [3, 19],
                    [4, 12],
                    [5, 32],
                    [6, 54],
                    [7, 23],
                    [8, 57],
                    [9, 12],
                    [10, 24],
                    [11, 44],
                    [12, 64],
                    [13, 21]
                ]
            }
        ];

        /**
         * Line Area Chart Options
         */
        var lineAreaOptions = {
            series: {
                lines: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.7
                            },
                            {
                                opacity: 0.5
                            }
                        ]
                    }
                }
            },
            xaxis: {
                tickDecimals: 0
            },
            colors: ["#1ab394"],
            grid: {
                color: "#999999",
                hoverable: true,
                clickable: true,
                tickColor: "#D4D4D4",
                borderWidth: 0
            },
            legend: {
                show: false
            },
            tooltip: true,
            tooltipOpts: {
                content: "x: %x, y: %y"
            }
        };

        $scope.flotLineAreaOptions = lineAreaOptions;
        $scope.flotLineAreaData = lineAreaData;


        var container = $("#flot-line-chart-moving");
        var maximum = container.outerWidth() / 2 || 300;
        var data = [];
        
        function getRandomData() {

            if (data.length) {
                data = data.slice(1);
            }

            while (data.length < maximum) {
                var previous = data.length ? data[data.length - 1] : 50;
                var y = previous + Math.random() * 10 - 5;
                data.push(y < 0 ? 0 : y > 100 ? 100 : y);
            }

            // zip the generated y values with the x values

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]]);
            }

            return res;
        }
        lineAreaData = [{
            data: getRandomData(),
            lines: {
                fill: true
            }
        }];
        //$scope.$apply();
        setInterval(function updateRandom() {
            $scope.flotLineAreaData[0].data = getRandomData();
            $scope.$digest();
            //plot.setData(series);lineAreaData
            //plot.draw();
        }, 40);

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Widgets View'); });
        }
    }
})();