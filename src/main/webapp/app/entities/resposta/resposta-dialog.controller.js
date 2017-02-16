(function() {
    'use strict';

    angular
        .module('avalicao360GoncalvesApp')
        .controller('RespostaDialogController', RespostaDialogController);

    RespostaDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', '$q', 'entity', 'Resposta', 'Pergunta', 'Avaliacao'];

    function RespostaDialogController ($timeout, $scope, $stateParams, $uibModalInstance, $q, entity, Resposta, Pergunta, Avaliacao) {
        var vm = this;

        vm.resposta = entity;
        vm.clear = clear;
        vm.save = save;
        vm.perguntas = Pergunta.query({filter: 'resposta-is-null'});
        $q.all([vm.resposta.$promise, vm.perguntas.$promise]).then(function() {
            if (!vm.resposta.pergunta || !vm.resposta.pergunta.id) {
                return $q.reject();
            }
            return Pergunta.get({id : vm.resposta.pergunta.id}).$promise;
        }).then(function(pergunta) {
            vm.perguntas.push(pergunta);
        });
        vm.avaliacaos = Avaliacao.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.resposta.id !== null) {
                Resposta.update(vm.resposta, onSaveSuccess, onSaveError);
            } else {
                Resposta.save(vm.resposta, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('avalicao360GoncalvesApp:respostaUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
