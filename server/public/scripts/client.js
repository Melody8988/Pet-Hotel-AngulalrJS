const petApp = angular.module('petApp', ['ngRoute', 'ngMaterial'])

petApp.config(function($routeProvider){
    //angular-route.js
    $routeProvider
    .when('/dash', {
        templateUrl: '/views/dashboard.html',
        controller: 'dashController as vm'
    }).when('/owners', {
        templateUrl: '/views/owners.html',
        controller: 'ownerController as vm'
    }).otherwise(
        { redirectTo: '/dash'}
    )//end otherwise
});//end config $routeProvider