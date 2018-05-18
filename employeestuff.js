
  var config = {
    apiKey: "AIzaSyBKCriT7vCmNMyLCo6YGMCU4UNePOUSn8w",
    authDomain: "stupid-project-1ae0b.firebaseapp.com",
    databaseURL: "https://stupid-project-1ae0b.firebaseio.com",
    projectId: "stupid-project-1ae0b",
    storageBucket: "",
    messagingSenderId: "1024393827213"
  };
  firebase.initializeApp(config);


var database = firebase.database();

console.log(firebase);

$("#submit").on('click',function(event){
    event.preventDefault();  
    var emName = $("#employee-name").val().trim();
    var role = $("#role").val().trim();
    var startDate = $("#start-date").val().trim();
    var monthsWorked = $("#months-worked").val().trim();
    var monthlyRate = $("#monthly-rate").val().trim();
    var totalBilled = $("#total-billed").val().trim();

  ///      console.log(emName)
     //   var row = $("<tr>" + "<td id='employee-name'>" + "<td id='role'>"+ "<td id='start-date'>"+ "<td id='months-worked'>"+ "<td id='monthly-rate'>"+ "<td id='total-billed'>" + "</tr>");
        
        // $("tbody").append("<tr>" + "<td id='employee-name'>" + emName + "</tr>");
   //     row; 
//        console.log(row);

        // $("#employee-name").text(emName);
        // $("#role").text(role);
        // $("#start-date").text(startDate);
        // $("#months-worked").text(monthsWorked);
        // $("#monthly-rate").text(monthlyRate);
        // $("#total-billed").text(totalBilled);

    //     $(".table").find('tbody')
    //     .append($('<tr>')
    //     .append($('<td id="employee-name">').text(emName))
    //     .append($('<td id="role">').text(role))
    //     .append($('<td id="start-date">').text(startDate))
    //     .append($('<td id="months-worked">').text(monthsWorked))
    //     .append($('<td id="monthly-rate">').text(monthlyRate))
    //     .append($('<td id="total-billed">').text(totalBilled))
    // )
    alert("cool beans");

    

//double quotes around keys when having issues
    var newEmp = {
        "name": emName,
        "role": role,
        "start": startDate,
        "monthsworked": monthsWorked,
        "rate": monthlyRate,
        "billed": totalBilled,
        "dateAdded": firebase.database.ServerValue.TIMESTAMP
    }

    database.ref().push(newEmp);

    // database.ref("/employees").push(newEmp);

    

    // database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added",function(snapshot){
    //     console.log(snapshot.val().dateAdded);
    //     $("#employee-name").text(snapshot.val().name);
    //     $("#role").text(snapshot.val().role);
    //     $("#start-date").text(snapshot.val().startDate);
    //     $("#months-worked").text(snapshot.val().monthsWorked);
    //     $("#monthly-rate").text(snapshot.val().monthlyRate);
    //     $("#total-billed").text(snapshot.val().totalBilled);
    // });
    
    
    
    // database.ref().on("child_added", function(childSnapshot){
    //     console.log(childSnapshot.val().name);
    // });

});

database.ref().on("child_added",function(childSnapshot,prevChildKey){
    console.log(childSnapshot.val().name);

    $("table").append("<tr class='well'><td class='employee-name'> " + childSnapshot.val().name +
    " </td><td class='employee-role'> " + childSnapshot.val().role +
      " </td><td class='employee-date'> " + childSnapshot.val().start +
        " </td><td class='employee-months'> " + childSnapshot.val().monthsworked + " </td><td class='employee-rate'> " + childSnapshot.val().rate+ " </td><td class='employee-billed'> " + childSnapshot.val().billed+ " </td></tr>");
});






