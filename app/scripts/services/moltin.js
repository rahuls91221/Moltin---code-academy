angular.module('moltinCodeAcademyApp.moltin', [])
    .factory('MoltinAuth', function($q) {

        var deffered = $q.defer();
        var moltin = new Moltin({publicId: 'bmxxOT3xKMSdjbNV53HZPnz9C3n60asgGMh1Qfoq'});
        moltin.Authenticate(function() {
          
            deffered.resolve(moltin);

        });

        return deffered.promise;
    });