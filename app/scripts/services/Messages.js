(function() {
  function Messages($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      all: messages,
      getByRoomId: function (chatroom){
        return $firebaseArray(ref.orderByChild('roomID').equalTo(chatroom));
      }
    }

  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();
