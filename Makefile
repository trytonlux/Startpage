MARKUP_FILES=$(wildcard src/*.mustache)
STYLE_FILES=$(wildcard src/*.css)

.DEFAULT_TARGET: all
.PHONY: watch serve clean

all: build config markup styles

build:
	mkdir -p $@
	touch $@

config: config.yaml
config.yaml:
	test -f config.yaml || cp config.template.yaml config.yaml

markup: build/index.html
build/index.html: $(MARKUP_FILES)
	mustache config.yaml src/startpage.html.mustache > build/index.html

styles: build/index.css
build/index.css: $(STYLE_FILES)
	sassc $< $@

watch:
	while true; do make $(WATCHMAKE) 1>/dev/null; inotifywait -qre close_write .; done

serve:
	cd build && npx live-server --no-browser --no-css-inject

clean:
	rm -rf ./build