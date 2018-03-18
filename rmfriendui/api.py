# -*- coding: utf-8 -*-
"""
"""
import json
from rmfriend.tools.sftp import SFTP


class API(object):
    """
    """
    def list_notebooks(self, settings):
        """Recover a list of notebook informatino from reMarkable.
        """
        print("Using settings: {}".format(settings))
        auth = dict(
            hostname=settings['address'],
            username=settings['username'],
            password=settings['password'],
        )

        notebooks = []
        with SFTP.connect(**auth) as sftp:
            results = SFTP.notebooks_from_listing(sftp.listdir())
            notebooks = SFTP.notebook_ls(sftp, results)

        returned = json.dumps(notebooks)
        print("returning: {}".format(returned))

        return returned
