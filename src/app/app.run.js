(function() {
    'use strict';

    angular
        .module('app')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$route'];

    // $route need to work arround https://github.com/angular/angular.js/issues/1213
    function appRun($rootScope, $route) { //eslint-disable-line
        // Doesn't need deregister
        $rootScope.$on('$routeChangeSuccess', //eslint-disable-line
            function(event, current) {
                $rootScope.title = current.title;
            }
        );
    }
}());
