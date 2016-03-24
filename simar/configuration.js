angular.module('config', [])
    .constant('ServerConfig', {

        var preprod = 'http://www.preprod.simar.re/mobile';
        var prod = 'https://www.simar.re/mobile';
        var localhost  = 'http://localhost:8082';
         
        var configuration = {
            'dev': localhost,
            '1.0': preprod
        };

        backendUrl: function () {
            var url = configuration[appVersion];
            if (url) return url;
            return prod
        }
    });
