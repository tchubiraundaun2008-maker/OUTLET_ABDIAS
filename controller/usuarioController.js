const bcrypt = require("bcrypt");

const usuarioModel = require("../model/UsuarioModel");

const criarUsuario = async(req, res) => {
  try {
    const {
      nome,
      login,
      senha
    } = req = body;

    const senhaSecreta = await bcrypt.hash(senha);

    await usuarioModel.crarUsuario (
            nome,
            login,
            senhaSecreta
    );

    res.status(201).json({
      mensagem:"usuario criado com sucesso!"
    })

  } catch (erro) {
      res.status(502),json({
        mensagem:"erro ao cadastrar usuario!"
      })
  }
}
