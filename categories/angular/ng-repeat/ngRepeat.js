function homeCtrl($scope){
  $scope.customers = [
    {
      name:   'John Smith',
      age:    38,
      city:   'New York City',
      phone:  '555-2420'
    },
    {
      name:   'Penelope Lopez',
      age:    24,
      city:   'Los Angeles',
      phone:  '555-4392'
    },
    {
      name:   'Ben Phelps',
      age:    27,
      city:   'San Diego',
      phone:  '555-9873'
    },
    {
      name:   'Sam Howards',
      age:    45,
      city:   'Phoenix',
      phone:  '555-2394'
    }
  ]

}

angular.module('myApp', [])
.controller('homeCtrl', ['$scope', homeCtrl]);

