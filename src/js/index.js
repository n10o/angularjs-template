'use strict';

angular.module('signal', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // pushState enable(need to setting server rewrite)
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainCtrl',
                templateUrl: 'views/main.html'
            })
            .state('setting', {
                url: '/setting',
                controller: 'SettingCtrl',
                templateUrl: 'views/setting.html'
            });
    });
