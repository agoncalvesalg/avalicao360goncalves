(function () {
    'use strict';

    angular
        .module('avalicao360GoncalvesApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
