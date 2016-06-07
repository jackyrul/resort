(function () {
    'use strict';

    var app = angular.module('Resort');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['routes', '$stateProvider', '$urlRouterProvider', '$httpProvider', routeConfigurator]);
    function routeConfigurator(routes, $stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $urlRouterProvider.otherwise('/aboutus');
        //$ocLazyLoadProvider.config({
        //    // Set to true if you want to see what and when is dynamically loaded
        //    debug: false
        //});

        routes.forEach(function (r) {
            $stateProvider.state(r);
        });

    }

    //Define the routes

    function getRoutes() {
        return [
             {
                 name: 'aboutus',
                 url: "/aboutus",
                 templateUrl: "app/views/aboutus/aboutus.html",
                 data: { pageTitle: 'О нас' }
             },
             {
                 name: 'photo',
                 url: "/photo",
                 templateUrl: "app/views/photo/photo.html",
                 data: { pageTitle: 'Фото' }
             },
             {
                 name: 'pricing',
                 url: "/pricing",
                 templateUrl: "app/views/pricing/pricing.html",
                 data: { pageTitle: 'Цены' }
             }, {
                 name: 'contacts',
                 url: "/contacts",
                 templateUrl: "app/views/contacts/contacts.html",
                 data: { pageTitle: 'Цены' }
             },
             {
                 name: 'entertainment',
                 url: "/entertainment",
                 templateUrl: "app/views/entertainment/entertainment.html",
                 data: { pageTitle: 'Цены' }
             },
            {
                name: 'admin',
                url: "/admin",
                templateUrl: "app/views/admin/admin.html",
                data: { pageTitle: 'admin' }
            },

            //{
            //    name: 'admin',
            //    url: '/admin',
            //    title: 'admin',
            //    templateUrl: 'app/admin/admin.html',
            //    settings: {
            //        nav: 7,
            //        content: '<i class="fa fa-lock"></i> Admin'
            //    }
            //}
        ];
    }

})();