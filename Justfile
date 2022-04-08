@build:
  go build -o bin/startpage main.go

@run:
  go run main.go

@watch:
  reflex -s just run