@build:
  go build -o bin/startpage main.go

@run:
  go run main.go

@watch:
  reflex -r '\.(go|css|tmpl|scss)$' -s just run