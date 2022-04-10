package main

import (
	"embed"
	"fmt"
	"net/http"
	"text/template"

	"github.com/bep/golibsass/libsass"
	"gopkg.in/yaml.v3"
)

type Link struct {
	Title string `yaml:"name"`
	URL   string `yaml:"url"`
}

type Config struct {
	Links []Link `yaml:"links,flow"`
}

//go:embed "assets/*"
var assets embed.FS

var config Config = loadConfig()
var css []byte = generateCSS()

func loadConfig() (config Config) {
	yamlBytes, err := assets.ReadFile("assets/config.yaml")
	if err != nil {
		yamlBytes, err = assets.ReadFile("assets/config.example.yaml")
		if err != nil {
			panic(err)
		}
	}

	err = yaml.Unmarshal(yamlBytes, &config)
	if err != nil {
		panic(err)
	}

	return
}

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
	render(w, "index", config.Links)
}

func main() {
	http.HandleFunc("/", index)
	http.HandleFunc("/index.css", serveCSS)

	http.ListenAndServe(":8080", nil)
}
