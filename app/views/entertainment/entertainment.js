(function () {
    'use strict';
    var controllerId = 'entertainment';
    angular.module('Resort').controller(controllerId, ['common', '$scope', '$localStorage', '$http','datacontext', entertainment]);

    function entertainment(common, $scope, $localStorage, $http, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var id  = 'entertainment';
        var vm = this;
        $scope.$storage = $localStorage;
        $scope.main = $scope.$storage.main;

        datacontext.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);

            for(var i = 0; i < $scope.main.entertainment.length; i++){
                $scope.main.entertainment[i].src = $scope.main.entertainment[i].src.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
            }
            $scope.$storage = $localStorage.$default({
                main: $scope.main
            });
        });

        //$scope.entertein = datacontext.getEntertein();
        $scope.sales = datacontext.getSales();
        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });//log('Activated Widgets View'); });
        }
    }

})();
