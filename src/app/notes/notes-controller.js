angular.module('noterious')
  .controller('NotesCtrl', function(NotesModel, $stateParams, ENDPOINT_URI, DATA_PATH) {
    var nctrl = this
    nctrl.id = $stateParams.id
    nctrl.isEditing = false
    nctrl.newNote = {
      id: null,
      title: '',
      content: '',
      date: ''
    }

    nctrl.getNotes = function() {
      NotesModel.getNotes(nctrl.id)
      .then(function(data) {
        nctrl.notes = data[0].notes
        console.log(nctrl.notes)
      })
      .catch(function(error) {
        console.error('Error in get notes request: ', error)
      })
    }

    nctrl.setEditNote = function(noteId, note) {
      nctrl.editNoteId = noteId
      nctrl.editNote = note
      nctrl.isEditing = true
    }

    nctrl.createNote = function(note, isValid) {
      if(isValid) {
        note['id'] = nctrl.notes.length + 1
        nctrl.notes.push(note)
        nctrl.resetBoard()
      }
    }

    nctrl.updateNote = function(noteId, note, isValid) {
      if(isValid) {
        for(i = 0; i < nctrl.notes.length; i++) {
          if(nctrl.boards[i].id == noteId) {
            nctrl.notes[i] = note
          }
        }
        nctrl.cancelEditing()
      }
    }

    nctrl.cancelEditing = function() {
      nctrl.isEditing = false
      nctrl.editNoteId = null
      nctrl.editNote = {
        id: null,
        title: '',
        content: '',
        date: false
      }
    }

    nctrl.resetBoard = function() {
      nctrl.newNotes = {
        id: null,
        title: '',
        content: '',
        date: ''
      }
    }

    nctrl.getNotes(nctrl.id)
  })