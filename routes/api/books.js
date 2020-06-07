const router = require("express").Router();
const index = require("../../controllers/index");

// Matches with "/api/books"
router.route("/")
  .get(index.findAll)
  .post(index.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(index.findById)
  .put(index.update)
  .delete(index.remove);

module.exports = router;