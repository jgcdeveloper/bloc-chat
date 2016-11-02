(function() {
  function BlocChatCookies($cookies, $uibModal) {

    var $ctrl = this;

    var currentUser = $cookies.get('currentUser');

    if (!currentUser || currentUser === '') {

      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        templateUrl: '/templates/newuser.html',
        controller: 'NewUserCtrl',
        controllerAs: 'NewUser',
        backdrop  : 'static',
        keyboard  : false
      });

      $rootScope.$digest();
    }
  }

  angular
    .module('blocChat')
    .run( ['$cookies', '$uibModal', BlocChatCookies] );
})();
