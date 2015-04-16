/* jshint -W117, -W030 */
describe('Service', function() {
    var service, $httpBackend;
    beforeEach(module('app'));
    beforeEach(module('app.dashboard'));

    var wordsList = [
        //example words
    ];

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        service = $injector.get('words');
        $httpBackend.expectGET('words.json').respond({'words': wordsList});
        //init
        $httpBackend.flush();
    }));
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    describe('.test1', function() {

    });
});
