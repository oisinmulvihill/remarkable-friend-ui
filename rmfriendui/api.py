# -*- coding: utf-8 -*-
"""
"""
import json
from rmfriend.tools.sync import Sync


class API(object):
    """
    """
    def list_notebooks(self):
        """
        """
        notebooks = Sync.notebook_previews()
        returned = json.dumps(notebooks)
        print("returning: {}".format(returned))
        return returned
