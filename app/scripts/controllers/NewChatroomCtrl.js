(function() {
  function NewChatroomCtrl(Room, $uibModalInstance) {

    var $ctrl = this;


    $ctrl.save = function () {
      $uibModalInstance.close($ctrl.newRoom);
    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss("cancel");
    };
  }

angular
  .module('blocChat')
  .controller( 'NewChatroomCtrl', [ 'Room', '$uibModalInstance', NewChatroomCtrl ]);
})();
