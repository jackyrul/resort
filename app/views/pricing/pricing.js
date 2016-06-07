(function () {
    'use strict';
    var controllerId = 'pricing';
    angular.module('Resort').controller(controllerId, ['common', '$scope', '$localStorage','datacontext','$state','datasevice', pricing]);

    function pricing(common, $scope, $localStorage, datacontext, $state, datasevice) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var id = 'pricing';
        var vm = this;
        $scope.$storage = $localStorage;
        $scope.main = $scope.$storage.main;

        datacontext.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);
            //$scope.main.about.mainimg  = $scope.main.about.mainimg.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
            //$scope.main.about.textimg  = $scope.main.about.textimg.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
            $scope.$storage = $localStorage.$default({
                main: $scope.main
            });
        });


        $scope.changeGroup = function(filter) {
            datasevice.getPages().setGroup(filter);
            $state.go('photo');
        };

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });//log('Activated Widgets View'); });
        }
    }
})();

