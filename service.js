var app = angular.module('userProfiles');

app.service('mainService', function($http) {


var app = angular.module('userProfiles');

// app.service('mainService', function($http) {
//   this.getUsers = function() {
//     return $http({
//       method: 'GET',
//       url: 'http://reqr.es/api/users?page=1'
//     });
//   }
// });


  this.getUsers = function() {
    return $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=3'
    }).then(function(res) {
    	return res;
    })
  }



});