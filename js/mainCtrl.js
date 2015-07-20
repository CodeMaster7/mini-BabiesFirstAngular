var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
    $scope.friends = ["Sam", "Maya", "Mario", "Jared"];
    
    $scope.addFriend = function() {
        $scope.friends.push($scope.newFriend);
        $scope.newFriend = "";
    }
    
});



