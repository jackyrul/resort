(function () {
    'use strict';
    var controllerId = 'entertainment';
    angular.module('resortadmin').controller(controllerId, ['common', '$scope', 'dataservice', '$timeout', photo]);

    function photo(common, $scope, dataservice, $timeout) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var id = 'entertainment';
        $scope.master = {};
        $scope.main = {};
        //$scope.main.entertainment={};

        dataservice.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);
            $scope.master = angular.copy(JSON.parse(data.data));
            $timeout(expand, 0);
        });

        $scope.delete = function(index){
            $scope.main.entertainment.splice(index, 1);
        }

        $scope.add = function(){
            $scope.main.entertainment.push({
                src:'', link:'', name:''
            });
        }

        $scope.save = function(){
            dataservice.saveData($scope.main,id).then(function (data) {
            });
        }

        $scope.cancel = function(){
            angular.copy($scope.master, $scope.main);
        }

        $scope.autoExpand = function(e) {
            var element = typeof e === 'object' ? e.target : document.getElementById(e);
            var scrollHeight = element.scrollHeight ; // replace 60 by the sum of padding-top and padding-bottom
            element.style.height =  scrollHeight + "px";
        };

        function expand() {
            $scope.autoExpand('TextArea');
        }
        //$scope.photosPage = 1;
        var vm = this;
        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });//log('Activated Widgets View'); });
        }
    }
})();

