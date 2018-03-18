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

I used Python 3 installed directly from https://python.org as it works better with
py2app when distributing the application.

I use home brew installed make and nvm to install the javascript tools needed
to build, test and release the UI code. I use node 8.2.1 and yarn to manage
the dependancies.

The Python dependancy side is managed using pip and setuptools. I use make to
coordinate the overall build and development processes.

```bash

mkvirtualenv --clear rmfriendui -p /Library/Frameworks/Python.framework/Versions/3.6/bin/python3

```

Then install the requirements and set up the rmfriend console script as follows:

```bash

# Activate the node 8.2.1 environment and the Python virtualenv before doing
# the install e.g.:
nvm use v8.2.1
workon rmfriendui

# set up all dependancies.
make install

```

## running tests

Once the environment is activated and set up you can run all the tests as follows:

```bash

make test

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

make run_sx

```




### Convert a Notebook to SVG

I've produced a very basic converter takes the path to a transferred notebook
and the base output file name. Each page will be converted to its own SVG
drawing. My goal here is to produce a preview I can later use when moving

```bash

$rmfriend notebook_to_svg tests/examples/b8c0aaa8-decb-4d39-9218-b66a7418aef9.lines  out
2018-03-10 15:53:51,917 do_notebook_to_svg DEBUG Reading file 'tests/examples/b8c0aaa8-decb-4d39-9218-b66a7418aef9.lines'
2018-03-10 15:53:51,918 do_notebook_to_svg DEBUG Parsing file 'tests/examples/b8c0aaa8-decb-4d39-9218-b66a7418aef9.lines'

2018-03-10 15:53:51,931 do_notebook_to_svg DEBUG tests/examples/b8c0aaa8-decb-4d39-9218-b66a7418aef9.lines has '1' pages.
2018-03-10 15:53:51,943 do_notebook_to_svg DEBUG Writing file 'out-00.svg'.

oisin@tarsis [remarkable-friend]
$

```

The out-00.svg should look like:
![out-00.svg](https://github.com/oisinmulvihill/remarkable-friend/raw/master/out-00.svg "out-00.svg")


### Convert a Notebook to PNG

This is a very rudimentary converter from lines format to PNG. It works but
needs a lot more work.

```bash

$rmfriend notebook_to_png tests/examples/b8c0aaa8-decb-4d39-9218-b66a7418aef9.lines  out
2018-03-10 15:53:26,660 do_notebook_to_png DEBUG Reading file 'tests/examples/b8c0aaa8-decb-4d39-9218-b66a7418aef9.lines'
2018-03-10 15:53:26,661 do_notebook_to_png DEBUG Parsing file 'tests/examples/b8c0aaa8-decb-4d39-9218-b66a7418aef9.lines'

2018-03-10 15:53:26,674 do_notebook_to_png DEBUG tests/examples/b8c0aaa8-decb-4d39-9218-b66a7418aef9.lines has '1' pages.
2018-03-10 15:53:26,688 do_notebook_to_png DEBUG Writing file 'out-00.png'.

oisin@tarsis [remarkable-friend]
$ls *.png
out-00.png


```

The out-00.png should look like:
![out-00.png](https://github.com/oisinmulvihill/remarkable-friend/raw/master/out-00.png "out-00.png")
