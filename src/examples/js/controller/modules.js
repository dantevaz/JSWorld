/**
 * Created by dvazquez on 12/10/13.
 */

/* Declare a module and its dependencies
   Here, the car service is defined in the app module, which declares a dependency on the engines module,
   where the dieselEngine service is defined
 */
angular.module('app', ['engines'])
    .factory('car', function($log, dieselEngine){   //Declare service
        return {
            start: function(){ $log.info('Starting ' + dieselEngine.type); }
        };
    });
/* Declare a module with no dependencies
 */
angular.module('engines', [])
    .factory('dieselEngine', function(){
        return { type: 'diesel'};
    });

/* Services defined in sibling modules are also visible to each other. We could move a car
 * service into a separate module, and then change the module dependencies, so that an app
 * depends on both the engines and cars modules as follows */

angular.module('app', ['engines', 'cars']);
angular.module('cars', [])
    .factory('car', function($log, dieselEngine){
        return {
            start: function(){ $log.info('Starting ' + dieselEngine.type); }
        };
    });
angular.module('engines',[])
    .factory('dieselEngine', function(){ return { type: 'diesel'}; });

// A service defined in one of the app's modules is visible to all the other modules (i.e. hierarchy doesn't influence
// services' visibility to other modules