// Initialize Firebase
var config = {
    apiKey: "AIzaSyDNBKApqa3fxw6roRATOjmAG9zRo15wW6g",
    authDomain: "acmlibrary-78709.firebaseapp.com",
    databaseURL: "https://acmlibrary-78709.firebaseio.com",
    storageBucket: "acmlibrary-78709.appspot.com",
    messagingSenderId: "489183070283"
};
firebase.initializeApp(config);

//Angular code starts here 
var libraryApp = angular
    .module('acmLibraryApp', ["firebase", "ui.router"]);

//Fuck angular ui router for now, might hate it less if i can figure it out  
libraryApp.config(function($stateProvider) {


    var helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);

    $stateProvider.state("test", {
        name: "test",
        url: "/test",
        templateUrl: "../view/test.html",
        controller: "testCtrl"
    })


});