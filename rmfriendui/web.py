# -*- coding: utf-8 -*-
"""
"""
import json

import bottle
from bottle import request
from bottle import response

from rmfriend import userconfig
from rmfriend.tools.sync import Sync


api = bottle.app()


@api.hook('after_request')
def enable_cors():
    """Allow the browser APP to talk to the API."""
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = (
        'PUT, GET, POST, DELETE, OPTIONS')
    response.headers['Access-Control-Allow-Headers'] = (
        'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
    )


@api.route(
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


@api.route('/notebooks/', method=['OPTIONS', 'GET'])
def notebook_list():
    """Recover the current notebooks from cache.
    """
    notebooks = Sync.notebook_previews()
    return json.dumps(notebooks)


@api.route('/configuration/', method=['OPTIONS', 'GET'])
def recover_configuration():
    """Recover current configuration file contents."""
    config = userconfig.recover_or_create()
    return json.dumps(dict(config['rmfriend']))


@api.route('/configuration/', method=['OPTIONS', 'PUT'])
def save_configuration():
    """Save the configuration to disk."""
    config = userconfig.recover_or_create()

    settings = request.json()
    print('Saving settings: {}'.format(settings))

    config['rmfriend']['address'] = settings['address']
    config['rmfriend']['post'] = settings['post']
    config['rmfriend']['username'] = settings['username']
    config['rmfriend']['cache_dir'] = settings['cache_dir']
    config.write()

    config = userconfig.recover_or_create()
    return json.dumps(dict(config['rmfriend']))


@api.route('/synchronise/start/', method=['OPTIONS', 'PUT'])
def synchronise_start():
    """Kick-off reMarkable synchronisation.
    """
    return json.dumps("OK")


@api.route('/')
def index():
    return '<b>Hello</b>!'


if __name__ == "__main__":
    api.run(host='localhost', port=8800)
