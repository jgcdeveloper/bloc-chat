(function() {
  function HomeCtrl(Room, Messages, $uibModal) {

    var $ctrl = this;



    $ctrl.open =  function(size, parentSelector){

      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        templateUrl: '/templates/newchatroom.html',
        controller: 'NewChatroomCtrl',
        controllerAs: 'NewChatroom',

      });
    };

    $ctrl.currentRoom;

    $ctrl.myRooms = Room.all; //Create a Firebase room array to list during ng-repeat
    $ctrl.listOfMessages = Messages.getByRoomId('-KV7xCnTZWANCSWWLQoG');
  }

  angular
    .module('blocChat')
    .controller( 'HomeCtrl', ['Room' , 'Messages' , '$uibModal' , HomeCtrl ] );
})();
