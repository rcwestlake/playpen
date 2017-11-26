angular.module('noterious')
  .controller('BoardsCtrl', function(BoardsModel) {
    var bctrl = this
    bctrl.isEditing = false
    bctrl.loading = false
    bctrl.newBoard = {
      id: null,
      title: '',
      description: '',
      isPublic: false
    }

    bctrl.boards = [
      {
        id: 1,
        title: 'test',
        description: 'do things',
        isPublic: true
      },
      {
        id: 2,
        title: 'biz ideas',
        description: 'do bizzy things',
        isPublic: false
      }
    ]

    bctrl.createBoard = function(board, isValid) {
      if(isValid) {
        board['id'] = bctrl.boards.length + 1
        bctrl.boards.push(board)
      }
      // TODO: send error message if it is not valid
      bctrl.resetBoard()
      console.log('boards: ', bctrl.boards)
    }

    bctrl.setEditBoard = function(boardId, board) {
      bctrl.editBoardId = boardId
      bctrl.editBoard = angular.copy(board)
      bctrl.isEditing = true
    }

    bctrl.updateBoard = function(boardId, board, isValid) {
      // NOTE: this mutates data - would want a different solution, plus switch to es6 approach to looping array
      if(isValid) {
        for(i = 0; i < bctrl.boards.length; i++) {
          if(bctrl.boards[i].id == boardId) {
            bctrl.boards[i] = board
          }
        }
        bctrl.cancelEditing()
      }
    }

    bctrl.cancelEditing = function() {
      bctrl.isEditing = false
      bctrl.editBoardId = null
      bctrl.editBoard = {
        id: null,
        title: '',
        description: '',
        isPublic: false
      }
    }

    bctrl.resetBoard = function() {
      bctrl.newBoard = {
        id: null,
        title: '',
        description: '',
        isPublic: false
      }
    }
  })