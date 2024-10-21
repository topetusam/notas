app.use(express.json());

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.clear();
        console.error(err.message);
        return res.status(400).json({
            status: 400,
            message: 'El JSON enviado no cumple con el formato requerido'
        });
    }
    next();
});