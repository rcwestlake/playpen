angular.module('noterious')
  .controller('BoardsCtrl', function(BoardsModel) {
    var bctrl = this

    var newBoard = {
      title: '',
      description: '',
      isPublic: false
    }

    bctrl.boards = [
      {
        id: 1,
        title: 'test',
        description: 'do things'
      },
      {
        id: 2, 
        title: 'biz ideas',
        description: 'do bizzy things'
      }
    ]

    console.log(bctrl.boards)
  })