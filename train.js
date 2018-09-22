$(document).ready(function() {

  var config = {
    apiKey: "AIzaSyBuftU8CCf-sgmC33TMyOclCRlZgusnRUE",
    authDomain: "train-scheduler-34d9f.firebaseapp.com",
    databaseURL: "https://train-scheduler-34d9f.firebaseio.com",
    projectId: "train-scheduler-34d9f",
    storageBucket: "train-scheduler-34d9f.appspot.com",
    messagingSenderId: "32415027292"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$("#search").on("click", function(event) {
	event.preventDefault();

    var trainName = $("#trainName").val().trim();
    var trainDest = $("#destination").val().trim();
    var firstTrain = $("#firstTrainTime").val().trim();
    var trainFreq = $("#frequency").val().trim();

    var newTrain = {
        name: trainName,
        destination: trainDest,
        start: firstTrain,
        frequency: trainFreq
    };

        database.ref().push(newTrain);

    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrainTime").val("");
    $("#frequency").val("");
    });

    var trainSec = document.getElementById('train-section');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => trainSec.innerText = snap.val());

    var trainName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().start;
    var trainFreq = childSnapshot.val().frequency;

     var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
      console.log(firstTimeConverted);

      var currentTime = moment();
      console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      console.log("DIFFERENCE IN TIME: " + diffTime);

      var tRemainder = diffTime % trainFreq;
      console.log(tRemainder);

      var tMinutesTillTrain = trainFreq - tRemainder;
      console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

      var nextTrain = moment().add(tMinutesTillTrain, "minutes");
      console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));

    $("#train-section > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + 
     "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");
  });



	

