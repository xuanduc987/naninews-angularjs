(function() {
  'use strict';

  var core = angular.module('app.core');

  var config = {
    appTitle: 'NaniNews',
  };

  core.value('config', config);
}());
