(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$route', 'config'];

    function ShellController($route, config) {
        var vm = this;

        vm.title = config.appTitle;
        vm.$route = $route;
    }
}());
