/* Controllers' responsibility is to initialize scope objects, and are regular JavaScript functions
    - initial model values (similar to ng-init directive)
    - augmenting $scope with UI-specific behavior
   */
var HelloCtrl = function ($scope){
    //$scope object is used to expose the domain model to a view (template)
    //assigning properties to scope makes new values available for rendering
    $scope.name = 'Dani';

    //Every scope points to its parent via $parent
    var parent = $scope.$parent;

    $scope.getName = function(){
        return $scope.name;
    }
}
