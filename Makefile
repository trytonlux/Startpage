.DEFAULT_TARGET: all

all: build config


build:
	mkdir -p $@
	touch $@


config:
	test -f config.yaml || cp config.template.yaml config.yaml
