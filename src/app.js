/**
 * Created by zvlad on 1/24/16.
 */

(function () {
    var app = angular.module('store', ['store-products']);
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

    var gems = [
        {
            name: 'Azurite',
            price: 2,
            description: "This is very short undescriptive description of Azurite",
            specification: "This is very clear and clean specification of Azurite",
            reviews: [
                {
                    stars: 0,
                    body: "This full-color book will show you how to make your websites more interactive and your interfaces more interesting and intuitive.",
                    author: "Jon Duckett",
                    creationDate: 1454345881100
                },
                {
                    stars: 1,
                    body: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
                    author: "Marijn Haverbeke",
                    creationDate: 1454345881100
                },
                {
                    stars: 2,
                    body: "It’s easy to learn parts of JavaScript, but much harder to learn it completely—or even sufficiently—whether you’re new to the language or have used it for years. With the 'You Don’t Know JS' book series, you’ll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced JavaScript programmers simply avoid.",
                    author: "Kyle Simpson",
                    creationDate: 1454345881100
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
                    author: "Jon Duckett",
                    creationDate: 1454345881100
                },
                {
                    stars: 2,
                    body: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
                    author: "Marijn Haverbeke",
                    creationDate: 1454345881100
                },
                {
                    stars: 3,
                    body: "It’s easy to learn parts of JavaScript, but much harder to learn it completely—or even sufficiently—whether you’re new to the language or have used it for years. With the 'You Don’t Know JS' book series, you’ll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced JavaScript programmers simply avoid.",
                    author: "Kyle Simpson",
                    creationDate: 1454345881100
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
                    author: "Jon Duckett",
                    creationDate: 1454345881100
                },
                {
                    stars: 3,
                    body: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
                    author: "Marijn Haverbeke",
                    creationDate: 1454345881100
                },
                {
                    stars: 4,
                    body: "It’s easy to learn parts of JavaScript, but much harder to learn it completely—or even sufficiently—whether you’re new to the language or have used it for years. With the 'You Don’t Know JS' book series, you’ll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced JavaScript programmers simply avoid.",
                    author: "Kyle Simpson",
                    creationDate: 1454345881100
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
