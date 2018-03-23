# -*- coding: utf-8 -*-
"""

"""
import json

import bottle
from bottle import response

from rmfriend.tools.sync import Sync


class EnableCors(object):
    name = 'enable_cors'
    api = 2

    def apply(self, fn, context):
        def _enable_cors(*args, **kwargs):
            # set CORS headers
            response.headers['Access-Control-Allow-Origin'] = '*'
            response.headers['Access-Control-Allow-Methods'] = (
                'GET, POST, PUT, OPTIONS'
            )
            response.headers['Access-Control-Allow-Headers'] = (
                'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
            )
            if bottle.request.method != 'OPTIONS':
                # actual request; reply with the actual response
                return fn(*args, **kwargs)

        return _enable_cors


app = bottle.app()
app.install(EnableCors())


@app.route('/image/', method=['OPTIONS', 'GET'])
def image():
    """Recover the current notebooks from cache.
    """
    notebooks = Sync.notebook_previews()
    returned = json.dumps(notebooks)
    # print("returning: {}".format(returned))
    return returned


@app.route('/notebooks/', method=['OPTIONS', 'GET'])
def notebook_list():
    """Recover the current notebooks from cache.
    """
    notebooks = Sync.notebook_previews()
    returned = json.dumps(notebooks)
    # print("returning: {}".format(returned))
    return returned


@app.route('/')
def index():
    return '<b>Hello</b>!'


app.run(host='localhost', port=8800)
