/**
 * Created by dvazquez on 12/6/13.
 */

var WorldCtrl = function($scope){
    $scope.population = 7000;
    $scope.countries = [
        { name: 'France', population: 63.2 },
        { name: 'Mexico', population: 120.4}];

    //I can access parent properties if I don't define them myself
    //This will be called from each scope instance created by ng-repeat
    $scope.worldsPercentage = function(countryPopulation){
        return (countryPopulation / $scope.population) * 100;
    }
    //NOTE: Follows the same rules as JS prototypical inheritance
};
