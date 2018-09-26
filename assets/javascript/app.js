$(document).ready(function () {

    // 1. Initialize Firebase
    var config = {
        apiKey: "AIzaSyBzirLAkIEELooLyMT6gHt0rOTKENLapck",
        authDomain: "train-scheduler-f967a.firebaseapp.com",
        databaseURL: "https://train-scheduler-f967a.firebaseio.com",
        projectId: "train-scheduler-f967a",
        storageBucket: "train-scheduler-f967a.appspot.com",
        messagingSenderId: "557822192476"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    $("#add-train").on("click", function (event) {
        event.preventDefault();


        var trainName = $("#train-name").val().trim();
        var destination = $("#destination").val().trim();
        var startTime = $("#first-train").val().trim();
        var frequency = $("#frequency").val().trim();

        var addTrain = {
            name: trainName,
            destination: destination,
            startTime: startTime,
            frequency: frequency
        }

        database.ref().push(addTrain);

        $('#train-name').val("");
        $('#destination').val("");
        $('#first-train').val("");
        $('#frequency').val("");
    })


    database.ref().on('child_added', function (snapshot) {
        // Change the HTML to reflect
         trainName = snapshot.val().name;
         destination = snapshot.val().destination;
         frequency = snapshot.val().frequency;
         startTime = snapshot.val().startTime;

         $('#add-row').append(`<tr><td>${trainName}</td><td>${destination}</td><td>${frequency}</td><td>${startTime}</td>`)
    

    });
});
