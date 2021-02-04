# Startpage

## Building

Create a src/config.json:

```json
{
    "Apps":
    [
        {
            "label": "Github",
            "icon": "github",
            "url": "https://github.com",
            "color": "#000000"
        },
        {
            "label": "Example",
            "icon": "example",
            "url": "example.com",
            "color": "#FF0000"
        }
    ],
    "Dock":
    [
        "Github"
    ]
}
```

Install dependicies and build:

```bash
yarn
yarn build
```