package main

import (
	"embed"
	"fmt"
	"net/http"
	"text/template"
)

type Link struct {
	Title string
	URL   string
}

//go:embed "assets/*"
var assets embed.FS

func render(w http.ResponseWriter, name string, data any) (err error) {
	template_name := fmt.Sprintf("assets/%s.html.tmpl", name)

	template, err := template.ParseFS(assets, template_name)

	if err != nil {
		panic(err)
	}

	return template.Execute(w, data)
}

func index(w http.ResponseWriter, r *http.Request) {
	test := []Link{
		{"GitHub", "github.com"},
		{"Reddit", "reddit.com"},
		{"Steam", "store.steampowered.com"},
	}

	err := render(w, "index", test)

	if err != nil {
		panic(err)
	}
}

func resourceCSS(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/css")
	css, _ := assets.ReadFile("assets/index.css")
	w.Write(css)
}

func main() {
	http.HandleFunc("/", index)
	http.HandleFunc("/index.css", resourceCSS)

	http.ListenAndServe(":8080", nil)
}
