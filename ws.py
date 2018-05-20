# https://websockets.readthedocs.io/en/stable/intro.html#basic-example
import asyncio
import websockets

WSURL = "ws://localhost:8800/websocket"


async def hello():
    async with websockets.connect(WSURL) as websocket:
        name = input("What's your name? ")
        await websocket.send(name)
        print("> {}".format(name))

        greeting = await websocket.recv()
        print("< {}".format(greeting))

asyncio.get_event_loop().run_until_complete(hello())
