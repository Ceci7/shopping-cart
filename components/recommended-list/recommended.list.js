(function (angular) {
    'use strict';
    let app = angular.module('eShopper');

    app.component('recommendedList', {
        templateUrl: 'components/recommended-list/recommended.list.html',
        controller: RecommendedListCtrl
    });

    RecommendedListCtrl.$inject = ['$scope'];

    function RecommendedListCtrl($scope) {

    }


}(angular))