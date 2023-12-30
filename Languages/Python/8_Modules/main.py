from connection.index import server_init
from constants.server import server_constants
from connection.redis.redis import RedisConnection
from test import test

server_init()
test()
Redis = RedisConnection()
Redis.connect()

# data = server_constants()

# print(data)

if __name__ == "__main":
    print("main File")