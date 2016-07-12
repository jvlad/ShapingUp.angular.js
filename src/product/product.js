/**
 * Created by zvlad on 1/25/16.
 */

(function () {
    var app = angular.module('store-products', []);

    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'product/partials/product-title.html'
        };
    });

    app.directive('productImages', function () {
        return {
            restrict: 'E',
            templateUrl: 'product/partials/product-images.html'
        };
    });

    app.directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: 'product/partials/product-description.html'
        };
    });

    app.directive('productSpec', function () {
        return {
            restrict: 'E',
            templateUrl: 'product/partials/product-spec.html'
        };
    });

    app.directive('productReviews', function () {
        return {
            restrict: 'E',
            templateUrl: 'product/partials/product-reviews.html'
        };
    });

    app.directive('productInfoPanels', function () {
        return {
            restrict: 'E',
            templateUrl: 'product/partials/product-info-panels.html',
            controller: function () {
                var selectedTabNumber = 1;

                this.selectTabByNumber = function (tabNumber) {
                    if (!tabNumber) {
                        selectedTabNumber = 1;
                        return;
                    }
                    selectedTabNumber = tabNumber;
                };

                this.getSelectedTabNumber = function () {
                    return selectedTabNumber;
                };

                this.isNumberOfSelectedTab = function (tabNumber) {
                    return (tabNumber === selectedTabNumber);
                };

                this.getClassForSpecifiedTab = function (tabNumber) {
                    if (tabNumber === selectedTabNumber) {
                        return "active"
                    } else {
                        return "";
                    }
                }
            },
            controllerAs: 'panels'
        };
    });
})();