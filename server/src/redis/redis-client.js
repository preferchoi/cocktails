import Redis from "ioredis";

let redisInstance;

const createRedisClient = () => {
  if (!redisInstance) {
    const { REDIS_URL, REDIS_HOST, REDIS_PORT } = process.env;
    redisInstance = REDIS_URL
      ? new Redis(REDIS_URL)
      : new Redis({
        host: REDIS_HOST || '127.0.0.1',
        port: Number(REDIS_PORT) || 6379,
      });

    redisInstance.on('error', (error) => {
      console.error('Redis connection error:', error);
    });
  }

  return redisInstance;
};

export const redis = createRedisClient();

export const ensureRedisConnection = async () => {
  try {
    await redis.ping();
    console.log('Redis connection established');
  } catch (error) {
    console.error('Unable to establish Redis connection:', error);
    throw error;
  }
};

