'use strict'

angular.module('noterious.common')
  .service('NotesModel', function($http, $q, ENDPOINT_URI, DATA_PATH) {
    var service = this

    service.getUrlEndPoint = function() {
      return ENDPOINT_URI + DATA_PATH
    }

    service.getNotes = function(id) {
      service.paramId = id
      return $http.get(service.getUrlEndPoint()).then(service.findNote)
    }

    service.findNote = function(payload) {
      return payload.data.filter(function(board) {
        if(board.id == service.paramId) {
          return board
        }
      })
    }
  })