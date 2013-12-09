/**
 * Created by dvazquez on 12/9/13.
 */

var LimitedMessageCtrl = function($scope){
    var MAX_LEN = 100,
        WARN_THRESHOLD = 10;

    $scope.message = '';
    $scope.clear = function(){ $scope.message = ''; }
    $scope.remaining = function(){
        return MAX_LEN - $scope.message.length;
    }
    $scope.shouldWarn = function(){
        return $scope.remaining() < WARN_THRESHOLD;
    }
    $scope.hasValidLength = function(){
        return $scope.remaining() >= 0;
    }
};
