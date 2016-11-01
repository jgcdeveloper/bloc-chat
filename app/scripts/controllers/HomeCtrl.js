(function() {
  function HomeCtrl(Room, Messages, $uibModal, User) {

    var $ctrl = this;

    $ctrl.setCurrentRoom = function(room){
      $ctrl.currentRoom = room;
      $ctrl.listOfMessages = Messages.getByRoomId(room.$id);
    }

    $ctrl.open =  function(size, parentSelector){
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        templateUrl: '/templates/newchatroom.html',
        controller: 'NewChatroomCtrl',
        controllerAs: 'NewChatroom',
      });
    };

    $ctrl.myRooms = Room.all; //Create a Firebase room array to list during ng-repeat
  }

  angular
    .module('blocChat')
    .controller( 'HomeCtrl', ['Room' , 'Messages' , '$uibModal', HomeCtrl ] );
})();
