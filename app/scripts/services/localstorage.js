'use strict';

/**
 * @ngdoc service
 * @name angryTaxiApp.LocalStorage
 * @description
 * # LocalStorage
 * Service in the angryTaxiApp.
 */
angular.module('angryTaxiApp')
  .service('LocalStorage', function ($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var obj = {},
        cmp_storage = {},
        user_position = {},
        fake_position = {};

    obj.getItem = function (key) {
      return JSON.parse(localStorage.getItem(key));
    };

    obj.saveComplaint = function (obj) {
      cmp_storage._id = obj._id;
      cmp_storage.authorized = obj.authorized;
      cmp_storage.email = obj.email;
      cmp_storage.praise = obj.praise;

      localStorage.setItem('ANGRY_TX', JSON.stringify(cmp_storage));
    };

    obj.saveUserPosition = function (obj) {
      user_position.lat = obj.coords.latitude;
      user_position.lng = obj.coords.longitude;
      user_position.timestamp = obj.coords.timestamp;

      localStorage.setItem('ANGRY_TX_POS', JSON.stringify(user_position));
    };

    obj.saveFakePosition = function (obj) {
      fake_position.lat = obj.latitude;
      fake_position.lng = obj.longitude;

      localStorage.setItem('ANGRY_TX_POS', JSON.stringify(fake_position));
    };

    return obj;
  });
