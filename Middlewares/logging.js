export const loggingMiddleware = (request, _, next) => {
    console.log(`${request.method} request to ${request.path} arrived!`);
    next();
};