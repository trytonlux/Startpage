package main

import (
	"embed"
	"fmt"
	"net/http"
	"text/template"

	"github.com/bep/golibsass/libsass"
)

type Link struct {
	Title string
	URL   string
}

//go:embed "assets/*"
var assets embed.FS
var css []byte = generateCSS()

func generateCSS() []byte {
	source, err := assets.ReadFile("assets/index.scss")

	if err != nil {
		panic(err)
	}

	transpiler, _ := libsass.New(libsass.Options{
		OutputStyle: libsass.CompressedStyle,
	})

	result, err := transpiler.Execute(string(source))

	if err != nil {
		panic(err)
	}

	return []byte(result.CSS)
}

func serveCSS(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/css")
	w.Write(css)
}

func render(w http.ResponseWriter, name string, data any) {
	template_name := fmt.Sprintf("assets/%s.html.tmpl", name)
	template, err := template.ParseFS(assets, template_name)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprint(w, err)
		return
	}

	template.Execute(w, data)
}

func index(w http.ResponseWriter, r *http.Request) {
	test := []Link{
		{"GitHub", "github.com"},
		{"Reddit", "reddit.com"},
		{"Steam", "store.steampowered.com"},
	}

	render(w, "index", test)
}

func main() {
	http.HandleFunc("/", index)
	http.HandleFunc("/index.css", serveCSS)

	http.ListenAndServe(":8080", nil)
}
