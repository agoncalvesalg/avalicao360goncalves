(function() {
    'use strict';
    angular
        .module('avalicao360GoncalvesApp')
        .factory('Resposta', Resposta);

    Resposta.$inject = ['$resource'];

    function Resposta ($resource) {
        var resourceUrl =  'api/respostas/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
