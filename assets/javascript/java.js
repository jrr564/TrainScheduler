//Firebase
var config = {
    apiKey: "AIzaSyDPOq9FNbYmW7KxGXBxu38p7gxuwGcUazk",
    authDomain: "trainscheduler-f5c2b.firebaseapp.com",
    databaseURL: "https://trainscheduler-f5c2b.firebaseio.com",
    projectId: "trainscheduler-f5c2b",
    storageBucket: "",
    messagingSenderId: "504285094535"
  };
  firebase.initializeApp(config);

var database = firebase.database();
//button to add train
$("#add-train-btn").on("click", function(event) {
	event.preventDefault();
//uses input
	var trainName = $(".name-input").val().trim();
	var trainDestination = $(".destination-input").val().trim();
	var trainTime = $(".train-time").val().trim();
	var trainFreq = $(".train-freq").val().trim();
//Creates local object for holding train data
	var newTrain = {
		name: trainName,
		destination: trainDestination,
		time: trainTime,
		frequency: trainFreq
	};

	database.ref().push(newEmp);

	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.time);
	console.log(newTrain.frequency);


});