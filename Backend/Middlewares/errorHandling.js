export const errorHandling = (error, request, response, next) => {
    console.log(error);
    response.status(error.status ?? 500).send(error.message);
};