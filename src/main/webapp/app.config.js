'use strict';

angular
    .module('calcApp')
    .config(['$locationProvider', '$routeProvider',
        function($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/plotter', {
                    template: '<plotter></plotter>'
                })
                .otherwise('/plotter');
        }
    ]);