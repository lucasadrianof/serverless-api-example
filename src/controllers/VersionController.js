const config = require("config");

class VersionController {
  async index(req, res) {
    return res.status(200).send({
      version: config.get("VERSION"),
      env: config.get("ENV")
    });
  }
}

const controller = new VersionController();

module.exports = app => {
  app.get("/version", controller.index);
};
