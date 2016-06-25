(function () {
    'use strict';
    var controllerId = 'MainCtrl';

    function MainCtrl(common, $scope, datacontext, $rootScope) {
        var getLogFn = common.logger.getLogFn;

        var log = getLogFn(controllerId);
        var id = 'common';
        var vm = this;
        //vm.title = 'Admin';
        //$rootScope.issupportsvg = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0");
        //if($rootScope.issupportsvg){
        //    $rootScope.style = "display:none"
        //}
        $scope.$watch('$rootScope.issupportsvg', function() {
            if($rootScope.issupportsvg != true)
            $rootScope.style = "display: inherit"
        }, true);


        $scope.date = new Date();
        datacontext.getData(id).then(function (data) {
            $scope.main = JSON.parse(data.data);
            $scope.columns = $scope.main.overall.showSale ? 'col-md-9 col-sm-7':'col-md-12'
            $scope.sale = $scope.main.overall.sale;

        });


        this.userName = 'Example user';
        this.helloText = 'Welcome in SeedProject';
        this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';


        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });
        }
    }

    function footerCtrl(common, $scope, datacontext) {
        //var getLogFn = common.logger.getLogFn;
        //var log = getLogFn(controllerId);
        //var id = 'common';
        //var vm = this;
        ////vm.title = 'Admin';
        //datacontext.getData(id).then(function (data) {
        //    $scope.footer = JSON.parse(data.data);
        //    //$scope.columns = $scope.main.overall.showSale ? 'col-md-9 col-sm-7':'col-md-12'
        //    //$scope.sale = $scope.main.overall.sale;
        //
        //});
        //
        //activate();
        //
        //function activate() {
        //    common.activateController([], controllerId)
        //        .then(function () { });
        //}
    }
    angular.module('Resort')
        .controller(controllerId, ['common', '$scope', 'datacontext','$rootScope', MainCtrl])
        .controller('footerCtrl', ['common', '$scope', 'datacontext', footerCtrl]);
})();


