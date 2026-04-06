// Middleware básico solicitado por el instructivo
const authMiddleware = (req, res, next) => {
    console.log(`[AUTH] Verificando acceso a ruta: ${req.method} ${req.originalUrl}`);
    // Aquí iría la lógica de verificación de tokens en un entorno de producción
    // Por ahora lo dejamos continuar para fines de prueba
    next();
};

module.exports = authMiddleware;
