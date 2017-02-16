'use strict';

describe('myApp.notifications service', function() {
    var notificationsService, httpBackend;

    beforeEach(function() {
        module('myApp.notifications');

        inject(function(_notificationsService_, $httpBackend) {
            notificationsService = _notificationsService_;
            httpBackend = $httpBackend;

            httpBackend.when('GET', 'http://localhost:8001/notifications').respond([
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
            ])
        })
    });

    describe('service', function() {
        it('should be defined', function() {
            expect(notificationsService).toBeDefined();
        });

        it('should have a methods get, dismiss', function() {
            expect(notificationsService.get).toBeDefined();
            expect(notificationsService.dismiss).toBeDefined();
        })

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        describe('method get', function() {
            it('should return 3 objects of data', function() {
                notificationsService.get().then(function(res) {
                    expect(res.data.length).toBe(3);
                })
                httpBackend.flush()
            })
        })
    });
});
