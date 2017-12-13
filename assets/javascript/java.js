//Initialize Firebase
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

// var trainName = "";
// var trainDestination = "";
// var trainTime = 0;
// var trainFreq = "";

//button to add train
$("#add-train-btn").on("click", function(event) {
	event.preventDefault();
//uses input
	var trainName = $("#name-input").val().trim();
	var trainDestination = $("#destination-input").val().trim();
	var trainTime = moment($("#time-input").val().trim(), "HH:mm").subtract(10, "years").format("X");
	var trainFreq = $("#freq-input").val().trim();
//Creates local object for holding train data
	var newTrain = {
		name: trainName,
		destination: trainDestination,
		time: trainTime,
		frequency: trainFreq
	};

	database.ref().push(newTrain);

	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.time);
	console.log(newTrain.frequency);

	$("#name-input").val("");
  	$("#destination-input").val("");
  	$("#time-input").val("");
  	$("#freq-input").val("");
});

//creates Firebase event + adds row
database.ref().on("child_added", function(childSnapshot, prevChildkey) {

	var trainName = childSnapshot.val().name;
	var trainDestination = childSnapshot.val().destination;
	var trainTime = childSnapshot.val().time;
	var trainFreq = childSnapshot.val().frequency;

//calculate next arrival

	var differenceTimes = moment().diff(moment.unix(trainTime), "minutes");
	var remainder = moment().diff(moment.unix(trainTime), "minutes") % trainFreq ;
	var minutes = trainFreq - remainder;
	console.log(minutes)

	var arrival = moment().add(minutes, "m").format("hh:mm A"); 


	$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  	trainFreq + "</td><td>" + arrival + "</td><td>" + minutes + "</td><td>");
});










