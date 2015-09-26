angular.module("hedhunter", [
  "ui.bootstrap.tpls",
  "ui.bootstrap.datepicker"
]).controller('FormCtrl', FormCtrl);


function FormCtrl($scope, $window) {
  $scope.test = ['test1','test2','test3'];
  $scope.user = {
    date_de_naissance: null
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };

  $scope.sendEmail= function() {
    $window.location = "mailto:foo@bar.com?subject=mail subject&body=mail body";
  };
}
