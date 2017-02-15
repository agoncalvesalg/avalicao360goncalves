(function() {
    'use strict';

    angular
        .module('avalicao360GoncalvesApp')
        .controller('AvaliacaoModeloDetailController', AvaliacaoModeloDetailController);

    AvaliacaoModeloDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'AvaliacaoModelo', 'Equipe'];

    function AvaliacaoModeloDetailController($scope, $rootScope, $stateParams, previousState, entity, AvaliacaoModelo, Equipe) {
        var vm = this;

        vm.avaliacaoModelo = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('avalicao360GoncalvesApp:avaliacaoModeloUpdate', function(event, result) {
            vm.avaliacaoModelo = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
