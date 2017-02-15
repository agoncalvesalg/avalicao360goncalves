(function() {
    'use strict';
    angular
        .module('avalicao360GoncalvesApp')
        .factory('Pergunta', Pergunta);

    Pergunta.$inject = ['$resource'];

    function Pergunta ($resource) {
        var resourceUrl =  'api/perguntas/:id';

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
