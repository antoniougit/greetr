// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
const g = G$('John', 'Doe');

// use our chainable methods
//g.greet().setLang($('#lang').val()).greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function () {

    // create a new 'Greetr' object (let's pretend we know the name from the login)
    const loginGrtr = G$('John', 'Doe');

    // hide the login on the screen
    $('#loginDiv').hide();

    // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})