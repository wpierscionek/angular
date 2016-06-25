// Setting up controller


(function() {

    "use strict";
    // Referencing the module we already created
    angular
        .module("ngClassifieds")
        // Creating controller method and injecting $scope into parameters into annonymous function asociated with controller
        .controller("classifiedsCtrl", function($scope) {
            // Controller is now tied to our view in HTML by using 'ng-controller="classifiedsCtrl'
            // $scope is a special object thats available to us in controllers, and its the glue between controllers and view
            $scope.classifieds = [{
                "id": "1",
                "title": "20 Foot Equipment Trailer",
                "description": "2013 rainbow trailer 20 feet x82 inch deck area.",
                "price": 6000,
                "posted": "2015-10-24",
                "contact": {
                    "name": "John Doe",
                    "phone": "(555-222-1111)",
                    "email": "johndoe@gmail.com"
                },
                "categories": [
                    "Vehicles",
                    "Parts and Accessories"
                ],
                "image": "http://www.hoopertrailer.com/DoubleRampLandscape.jpg",
                "views": 213
            }, {
                "id": "2",
                "title": "20 Foot Equipment Trailer",
                "description": "2013 rainbow trailer 20 feet x82 inch deck area.",
                "price": 6000,
                "posted": "2015-10-24",
                "contact": {
                    "name": "John Doe",
                    "phone": "(555-222-1111)",
                    "email": "johndoe@gmail.com"
                },
                "categories": [
                    "Vehicles",
                    "Parts and Accessories"
                ],
                "image": "http://www.hoopertrailer.com/DoubleRampLandscape.jpg",
                "views": 213
            }, {
                "id": "3",
                "title": "20 Foot Equipment Trailer",
                "description": "2013 rainbow trailer 20 feet x82 inch deck area.",
                "price": 6000,
                "posted": "2015-10-24",
                "contact": {
                    "name": "John Doe",
                    "phone": "(555-222-1111)",
                    "email": "johndoe@gmail.com"
                },
                "categories": [
                    "Vehicles",
                    "Parts and Accessories"
                ],
                "image": "http://www.hoopertrailer.com/DoubleRampLandscape.jpg",
                "views": 213
            }, {
                "id": "4",
                "title": "20 Foot Equipment Trailer",
                "description": "2013 rainbow trailer 20 feet x82 inch deck area.",
                "price": 6000,
                "posted": "2015-10-24",
                "contact": {
                    "name": "John Doe",
                    "phone": "(555-222-1111)",
                    "email": "johndoe@gmail.com"
                },
                "categories": [
                    "Vehicles",
                    "Parts and Accessories"
                ],
                "image": "http://www.hoopertrailer.com/DoubleRampLandscape.jpg",
                "views": 213
            }, {
                "id": "4",
                "title": "20 Foot Equipment Trailer",
                "description": "2013 rainbow trailer 20 feet x82 inch deck area.",
                "price": 6000,
                "posted": "2015-10-24",
                "contact": {
                    "name": "John Doe",
                    "phone": "(555-222-1111)",
                    "email": "johndoe@gmail.com"
                },
                "categories": [
                    "Vehicles",
                    "Parts and Accessories"
                ],
                "image": "http://www.hoopertrailer.com/DoubleRampLandscape.jpg",
                "views": 213
            }, {
                "id": "5",
                "title": "20 Foot Equipment Trailer",
                "description": "2013 rainbow trailer 20 feet x82 inch deck area.",
                "price": 6000,
                "posted": "2015-10-24",
                "contact": {
                    "name": "John Doe",
                    "phone": "(555-222-1111)",
                    "email": "johndoe@gmail.com"
                },
                "categories": [
                    "Vehicles",
                    "Parts and Accessories"
                ],
                "image": "http://www.hoopertrailer.com/DoubleRampLandscape.jpg",
                "views": 213
            }]

        });
})();
