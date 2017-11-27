'use strict';

angular.module('noterious.common')
  .service('BoardsModel', function ($http, UserModel, $q, ENDPOINT_URI, DATA_PATH) {
    var service = this;

    service.getUrlEndpoint = function() {
      return ENDPOINT_URI + DATA_PATH
    }

    service.extractData = function(payload) {
      return payload.data
    }

    service.all = function(dataPath) {
      return $http.get(service.getUrlEndpoint()).then(service.extractData)
    }
  });