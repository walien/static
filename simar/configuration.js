var preprod = 'http://www.preprod.simar.re/mobile';
var _default, prod = 'https://www.simar.re/mobile';
var localhost  = '';

var configuration = {
    'dev': localhost,
    '1.0': preprod
};

angular.module('config', [])
    .constant('ServerConfig', {

        backendUrl: function () {
            var url = configuration[appVersion];
            if (url === undefined || url === null) return _default;
            return url;
        }

    });
