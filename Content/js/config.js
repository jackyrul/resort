/// <reference path="../views/clusters/clusters.html" />
/**
 * avalanchain - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 * avalanchain theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider,$httpProvider) {
    $urlRouterProvider.otherwise("/index/aboutus");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "/Resort/Content/views/common/Content.html",
        })

        .state('index.aboutus', {
            url: "/aboutus",
            templateUrl: "/Resort/Content/views/aboutus/aboutus.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'summernote',
                            files: ['/Resort/Content/css/plugins/summernote/summernote.css',
                                '/Resort/Content/css/plugins/summernote/summernote-bs3.css',
                                '/Resort/Content/js/plugins/summernote/summernote.min.js',
                                '/Resort/Content/js/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            },
            data: { pageTitle: 'aboutus' }
        })
        .state('index.admin', {
            url: "/admin",
            templateUrl: "/Resort/Content/views/admin/admin.html",
            data: { pageTitle: 'admin' }
        })
        .state('index.photo', {
            url: "/photo",
            templateUrl: "/Resort/Content/views/photo/photo.html",
            data: { pageTitle: 'photo' }
        })
        .state('index.pricing', {
            url: "/pricing",
            templateUrl: "/Resort/Content/views/pricing/pricing.html",
            data: { pageTitle: 'pricing' }
        })
        .state('index.overall', {
            url: "/overall",
            templateUrl: "/Resort/Content/views/overall/overall.html",
            data: { pageTitle: 'overall' }
        })
        .state('index.entertainment', {
            url: "/entertainment",
            templateUrl: "/Resort/Content/views/entertainment/entertainment.html",
            data: { pageTitle: 'entertainment' }
        })
    //.state('index.main', {
    //    url: "/main",
    //    templateUrl: "/Resort/Content/views/main.html",
    //    data: { pageTitle: 'Example view' }
    //})
    //.state('index.minor', {
    //    url: "/minor",
    //    templateUrl: "/Resort/Content/views/minor.html",
    //    data: { pageTitle: 'Example view' }
    //})
}
angular
    .module('resortadmin')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
