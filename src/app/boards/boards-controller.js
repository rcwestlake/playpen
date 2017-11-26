angular.module('noterious')
  .controller('BoardsCtrl', function(currentUser, BoardsModel) {
    var bctrl = this
    bctrl.title = 'THE title!!!'

    bctrl.boards = [
      {
        id: 1,
        title: 'Idea 1',
        description: 'blahhh'
      },
      {
        id: 2,
        title: 'Board 2',
        description: 'the deets'
      },
      {
        id: 3,
        title: 'Board 3',
        description: 'the better deets'
      }
    ]

    console.log(bctrl.boards)
  })