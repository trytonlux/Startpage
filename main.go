package main

import (
	_ "embed"
	"fmt"
	"net/http"
)

//go:embed "data/index.html.tmpl"
var indexHTMLTemplate string

//go:embed "data/index.css"
var indexCSS string

func index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, indexHTMLTemplate)
}

func resourceCSS(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/css")
	fmt.Fprint(w, indexCSS)
}

func main() {
	http.HandleFunc("/", index)
	http.HandleFunc("/index.css", resourceCSS)

	http.ListenAndServe(":8080", nil)
}
