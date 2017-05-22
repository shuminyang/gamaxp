'use strict';

var app = angular.module('MyInvest', []);

var controllerForm = app.controller('FormController', function () {
    var vm = this;

    vm.inputName = '';
    vm.inputEmail = '';
    vm.motivo = '';
    vm.emailError = false;

    vm.enviarServidor = function () {
        validarCampos();
    };

    vm.verificarEmail = function () {
        if (this.inputEmail !== '') {
            vm.emailError = validarEmail();
        }
    };

    var validarCampos = function () {
        if (vm.inputName !== '' && vm.inputEmail !== '') {
            console.log('enviar');
        } else {
            console.log('conte erros');
        }
    };

    var validarEmail = function () {
        var atpos = vm.inputEmail.indexOf("@");
        var dotpos = vm.inputEmail.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= vm.inputEmail.length) {
            return true;
        }

        return false;
    };
});

var controllerBody = app.controller('BodyController', function () {

    var vm = this;

    vm.textoEstrutura = true;
    vm.pesquisa = false;

    vm.mostrarPesquisa = function () {
        vm.textoEstrutura = false;
        vm.pesquisa = true;
    };

    vm.mostrarTexto = function () {
        vm.textoEstrutura = true;
        vm.pesquisa = false;
    }

});