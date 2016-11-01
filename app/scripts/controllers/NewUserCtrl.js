(function() {
  function NewUserCtrl($uibModalInstance, $cookies) {

    var $ctrl = this;

    $ctrl.confirm = function () {
      $uibModalInstance.close($ctrl.userName);
      $cookies.put('currentUser', $ctrl.userName);
    };
  }

angular
  .module('blocChat')
  .controller( 'NewUserCtrl', ['$uibModalInstance', '$cookies', NewUserCtrl ]);
})();
