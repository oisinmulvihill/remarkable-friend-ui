# -*- coding: utf-8 -*-
"""

https://stackoverflow.com/questions/10316374/bottle-websocket

"""
import json
from time import sleep

import bottle
from bottle import request
from bottle import response
from gevent import monkey
from gevent.pywsgi import WSGIServer
from geventwebsocket import WebSocketHandler, WebSocketError

from rmfriend import userconfig
from rmfriend.tools.sync import Sync

monkey.patch_all()


app = bottle.app()


@app.route('/websocket')
def handle_websocket():
    wsock = request.environ.get('wsgi.websocket')
    if not wsock:
        bottle.abort(400, 'Expected WebSocket request.')
    while True:
        try:
            message = wsock.receive()
            wsock.send("Your message was: %r" % message)
            sleep(3)
            wsock.send("Your message was: %r" % message)
        except WebSocketError:
            break


@app.hook('after_request')
def enable_cors():
    """Allow the browser APP to talk to the API."""
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = (
        'PUT, GET, POST, DELETE, OPTIONS')
    response.headers['Access-Control-Allow-Headers'] = (
        'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
    )


@app.route(
    "/static/<document_id>/thumbnails/<filepath:re:.*\.(jpg|png|gif|ico|svg)>",
    method=['OPTIONS', 'GET']
)
def static(document_id, filepath):
    """Recover the current notebooks from cache.
    """
    config = userconfig.recover_or_create()
    cache_dir = config['rmfriend']['cache_dir']
    filename = "{}/{}.thumbnails/{}".format(cache_dir, document_id, filepath)
    with open(filename, 'rb') as fd:
        returned = fd.read()
    return returned


@app.route('/notebooks/', method=['OPTIONS', 'GET'])
def notebook_list():
    """Recover the current notebooks from cache.
    """
    notebooks = Sync.notebook_previews()
    return json.dumps(notebooks)


@app.route('/configuration/', method=['OPTIONS', 'GET'])
def recover_configuration():
    """Recover current configuration file contents."""
    config = userconfig.recover_or_create()
    return json.dumps(dict(config['rmfriend']))


@app.route('/')
def index():
    return '<b>Hello</b>!'


host = "127.0.0.1"
port = 8800

server = WSGIServer(
    (host, port),
    app,
    handler_class=WebSocketHandler
)
print("access @ http://{}:{}/websocket.html".format(host, port))
server.serve_forever()
