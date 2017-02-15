(function() {
    'use strict';

    angular
        .module('avalicao360GoncalvesApp')
        .controller('RespostaDetailController', RespostaDetailController);

    RespostaDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Resposta', 'Pergunta'];

    function RespostaDetailController($scope, $rootScope, $stateParams, previousState, entity, Resposta, Pergunta) {
        var vm = this;

        vm.resposta = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('avalicao360GoncalvesApp:respostaUpdate', function(event, result) {
            vm.resposta = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
