(function() {
  function HomeCtrl(Room, Messages, $uibModal, $cookies) {

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

    $ctrl.newMessage = function(message,currentRoom){
      Messages.send(message,currentRoom);
      $ctrl.message="";
    }

    $ctrl.myRooms = Room.all; //Create a Firebase room array to list during ng-repeat

    $ctrl.username = $cookies.get('currentUser');

  }

  angular
    .module('blocChat')
    .controller( 'HomeCtrl', ['Room' , 'Messages' , '$uibModal', '$cookies', HomeCtrl ] );
})();
