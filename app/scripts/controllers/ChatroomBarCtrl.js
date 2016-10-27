(function() {
  function ChatroomBarCtrl(Room) {

    this.rooms = Room.all;

  }

  angular
    .module('blocChat')
    .controller( 'ChatroomBarCtrl', [ 'Room' , ChatroomBarCtrl ]);
})();
