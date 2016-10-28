(function() {
  function NewChatroomCtrl(Room, $uibModalInstance) {

    var $ctrl = this;
    $ctrl.test = Room.all;


    $ctrl.save = function () {
      $uibModalInstance.close($ctrl.newRoom);
      var newRoom = $ctrl.newRoom;
      $ctrl.test.$add(newRoom);
    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss("cancel");
    };
  }

angular
  .module('blocChat')
  .controller( 'NewChatroomCtrl', [ 'Room', '$uibModalInstance', NewChatroomCtrl ]);
})();
