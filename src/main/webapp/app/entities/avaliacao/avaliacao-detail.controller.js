(function() {
    'use strict';

    angular
        .module('avalicao360GoncalvesApp')
        .controller('AvaliacaoDetailController', AvaliacaoDetailController);

    AvaliacaoDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Avaliacao', 'User', 'Resposta'];

    function AvaliacaoDetailController($scope, $rootScope, $stateParams, previousState, entity, Avaliacao, User, Resposta) {
        var vm = this;

        vm.avaliacao = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('avalicao360GoncalvesApp:avaliacaoUpdate', function(event, result) {
            vm.avaliacao = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
