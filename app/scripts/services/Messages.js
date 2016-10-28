(function() {
  function Messages($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);



    return {
      getByRoomID: function(roomID){
          ref.orderByChild('roomID').equalTo(roomID);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();
