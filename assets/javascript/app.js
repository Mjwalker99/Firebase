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
        var nextTrain = moment($("#first-train").val().trim(), 'HH:mm').subtract(10, 'years').format('X');
        var frequency = $("#frequency").val().trim();
       

        var addTrain = {
            name: trainName,
            destination: destination,
            nextTrain: nextTrain,
            frequency: frequency,
         
        }

        database.ref().push(addTrain);

        $('#train-name').val("");
        $('#destination').val("");
        $('#first-train').val("");
        $('#frequency').val("");

       
    })

    database.ref().on('child_added', function (snapshot) {
        trainName = snapshot.val().name;
        destination = snapshot.val().destination;
        frequency = snapshot.val().frequency;
        nextTrain = snapshot.val().nextTrain;

        var tFrequency = frequency;

        var firstTime = "08:05";

        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);

        

        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));


        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);


        var tRemainder = diffTime % tFrequency;
        console.log(tRemainder);

        var tMinutesTillTrain = tFrequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);


        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

        $('#add-row').append(`<tr><td>${trainName}</td><td>${destination}</td><td>${frequency}</td><td>${nextTrain.format("hh:mm")}</td><td>${tMinutesTillTrain}</td>`)
    });
});
