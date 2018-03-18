# reMarkable Friend UI

This provides the interface to allow the manipulation reMarkable notebooks on a desktop machine.

This uses the companion project to provide the manipulation functionality:

 - https://github.com/oisinmulvihill/remarkable-friend

This project uses https://github.com/r0x0r/pywebview to run a HTML/Javascript/CSS
UI which uses special bridging to call the Python backend code. It *does not*
need a running webserver. I use webpack to manage the development of the
ReactJS + Redux + Sagas + SASS based UI. The pywebview then loads the built
html, css & javascript bundles.

The reMarkable Friend UI builds into a MacOSX application using py2app. It
could also be bundled into a Windows application with py2exe and packaged for
Linux as well.


# Development

## Environment

I use Python 3 installed directly from https://python.org as it works better with
py2app when distributing the application. I've installed virtualenvwrapper on
my system to manage python environments for development.

```bash

# Make sure to use the download python and not the system one:
mkvirtualenv --clear rmfriendui -p /Library/Frameworks/Python.framework/Versions/3.6/bin/python3

```

I use home brew installed make and nvm to install the javascript tools needed
to build, test and release the UI code. I use node 8.2.1 and yarn to manage
the dependancies.

The Python dependancy side is managed using pip and setuptools. I use make to
coordinate the overall development processes.

### Set Up

Activate the node 8.2.1 environment and the Python virtualenv before doing the
install.

```bash

nvm use v8.2.1
workon rmfriendui

# set up all dependancies into the node and python environments.
make install

# change into the remarkable-friend checkout and also do:
make install

```

## Developing the Javascript side using a browser and its handy dev tools

This will use webpack to run a dev server so you can build and debug in a
normal browser.

The pywebview functionality will not be present in this mode, so mocked
responses will be returned instead.

```bash

make web_run

```

## building the Mac OSX app

```bash

# Activate the environments:
nvm use v8.2.1
workon rmfriendui

make build_osx

# On success ./dist will contain the reMarkableFriend.app

```

## Run the build Mac OSX app

You can navigate to the ./dist directory in finder or run the make command:

```bash

make run_osx

```
