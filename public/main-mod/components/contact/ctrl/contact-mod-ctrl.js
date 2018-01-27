module.exports = [
    '$scope'
  , '$timeout'
  , function($scope, $timeout) {

    $scope.name         = !localStorage.getItem("user") ? $scope.name     = undefined : $scope.name    = parseValue('name');    
    $scope.email        = !localStorage.getItem("user") ? $scope.email    = undefined : $scope.email   = parseValue('email');
    $scope.subject      = !localStorage.getItem("user") ? $scope.subject  = undefined : $scope.subject = parseValue('subject');
    $scope.phone        = !localStorage.getItem("user") ? $scope.phone    = undefined : $scope.phone   = parseValue('phone');
    $scope.message      = !localStorage.getItem("user") ? $scope.message  = undefined : $scope.message = parseValue('message');
    
    $scope.isFormSent   = !localStorage.getItem("isFormSent") ? $scope.isFormSent = false : $scope.isFormSent = true;
    $scope.formSending  = false;


    $scope.submitFormData = function () {
      $scope.formSending = true;
      // validateUserData();
      var userProfile    = {
        name    : $scope.name,
        email   : $scope.email,
        subject : $scope.subject,
        phone   : $scope.phone,
        message : $scope.message
      }
      localStorage.setItem("isFormSent", true);    
      localStorage.setItem("user", JSON.stringify(userProfile));
      $timeout(function(){
        $scope.formSending = false;
        if(localStorage.getItem("isFormSent") === "true") {
          $scope.isFormSent = true;
        }      
      }, 5000);
    };
    
    $scope.sendFormAgain = function () {
      $scope.isFormSent = false;
      localStorage.removeItem("isFormSent");
      localStorage.removeItem("user");     
    };

    function validateFormData () {

    }

    function parseValue(key) {
      var parsedUserProfile = JSON.parse(localStorage.getItem("user"));
      switch (key) {
        case 'name' : 
          return parsedUserProfile.name
          break;
        case 'email' : 
          return parsedUserProfile.email
          break;
        case 'subject' : 
          return parsedUserProfile.subject
          break;
        case 'phone' : 
          return parsedUserProfile.phone
          break;
        case 'message' : 
          return parsedUserProfile.message
          break;
      }
    }

}]