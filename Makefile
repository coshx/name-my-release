repo = https://github.com/coshx/name-my-release

all: clean build

clean:
	rm -rf src index.html all.css all.js

build:
	git clone $(repo) src
	cd src; npm install; bower install; grunt
	mv src/build/index.html index.html
	mv src/build/all.css all.css
	mv src/build/all.js all.js
	rm -rf src