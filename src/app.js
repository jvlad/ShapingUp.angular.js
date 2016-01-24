/**
 * Created by zvlad on 1/24/16.
 */

(function () {
    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('GalleryController', function () {
        //todo make property inaccessible from outside: implement getter
        this.current = 0;

        this.setCurrent = function (imageNumber) {
            if (!imageNumber) {
                this.current = 0;
                return;
            }
            this.current = imageNumber;
        };
    });

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            this.review.creationDate = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        }
    });

    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/product-title.html'
        }
    });

    app.directive('productImages', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/product-images.html'
        }
    });

    app.directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/product-description.html'
        }
    });

    app.directive('productSpec', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/product-spec.html'
        }
    });

    app.directive('productReviews', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/product-reviews.html'
        }
    });

    app.directive('productInfoPanels', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/product-info-panels.html',
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
        }
    });

    var gems = [
        {
            name: 'Azurite',
            price: 2,
            description: "This is very short undescriptive description of Azurite",
            specification: "This is very clear and clean specification of Azurite",
            reviews: [
                //{
                //    stars: ,
                //    body: "",
                //    author: ""
                //}
                {
                    stars: 0,
                    body: "This full-color book will show you how to make your websites more interactive and your interfaces more interesting and intuitive.",
                    author: "Jon Duckett"
                },
                {
                    stars: 1,
                    body: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
                    author: "Marijn Haverbeke"
                },
                {
                    stars: 2,
                    body: "It’s easy to learn parts of JavaScript, but much harder to learn it completely—or even sufficiently—whether you’re new to the language or have used it for years. With the 'You Don’t Know JS' book series, you’ll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced JavaScript programmers simply avoid.",
                    author: "Kyle Simpson"
                }
            ],
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
            description: "This is very short undescriptive description of Bloodstone",
            specification: "This is very clear and clean specification of Bloodstone",
            reviews: [
                {
                    stars: 1,
                    body: "This full-color book will show you how to make your websites more interactive and your interfaces more interesting and intuitive.",
                    author: "Jon Duckett"
                },
                {
                    stars: 2,
                    body: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
                    author: "Marijn Haverbeke"
                },
                {
                    stars: 3,
                    body: "It’s easy to learn parts of JavaScript, but much harder to learn it completely—or even sufficiently—whether you’re new to the language or have used it for years. With the 'You Don’t Know JS' book series, you’ll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced JavaScript programmers simply avoid.",
                    author: "Kyle Simpson"
                }
            ],
            images: []
        },
        {
            name: 'Zircon',
            price: 3.95,
            description: "This is very short undescriptive description of Zircon",
            specification: "This is very clear and clean specification of Zircon",
            reviews: [
                {
                    stars: 2,
                    body: "This full-color book will show you how to make your websites more interactive and your interfaces more interesting and intuitive.",
                    author: "Jon Duckett"
                },
                {
                    stars: 3,
                    body: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
                    author: "Marijn Haverbeke"
                },
                {
                    stars: 4,
                    body: "It’s easy to learn parts of JavaScript, but much harder to learn it completely—or even sufficiently—whether you’re new to the language or have used it for years. With the 'You Don’t Know JS' book series, you’ll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced JavaScript programmers simply avoid.",
                    author: "Kyle Simpson"
                }
            ],
            images: [
                {
                    full: "../resources/images/pinguin.jpg"
                }
            ]
        }
    ];
})();
