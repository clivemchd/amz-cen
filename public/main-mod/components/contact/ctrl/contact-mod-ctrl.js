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
    $scope.errorInput   = false;
    $scope.errorEmail   = false;            

    $scope.submitFormData = function () {
      if(!validateFormData()) {
        return;
      }      
      $scope.formSending = true;
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
      if(!$scope.name || !$scope.email || !$scope.subject || !$scope.message) {
        return false;
      }
      if(isNaN($scope.phone)){
        return false;
      }
      if($scope.errorEmail){
        return false;        
      }
      return true;
    }

    $scope.$watch('phone', function (n, o) {
      n ? isNaN(n) ? $scope.errorNumber = true : $scope.errorNumber = false : $scope.errorNumber = false;
    })

    $scope.$watch('email', function (n, o) {
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      n ? !filter.test(n) ? $scope.errorEmail = true : $scope.errorEmail = false : $scope.errorEmail = false;  
    })

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