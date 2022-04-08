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

// go:embed "assets/*"
var assets embed.FS

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
