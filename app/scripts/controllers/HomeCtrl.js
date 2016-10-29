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

    $ctrl.myRooms = Room.all; //Create a Firebase room array to list during ng-repeat
    $ctrl.messages = Messages.all;
//    $ctrl.messages_1 = Messages.getByRoomID;

  }

  angular
    .module('blocChat')
    .controller( 'HomeCtrl', ['Room' , 'Messages' , '$uibModal' , HomeCtrl ] );
})();
