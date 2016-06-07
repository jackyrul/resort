(function() {
    'use strict';

    var controllerId = 'sidebar';
    angular.module('app').controller(controllerId,
    ['$route', 'config', 'routes', '$state', sidebar]);

    function sidebar($route, config, routes, $state) {
        var vm = this;

        vm.isCurrent = isCurrent;
        vm.$state = $state;
        vm.init = function() {
            $(function() {
                $("#todaydate").datepicker();
            });
        };

        activate();

        function activate() { getNavRoutes(); }

        
        function getNavRoutes() {
            vm.navRoutes = routes.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {
            var activeClass = 'current';
            if (route.children && $state.current.parent) {
                route.children.forEach(function (child) {
                    if ($state.current.name == child.name) {
                        return 'current';
                    }
                }
            )
            };
            if ($state.current.parent && $state.current.name == route.name)
                activeClass = 'active';
            if (!route.title || !$state.current || !$state.current.title || route.parent) {
                return '';
            }
            var menuName = route.title;


            return $state.current.title.substr(0, menuName.length) === menuName ? activeClass : '';
        }
    };
})();
