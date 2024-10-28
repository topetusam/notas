const router = require("express").Router();

router.get("/", async (req, res) => {
  res.status(200).json({ message: "Obtener Todas las Notas" });
});

router.get("/:id", async (req, res) => {
  res.status(200).json({ message: "Obtener Nota Específica" });
});

router.get("/search", async (req, res) => {
  res.status(200).json({ message: "Buscar Notas" });
});

router.get("/:id/history", async (req, res) => {
  res.status(200).json({ message: "Obtener Historial de Cambios de Nota" });
});

module.exports = router;