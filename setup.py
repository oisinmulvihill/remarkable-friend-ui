# -*- coding: utf-8 -*-
"""
"""
from setuptools import setup, find_packages

setup(
    name='remarkable-friend-ui',
    version='1.0.0',
    packages=find_packages(),
    setup_requires=[],
    install_requires=[],
    entry_points={
        'console_scripts': 'rmfriend-ui=rmfriendui.main:main'
    },
)
