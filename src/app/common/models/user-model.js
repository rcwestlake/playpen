'use strict';

angular.module('noterious.common')
  .service('UserModel', function () {
    var service = this,
      currentUser = { username: 'Ryan', email: 'test@email.com', password: 'insecure' };

    service.getCurrentUser = function () {
      return currentUser;
    };

    service.setCurrentUser = function (user) {
      currentUser = user;
    };
  });
