const router = require("express").Router();

router.post("/", async (req, res) => {
    res.status(200).json({ message: "Crear Usuario" });
});

router.post("/login", async (req, res) => {
    res.status(200).json({ message: "Iniciar Sesión" });
});

router.post("/logout", async (req, res) => {
    res.status(200).json({ message: "Cerrar Sesión (opcional)" });
});

router.put("/:id", async (req, res) => {
    res.status(200).json({ message: "Actualizar Usuario (opcional)" });
});

router.delete("/:id", async (req, res) => {
    res.status(200).json({ message: "Eliminar Usuario (opcional)" });
});

module.exports = router;