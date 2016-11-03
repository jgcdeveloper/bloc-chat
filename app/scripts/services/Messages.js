(function() {

  function Messages($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    var $ctrl = this;

    return {
      getByRoomId: function (roomID){
        return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
      },

      send: function (newMessage,currentRoom){

        var now = new Date().getTime();

        //Setup date object to send to Firebase
        var messageObject = {
          content: newMessage,
          username: $cookies.get('currentUser'),
          sentAt: now,
          roomID: currentRoom
        }

        //send the message object to the firebase array
        messages.$add(messageObject);

      }
    }
  }
  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', '$cookies', Messages]);
})();
