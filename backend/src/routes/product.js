const router = require("express").Router();
const {
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  getProductsByCategory,
} = require("../controlls/product");
const auth = require("../middelewares/auth");
const adminAuth = require("../middelewares/adminMiddelWare");

router.post("/", [auth, adminAuth], addProduct);

router.get("/", getProducts);
router.get("/:category", getProductsByCategory);

router.get("/product/:id", getProduct);
router.delete("/:id", [auth, adminAuth], deleteProduct);
router.patch("/:id", [auth, adminAuth], updateProduct);

module.exports = router;
