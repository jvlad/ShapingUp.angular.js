/**
 * Created by zvlad on 1/24/16.
 */

(function () {
    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {name: 'Azurite', price: 2.95},
        {name: 'Bloodstone', price: 5.95},
        {name: 'Zircon', price: 3.95}
    ];
})();
