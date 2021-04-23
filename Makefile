MARKUP_FILES=$(wildcard *.j2)

.DEFAULT_TARGET: all

all: build config markup


build:
	mkdir -p $@
	touch $@


config:
	test -f config.yaml || cp config.template.yaml config.yaml


markup: build/index.html
build/index.html: $(MARKUP_FILES)
	mustache config.yaml src/startpage.html.mustache > build/index.html