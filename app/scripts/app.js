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
          controller: 'LandingCtrl as landing',
          templateUrl: '/templates/landing.html'
        })
      .state('test', {
            url: '/test/',
            controller: 'TestCtrl as test',
            templateUrl: '/templates/test.html'
      });

  }
  //'blocChat' is the name of the module, [] is for dependancy injection.

  angular
    .module('blocChat', ['firebase','ui.router'])
    .config(config);

})();
