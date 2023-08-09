import logger from "../../logger";
const Redlock = require('redlock');
import config from "../../connections/config";
const ioredis = require("ioredis")

const {
    REDIS_HOST,
    REDIS_PASSWORD,
    REDIS_PORT,
    REDIS_DB
} = config();

const redisConfig: {
    host: string;
    port: number;
    db: number;
    password?: string;
} = {
    host: REDIS_HOST,
    port: REDIS_PORT,
    db: REDIS_DB
};

if (REDIS_PASSWORD !== '') redisConfig.password = REDIS_PASSWORD;

const redisA = new ioredis(redisConfig);

let redlock: any = null;

function registerRedlockError(): void {
    redlock.on('error', (error: any) => logger.error('REDIS_LOCK_ERROR', error));
}

function initializeRedlock(): void {

    if (redlock) return redlock;

    redlock = new Redlock([redisA], {
        // The expected clock drift; for more details see:
        driftFactor: 0.01, // multiplied by lock ttl to determine drift time
        // ∞ retries
        retryCount: -1,
        // the time in ms between attempts
        retryDelay: 200, // time in ms
        // the max time in ms randomly added to retries
        // to improve performance under high contention
        retryJitter: 200, // time in ms
        // The minimum remaining time on a lock before an extension is automatically
        // attempted with the `using` API.
        automaticExtensionThreshold: 500
    });

    registerRedlockError();
    return redlock;
}

function getLock() {
    return redlock
}

const exportObject = {
    init: initializeRedlock,
    getLock
}

export = exportObject
