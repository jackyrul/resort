(function () {
    'use strict';
    var controllerId = 'MainCtrl';

    function MainCtrl(common, $scope, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var id = 'common';
        var vm = this;
        //vm.title = 'Admin';
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
        .controller(controllerId, ['common', '$scope', 'datacontext', MainCtrl])
        .controller('footerCtrl', ['common', '$scope', 'datacontext', footerCtrl]);
})();


