/**
 * Created by zvlad on 1/24/16.
 */

(function () {
    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('PanelController', function (){
        var selectedTabNumber = 1;
        this.selectTabByNumber = function (tabNumber){
            selectedTabNumber = tabNumber;
        };

        this.getSelectedTabNumber = function () {
            return selectedTabNumber;
        };

        this.getClassForSpecifiedTab = function (tabNumber) {
            if (tabNumber === selectedTabNumber){
                return "active"
            } else {
                return "";
            }
        }
    });

    var gems = [
        {
            name: 'Azurite',
            price: 2,
            images: [
                {
                    full: "../resources/images/dog.jpg"
                },
                {
                    full: "../resources/images/pinguin.jpg"
                },
                {
                    full: "../resources/images/elephant.jpg"
                }
            ]
        },
        {
            name: 'Bloodstone',
            price: 5.95,
            images: []
        },
        {
            name: 'Zircon',
            price: 3.95,
            images: [
                {
                    full: "../resources/images/pinguin.jpg"
                }
            ]
        }
    ];
})();
