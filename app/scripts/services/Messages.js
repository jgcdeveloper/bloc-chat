(function() {
  function Messages($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      all: messages,
      getByRoomId: function (roomId) {
        ref.orderByChild("roomID").equalTo("-KV7xCnTZWANCSWWLQoG");
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();
