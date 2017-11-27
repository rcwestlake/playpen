angular.module('noterious')
  .controller('NotesCtrl', function(NotesModel, $stateParams, ENDPOINT_URI, DATA_PATH) {
    var nctrl = this
    nctrl.id = $stateParams.id

    nctrl.getNotes = function() {
      NotesModel.getNotes(nctrl.id)
      .then(function(data) {
        nctrl.notes = data[0].notes
      })
      .catch(function(error) {
        console.error('Error in get notes request: ', error)
      })
    }

    nctrl.getNotes(nctrl.id)
  })