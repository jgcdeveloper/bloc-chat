(function () {

  function config($stateProvider, $locationProvider) {
      $locationProvider
          .html5Mode({
              enabled: true,
              requireBase: false
      });

  $stateProvider
      .state('landing', {
          url: '/',
          controller: 'HomeCtrl as home',
          templateUrl: '/templates/home.html'
        })
      .state('test', {
            url: '/test/',
            controller: 'TestCtrl as test',
            templateUrl: '/templates/test.html'
      });

  }
  //'blocChat' is the name of the module, [] is for dependancy injection.

  angular
    .module('blocChat', ['firebase','ui.bootstrap','ui.router'])
    .config(config);

})();
