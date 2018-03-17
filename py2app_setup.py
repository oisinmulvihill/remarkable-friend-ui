"""
This is an example of py2applet setup.py script for freezing your pywebview
application

Usage:
    python setup.py py2app

"""
from setuptools import setup, find_packages


ENTRY_POINT = ['scripts/webviewer.py']

DATA_FILES = []

PKG_DATA = {
    'viewer': [
        'static/index.html',
        'static/app.bundle.js',
        'static/main.css',
    ]
}

OPTIONS = {
    'argv_emulation': False,
    'strip': True,
    # 'iconfile': 'icon.icns',
    'includes': ['WebKit', 'Foundation', 'webview'],
    #'packages': ['flask', 'werkzeug', 'config', 'jinja2'],
    'packages': ['viewer'],
    'plist': {
        'CFBundleName': 'reMarkableFriend',
        'CFBundleDisplayName': 'reMarkableFriend',
        'CFBundleGetInfoString': "Notebook helper friend",
        'CFBundleIdentifier': "com.sourceweaver.remarkable.friend",
        'CFBundleVersion': "1.0.0",
        'CFBundleShortVersionString': "1.0.0",
        'NSHumanReadableCopyright':
            u"Copyright © 2018, Oisin Mulvihill, All Rights Reserved"
    }}

setup(
    app=ENTRY_POINT,
    packages=find_packages(),
    data_files=DATA_FILES,
    package_data=PKG_DATA,
    options={'py2app': OPTIONS},
    setup_requires=['py2app'],
)
