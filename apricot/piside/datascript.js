var id; 
var noty_flag;
$(function() {
  id = location.hash.substring(1,7);
  console.log(id);
  console.log( "ready!" );
  checkSetDatabase();
});

//==================================== firebase functions =================================================

var firebaseConfig = {
  apiKey: "AIzaSyA3KOd6r7UboAp0fvtnvJSU9umfOXXgNDQ",
  authDomain: "apricotdata.firebaseapp.com",
  databaseURL: "https://apricotdata.firebaseio.com",
  projectId: "apricotdata",
  storageBucket: "apricotdata.appspot.com",
  messagingSenderId: "894906563277",
  appId: "1:894906563277:web:78cfcf05cfe971b2ca0784",
  measurementId: "G-WV774BB6JJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


//==== if rock is on make rock highlight 
function checkSetDatabase(){
  var path = "User/"+id;
	var dbRef = firebase.database().ref(path);
  var startListening = function() {
     dbRef.on('value', function(snapshot) {
        var warehouse = snapshot.val();
        noty_flag = warehouse.noty;
        rock_flag = warehouse.flag_r;
        pi_network = warehouse.pi_notify;
        $('#firebase_data').text(noty_flag+","+rock_flag+","+pi_network); 
		align(warehouse);
	  });
 }
startListening();
}
