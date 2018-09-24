
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

});