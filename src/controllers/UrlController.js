const UrlModel = require("../models/Url");

module.exports = {
  async index(req, res) {
    try {
      const urls = await UrlModel.find({});

      return res.json(urls);
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao carregar as urls ${error}` });
    }
  },

  async show(req, res) {
    try {
      const url = await UrlModel.find({ _id: req.params.id });

      return res.json(url);
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao carregar as urls ${error}` });
    }
  },

  async store(req, res) {
    try {
      const usuario = req.payload ? req.payload.id : null;
      const { urloriginal } = req.body;
      let urlBD = "";
      let urlmodificada = "";

      do {
        urlmodificada = Math.random().toString(36).substring(5);
        urlBD = await UrlModel.find({ urlmodificada });
      } while (urlBD.length > 1);

      const url = await UrlModel.create({
        urloriginal,
        urlmodificada,
        usuario,
      });

      return res.json(url);
    } catch (error) {
      return res.status(400).send({ error });
    }
  },

  async update(req, res) {
    try {
      const url = await UrlModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.json(url);
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao carregar as urls ${error}` });
    }
  },

  async destroy(req, res) {
    try {
      await UrlModel.findByIdAndDelete(req.params.id);

      return res.send({ alert: "Apagado com sucesso" });
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao carregar as urls ${error}` });
    }
  },

  async search(req, res) {
    try {
      const url = await UrlModel.find({ urlmodificada: req.params.search });

      return res.json(url);
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao carregar as urls ${error}` });
    }
  },
};
