angular.module('noterious')
  .controller('NotesCtrl', function(NotesModel, $stateParams) {
    var nctrl = this
    nctrl.title = 'made it to NOTES!!'
    nctrl.id = $stateParams.id
  })