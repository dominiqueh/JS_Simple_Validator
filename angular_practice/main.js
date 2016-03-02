// console.log('hello')
// console.log(angular)
// First we need to create a module
// angular.module('name', [dependencies-external libraries])
angular.module('DinosaurApp', [])

// Next, make a controller
angular.module('DinosaurApp')
    .controller('treeStar', ['$scope', function($scope){

        console.log('Get dem treestars')

        $scope.greeting = 'Hello there young dinosaur, eat treestars'

    }]) // minification friendly syntax
