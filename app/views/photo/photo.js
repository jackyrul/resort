(function () {
    'use strict';
    var controllerId = 'photo';
    angular.module('Resort').controller(controllerId, ['common', '$scope', '$localStorage','datacontext','datasevice', photo]);

    function photo(common, $scope, $localStorage, datacontext, datasevice) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        $scope.group = datasevice.getPages().getGroup()== 'all' ? '' : datasevice.getPages().getGroup();

        var id = 'photo';
        //$scope.transactions = [];
        $scope.photosPage = 1;
        //$scope.photospaging ={};
        var vm = this;
        //vm.title = 'Admin';
        $scope.changeGroup = function(filter) {
            $scope.group = filter;
            $scope.photospaging = $scope.main.photos.filter(function(item) {
                return item.group == filter || filter == '';
            });
        };
        $scope.$storage = $localStorage;
        //$scope.main = $scope.$storage.main;

        datacontext.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);

            for(var i = 0; i < $scope.main.photos.length; i++){
                $scope.main.photos[i].src = $scope.main.photos[i].src.replace('https://www.dropbox.com/', 'https://dl.dropboxusercontent.com/');
                $scope.photospaging = $scope.main.photos;
            }
            //$scope.$storage.main = $scope.main;

        });

        datasevice.getPages().setGroup('all');
        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });//log('Activated Widgets View'); });
        }
    }
})();

