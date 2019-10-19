class PetsController {
  async index(req, res) {
    res.status(200).send({ message: "listing pets" });
  }

  async find(req, res) {
    const { id } = req.params;
    res.status(200).send({ message: `Found pet ${id}` });
  }

  async create(req, res) {
    res.status(201).send({ message: "creating a pet" });
  }

  async update(req, res) {
    const { id } = req.params;
    res.status(200).send({ message: `Updated pet ${id}` });
  }

  async delete(req, res) {
    const { id } = req.params;
    res.status(204).send({ message: `Deleted pet ${id}` });
  }
}

const petsController = new PetsController();

module.exports = app => {
  app.get("/pets", petsController.index);
  app.get("/pets/:id", petsController.find);
  app.post("/pets", petsController.create);
  app.put("/pets:id", petsController.update);
  app.delete("/pets/:id", petsController.delete);
};
