(function () {
    var app = angular.module('Resort', [
        'ngRoute',
        'ui.router', // routing
       // 'ui.router.stateHelper',                    // Routing
        //'oc.lazyLoad', // ocLazyLoad
        'common',           // common functions, logger, spinner
        //'common.bootstrap', // bootstrap dialog wrapper functions
        //'xeditable',
        //'ui.grid',
        //'localytics.directives',
        'slick',
        'ngStorage',
        'wu.masonry',
        'ngAnimate',
        //'angular-flot',
        'ui.bootstrap',
        //'AdalAngular'
    ]);

    app.run(['$route', '$templateCache', '$rootScope', '$state', '$stateParams', 'uibPaginationConfig', function ($route, $templateCache, $rootScope, $state, $stateParams, uibPaginationConfig) {

        uibPaginationConfig.firstText='Начало';
        uibPaginationConfig.previousText='Пред';
        uibPaginationConfig.nextText="След";
        uibPaginationConfig.lastText="Конец";
        //$templateCache.put("app/analytics/boards/board1.html");
        //$templateCache.put("app/analytics/boards/board2.html");
        //routemediator.setRoutingHandlers();
        $rootScope.issupportsvg = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0");
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);
})();

