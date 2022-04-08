package main

import (
	"embed"
	_ "embed"
	"net/http"
	"text/template"
)

type Link struct {
	Title string
	URL   string
}

//go:embed "assets/*"
var assets embed.FS

func index(w http.ResponseWriter, r *http.Request) {
	test := []Link{
		{"GitHub", "github.com"},
		{"Reddit", "reddit.com"},
		{"Steam", "store.steampowered.com"},
	}

	template, err := template.ParseFS(assets, "assets/index.html.tmpl")

	if err != nil {
		panic(err)
	}

	err = template.Execute(w, test)

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
