(function() {
  function ChatroomBarCtrl(Room, $uibModal) {

    var $ctrl = this;

    $ctrl.open =  function(size, parentSelector){

      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        templateUrl: '/templates/newchatroom.html',
        controller: 'NewChatroomCtrl',
        controllerAs: 'NewChatroom',
        resolve: {
          newRoom: function () {
          return $ctrl.newRoom;
          }
        }
      });
    };

    $ctrl.myRooms = Room.all; //Create a Firebase room array to list during ng-repeat

  }

  angular
    .module('blocChat')
    .controller( 'ChatroomBarCtrl', [ 'Room' , '$uibModal', ChatroomBarCtrl ]);
})();
