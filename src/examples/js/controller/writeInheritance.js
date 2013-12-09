/**
 * Created by dvazquez on 12/6/13.
 */

var HelloCtrl = function($scope){};

/* event bus -> $scope.$broadcast | $scope.$emit
/  example: react on the location change here. For example, update breadcrumbs based on
/  the new URL */

//$on method can register a scope-event handler
$scope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl){
    //do something
});