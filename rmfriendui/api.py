# -*- coding: utf-8 -*-
"""
"""


class API(object):
    """
    """
    def __init__(self):
        super(API, self).__init__()
        self._settings = {}

    def connect_device(self, settings):
        """Connect the the reMarkable device.
        """
        self._settings = settings
        print("Recieve settings: {}".format(self._settings))
        return {
            'message': 'Connected OK'
        }

    def recover_notebooks(self):
        """Connect the the reMarkable device.
        """
        print("Using settings: {}".format(self._settings))
        return {
            'notebooks': [
                {"name": "Mock Notebook1"},
                {"name": "Mock Notebook2"},
            ]
        }
