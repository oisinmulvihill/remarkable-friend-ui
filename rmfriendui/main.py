# -*- coding: utf-8 -*-
"""
"""
import os
import codecs
import inspect
import platform
import threading
import pkg_resources

import webview

from rmfriendui import static
from rmfriendui.api import API


def run_path():
    return os.path.dirname(
        os.path.abspath(
            inspect.getfile(
                inspect.currentframe())))


def is_bundled():
    """
    """
    returned = False

    is_packaged = False
    # A string like:
    # '/Users/oisin/src/reMarkable/remarkable-ui/dist/reMarkableFriend.app/
    #       Contents/Resources/lib/python36.zip/rmfriendui/static'
    if run_path().find('Contents/Resources') > -1:
        is_packaged = True

    if platform.system().lower() == 'darwin' and is_packaged:
        # We are running as part of the py2app bundle.
        returned = True

    return returned


def static_path_for(path, filename):
    returned = "file://{}/{}".format(path, filename)
    print(
        "static_path_for '{}' and '{}' is '{}'.".
        format(path, filename, returned))
    return returned


def create_app():
    """
    """
    if is_bundled():
        print("Running in Bundled mode.")

        decompress_path = run_path()
        # Search for Resources in the path
        decompress_path = os.path.split(
            decompress_path[:decompress_path.find('Resources')])[0]
        # '/Users/oisin/src/reMarkable/remarkable-ui/dist/reMarkableFriend.app
        #   /Contents'
        # Add it back in, we'll decompress here:
        decompress_path = os.path.join(decompress_path, 'Resources')
        print("Running in bundle. Decompress path is '{}'".format(
            decompress_path
        ))

        # I need to recover the static files from the compressed bundle and
        # write them to a place the pywebview will be able to load from.
        for resource in ['index.html', 'app.bundle.js', 'main.css']:
            src_file = os.path.join('static', resource)
            dest_file = os.path.join(decompress_path, resource)
            src_data = pkg_resources.resource_string('rmfriendui', src_file)
            with open(dest_file, 'wb') as fd:
                page = fd.write(src_data)
            print("Wrote '{}' to '{}'".format(src_file, dest_file))

        base_path = decompress_path

    else:
        print("Running in source checkout mode.")
        base_path = static.__path__[0]

    print("Base path is '{}'.".format(base_path))

    index_html = os.path.join(base_path, 'index.html')
    with codecs.open(index_html, 'r', encoding='utf-8') as fd:
        page = fd.read()

    # Correct the path for:
    #  <script type="text/javascript" src="app.bundle.js"></script>
    app_bundle_js = static_path_for(base_path, 'app.bundle.js')
    page = page.replace(
        '<script type="text/javascript" src="app.bundle.js"></script>',
        '<script type="text/javascript" src="{}"></script>'.
        format(app_bundle_js)
    )

    # Correct the path for:
    #   <link href="main.css" rel="stylesheet">
    main_css = static_path_for(base_path, 'main.css')
    page = page.replace(
        '<link href="main.css" rel="stylesheet">',
        '<link href="{}" rel="stylesheet">'.
        format(main_css)
    )

    print("Loading HTML:\n\n{}\n".format(page))

    webview.load_html(page)


def main():
    """
    """
    t = threading.Thread(target=create_app)
    t.start()

    webview.create_window('WEB UI', js_api=API(), debug=True)
