YARN_VERSION=0.27.5
NODE_VERSION=v8.2.1
NODE_BIN=./node_modules/.bin

install:
	pip install -r requirements.txt
	python setup.py develop
ifneq ($(shell yarn --version),${YARN_VERSION})
	$(error 'You must install yarn ${YARN_VERSION}')
endif
ifneq ($(shell node --version),${NODE_VERSION})
	$(error 'You must install node ${NODE_VERSION}')
endif
	yarn install

clean:
	rm -rf dist
	rm -rf build
	rm -f rmfriendui/static/*.js
	rm -f rmfriendui/static/*.css
	rm -f rmfriendui/static/index.*

build:
	# Build the static resources of the React app which will be put into
	# the rmfrienduis static directory.
	$(NODE_BIN)/webpack-cli --config webpack.config.js

build_osx: build
	# clean out these dirs as it causes build problems
	find rmfriendui/ -iname '*.pyc' -exec rm {} \; -print || echo >/dev/null
	find rmfriendui/ -type d -name '__pycache__' -exec rm -rf {} \; -print  ||  echo >/dev/null
	python py2app_setup.py py2app

run_osx: build_osx
	./dist/reMarkableFriend.app/Contents/MacOS/reMarkableFriend

run: NODE_ENV=development
run: build
	rmfriend-ui

web_run: NODE_ENV=development
web_run:
	$(NODE_BIN)/webpack-dev-server --config webpack.config.js


watch:
	$(NODE_BIN)/webpack-cli --watch
