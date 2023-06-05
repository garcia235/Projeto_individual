var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/enviarMensagem", function (req, res) {
    usuarioController.enviarMensagem(req, res);
});
router.post("/inserirPartidas", function (req, res) {
    usuarioController.inserirPartidas(req, res);
});

router.get("/buscarPartidas/:fkUsuarioVar", function (req, res) {
    usuarioController.buscarPartidas(req, res);
});

router.post("/verificar_nickname", function (req, res) {
    usuarioController.verificar_nickname(req, res);
});

module.exports = router;