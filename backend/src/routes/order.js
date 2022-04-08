const router = require("express").Router();
const adminAuth = require("../middelewares/adminMiddelWare");
const {
  addOrder,
  getOrdersAdmin,
  getOrdersUser,
  getOrder,
  deleteOrder,
  getPendingOrdersAdmin,
  updateStatusOrder,
  updatePaymentOrder,
} = require("../controlls/order");
const auth = require("../middelewares/auth");

router.post("/", [auth], addOrder);
router.get("/admin", [auth, adminAuth], getOrdersAdmin);
router.patch("/admin", [auth, adminAuth], updateStatusOrder);
router.patch("/payment", [auth], updatePaymentOrder);
router.get("/admin/pending", [auth, adminAuth], getPendingOrdersAdmin);
router.get("/", [auth], getOrdersUser);
router.get("/:id", [auth], getOrder);
router.delete("/:id", [auth], deleteOrder);

module.exports = router;
