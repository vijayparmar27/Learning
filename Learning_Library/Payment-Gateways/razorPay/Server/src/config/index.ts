import "dotenv/config";

export function config() {
    const processEnv = process.env;

    const port = `PORT`;
    const mongoUrl = `MONGO_URL`;

    return Object.freeze({
        PORT: processEnv[port],
        MONGO_URL: processEnv[mongoUrl],
    })

}