angular.module("hedhunter", [
  "ui.bootstrap.tpls",
  "ui.bootstrap.datepicker"
]).controller('FormCtrl', FormCtrl);


function FormCtrl($scope, $http) {
  $scope.situations = ['Formation continue','Formation professionnelle','Apprentissage'];
  $scope.user = {
    dateNaissance: null
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };

  $scope.sendEmail= function() {
    $http.post("https://hidden-spire-2308.herokuapp.com/save", $scope.user);
    $scope.confirm = true;
    if (false){
      $http.post("https://hidden-spire-2308.herokuapp.com/save");
    }
  };
}
