var preprod = 'http://www.preprod.simar.re/mobile';
var prod = 'https://www.simar.re/mobile';
var localhost  = '';

var configuration = {
    'dev': localhost,
    '1.0': preprod
};

angular.module('config', [])
    .constant('ServerConfig', {

        backendUrl: function () {
            var url = configuration[appVersion];
            if (url) return url;
            return prod
        }

    });
