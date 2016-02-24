(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['config', '$route'];

    function ShellController(config, $route) {
        var vm = this;

        vm.title = config.appTitle;
        vm.$route = $route;
    }
}());
