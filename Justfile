watch:
    watchexec --watch src --watch templates --watch assets -r cargo run

favicon:
    rsvg-convert --height=16 --width=16 --output assets/favicon_16.png assets/favicon.svg
    rsvg-convert --height=32 --width=32 --output assets/favicon_32.png assets/favicon.svg
    rsvg-convert --height=48 --width=48 --output assets/favicon_48.png assets/favicon.svg
    rsvg-convert --height=64 --width=64 --output assets/favicon_64.png assets/favicon.svg
    rsvg-convert --height=128 --width=128 --output assets/favicon_128.png assets/favicon.svg
    icotool -c -o assets/favicon.ico \
        assets/favicon_16.png assets/favicon_32.png \
        assets/favicon_48.png assets/favicon_64.png assets/favicon_128.png
    rm assets/favicon_*.png
