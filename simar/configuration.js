var preprod = 'http://www.preprod.simar.re/mobile';
var prod = 'https://www.simar.re/mobile';
var localhost  = 'http://localhost:8082';

angular.module('config', [])
    .constant('ServerConfig', {
         
        configuration: {
            'dev': localhost,
            '1.0': preprod
        },

        backendUrl: function () {
            var url = configuration[appVersion];
            if (url) return url;
            return prod
        }
    });
