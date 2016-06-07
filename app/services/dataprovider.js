﻿(function () {
    'use strict';

    var serviceId = 'dataProvider';
    angular.module('Resort').factory(serviceId, ['common', '$http', '$templateCache', dataProvider]);

    function dataProvider(common, $http, $templateCache) {
        var request = function ($scope, url, method, dataValue, successCallback, errorCallback) {
            var httpParams = method == "GET"
                ? { method: method, url: url, params: dataValue /*, cache: $templateCache */, headers: { 'Content-Type': 'application/json' } }
                : { method: method, url: url, data: dataValue, cache: $templateCache, headers: { 'Content-Type': 'application/json' } };
            return $http(httpParams).
            success(function (data, status) {
                $scope.status = status;
                if (successCallback) {
                    successCallback(data, status);
                }
            }).
            error(function (data, status) {
                $scope.str = data || " Request failed";
                $scope.status = status;
                if (errorCallback) {
                    errorCallback(data, status);
                }
            });
        };
        return {
            request: request,
            get: function ($scope, url, data, successCallback, errorCallback) {
                return request($scope, url, "GET",data, successCallback, errorCallback);
            },
            post: function ($scope, url, data, successCallback, errorCallback) {
                return request($scope, url, "POST",data, successCallback, errorCallback);
            }
        };
    }

})();

