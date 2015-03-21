'use strict';

angular.module('noterious')
  .controller('MainCtrl', function (UserModel, Auth, $state) {
    var main = this;
    main.auth = Auth;
    main.currentUser = null;
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

    main.logout = function () {
      UserModel.logout();
    };

    main.auth.$onAuth(function (authData) {
      if (authData) {
        UserModel.setCurrentUser(authData.uid);
        main.currentUser = authData.uid;
        $state.go('boards');
      } else {
        main.currentUser = null;
        $state.go('login');
      }
    });
  });
