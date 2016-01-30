

all: clean build

clean:
	rm -rf src index.html all.css all.js

build:
	git clone $(repo) src
	cd src; grunt
	mv src/build/index.html index.html
	mv src/build/all.css all.css
	mv src/build/all.js all.js
	rm -rf src