app.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/javascripts/app/component/main/index.html',
            controller: 'MainCtrl'
        })

        $urlRouterProvider.otherwise('home');
    }
]);
