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

    var trainName;
    var destination;
    var frequency;
    var nextArrival;
    var minutesAway;

    $("#add-train").on("click", function (event) {
        event.preventDefault();


        trainName = $(".train").val().trim();
        destination = $(".dest").val().trim();
        frequency = $(".freq").val().trim();
        nextArrival = $(".next").val().trim();
        minutesAway = $(".minutes").val().trim();


        database.ref().push({
            trainName: trainName,
            destination: destination,
            frequency: frequency,
            nextArrival: nextArrival,
            minutesAway: minutesAway,
        });

    });

    database.ref().on("value", function (snapshot) {

        // Change the HTML to reflect
        $(".train").text(snapshot.val().trainName);
        $(".dest").text(snapshot.val().destination);
        $(".freq").text(snapshot.val().frequency);
        $(".next").text(snapshot.val().nextArrival);
        $(".minutes").text(snapshot.val().minutesAway);
    });
});
