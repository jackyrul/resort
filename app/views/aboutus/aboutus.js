(function () {
    'use strict';
    var controllerId = 'aboutus';
    angular.module('Resort').controller(controllerId, ['common', '$scope', '$localStorage', '$http','datacontext','$window', aboutus]);

    function aboutus(common, $scope, $localStorage, $http, datacontext, $window) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var id = 'about';
        var vm = this;
        $scope.$storage = $localStorage;
        $scope.main = $scope.$storage.main;

        datacontext.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);
            $scope.main.about.mainimg  = $scope.main.about.mainimg.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
            $scope.main.about.textimg  = $scope.main.about.textimg.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
            $scope.main.about.maintext = $scope.main.about.maintext.split(/\n/);
            //$scope.$storage = $scope.$storage.$default({
            //    main: $scope.main
            //});
            $scope.$storage.main = $scope.main;

        });

        if($window.innerWidth <630){
            $scope.count = 2;
        }else if($window.innerWidth <991) {
            $scope.count = 3;
        }else {
            $scope.count = 4;
        }

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });//log('Activated Widgets View'); });
        }
    }
})();