from constants.server import server_constants

class RedisConnection:
    def __init__(self) -> None:
        pass

    def connect(self):
        print("connect :: redis")
        data = server_constants()
        print(data)
