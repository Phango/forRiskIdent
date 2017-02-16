'use strict';

describe('myApp.notifications controller', function() {
    var $scope, $q, deferred;

    beforeEach(function() {
        module('myApp.notifications');
        module(function ($provide) {
            // stub to provide socket service
            $provide.provider('socket', function () {
                this.$get = function () {
                    return {
                        on: function(eventName, callback){
                            return
                        }
                    };
                }
            });
        });

        inject(function($controller, _$rootScope_, _$q_, notificationsService) {
            $q = _$q_;
            $scope = _$rootScope_.$new();

            // We use the $q service to create a mock instance of defer
            deferred = _$q_.defer();

            // Use a Jasmine Spy to return the deferred promise
            spyOn(notificationsService, 'get').and.returnValue(deferred.promise);

            // Init the controller, passing our spy service instance
            $controller('notificationsController', {
                $scope: $scope,
                notificationsService: notificationsService
            });
        })
    });

    describe('controller', function() {
        describe('method to count', function() {
            it('should count correctly', function() {
                $scope.notifications = [
                    {
                        id: 1,
                        type: 'info',
                        header: 'Fake header 1',
                        body: 'Fake body 1'
                    },
                    {
                        id: 2,
                        type: 'info',
                        header: 'Fake header 2',
                        body: 'Fake body 2'
                    },
                    {
                        id: 3,
                        type: 'warning',
                        header: 'Fake header 3',
                        body: 'Fake body 3'
                    }
                ];

                expect($scope.getCount('info')).toBe(2);
                expect($scope.getCount('warning')).toBe(1);
                expect($scope.getCount('error')).toBe(0);
            });
        });

        it('should init with true for showNotificationDetails', function() {
            expect($scope.showNotificationDetails).toBeTruthy();
        })

        describe('method to switch modes', function() {
            it('should change modes', function() {
                $scope.toggleNotificationDetails();
                expect($scope.showNotificationDetails).toBeFalsy();

                $scope.toggleNotificationDetails();
                expect($scope.showNotificationDetails).toBeTruthy();
            })
        })
    });
});
