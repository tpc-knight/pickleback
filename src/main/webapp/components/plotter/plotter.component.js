'use strict';

angular.module('plotter')
    .component('plotter', {
        templateUrl: 'components/plotter/plotter.template.html',
        controller: [
            function plotterController($resource) {
                var self = this;

                self.name = "plotter";
            }
        ]
    });