'use strict';

angular.module('noterious')
  .controller('MainCtrl', function (UserModel, $state) {
    var main = this;
    main.currentUser = UserModel.getCurrentUser();
    main.currentColor = 'blue';

    main.colors = [
      'blue',
      'green',
      'orange',
      'red',
      'yellow'
    ];

    main.setCurrentColor = function(color) {
      main.currentColor = color;
    };
  });
