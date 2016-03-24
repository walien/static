angular.module('config', [])
    .constant('ServerConfig', {

        /**
         * By default, in dev mode, ionic will proxify the backend API to SIMAR Preprod Mobile
         * Appserver (this configuration appears in the ionic.project file): no backend url should be filled.
         * When the app needs to be packaged, the below backendUrl MUST be filled with a real backend URL.
         */

        backendUrl: function () {
            console.log(appVersion);
            if (window.cordova) {
                return 'http://www.preprod.simar.re/mobile';
            }
            return '';
        }

    });
