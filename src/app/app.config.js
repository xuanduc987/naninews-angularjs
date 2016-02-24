(function() {
    'use strict';

    angular
        .module('app')
        .config(appConfig)
        .run(appRun);

    appRun.$inject = ['$route', '$rootScope'];

    function appRun($route, $rootScope) {
        $rootScope.$on('$routeChangeSuccess',
            function(event, current, previous) {
                $rootScope.title = current.title;
            }
        );
    };

    appConfig.$inject = ['$routeProvider'];

    function appConfig($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/' });
    }
}());
