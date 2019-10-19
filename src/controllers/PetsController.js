class PetsController {
  async index(req, res) {}

  async find(req, res) {}

  async create(req, res) {}

  async update(req, res) {}

  async delete(req, res) {}
}

const petsController = new PetsController();

module.exports = app => {
  app.get("/pets", petsController.index);
  app.get("/pets/:id", petsController.find);
  app.post("/pets", petsController.create);
  app.put("/pets:id", petsController.put);
  app.delete("/pets/:id", petsController.delete);
};
