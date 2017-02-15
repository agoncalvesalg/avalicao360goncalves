(function() {
    'use strict';
    angular
        .module('avalicao360GoncalvesApp')
        .factory('Avaliacao', Avaliacao);

    Avaliacao.$inject = ['$resource', 'DateUtils'];

    function Avaliacao ($resource, DateUtils) {
        var resourceUrl =  'api/avaliacaos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.data = DateUtils.convertLocalDateFromServer(data.data);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.data = DateUtils.convertLocalDateToServer(copy.data);
                    return angular.toJson(copy);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.data = DateUtils.convertLocalDateToServer(copy.data);
                    return angular.toJson(copy);
                }
            }
        });
    }
})();
