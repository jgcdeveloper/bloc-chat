(function() {
  function NewChatroomCtrl(Room) {

  }

angular
  .module('blocChat')
  .controller( 'NewChatroomCtrl', [ 'Room' , '$uibModal', NewChatroomCtrl ]);
})();
