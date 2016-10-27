(function() {
  function NewChatroomCtrl($uibModal, Room) {

    var newroom = this;

    var newRoomModal = $uibModal.open({
        animation: false,
        controller: 'NewChatroomCtrl',
        controllerAs: 'newroom',
        templateUrl: '/templates/newchatroom.html',
        size: sm,
        appendTo: parentElem

    });


//    chatroom.open
//    this.rooms = Room.all;

  }

  angular
    .module('blocChat')
    .controller( 'NewChatroomCtrl', [ 'Room' , '$uibModal', NewChatroomCtrl ]);
})();
