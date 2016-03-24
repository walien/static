(function (module) {

    var Envs = {
        preprod: 'http://www.preprod.simar.re/mobile',
        prod: 'https://www.simar.re/mobile',
        local: ''
    };
    Envs._default = Envs.local;

    var ServerConfig = {
        backendUrl: function () {
            var url = configuration[appVersion];
            if (url === undefined || url === null) return Envs._default;
            return url;
        }
    };

    var configuration = {
        'dev': Envs.local,
        '1.0': Envs.preprod
    };

    module
        .constant('ServerConfig', ServerConfig)
        .constant('ServerUrl', ServerConfig.backendUrl())
        .constant('ServerEnvs', Envs);

})(angular.module('config', []));
