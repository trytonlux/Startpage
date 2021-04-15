const main = document.getElementById("main");

function add_link(name, url)
{
    const link = document.createElement("div");
    link.className = "item"
    link.innerHTML = `<a href="${url}">${name}</a>`;

    main.appendChild(link);
}

add_link("GitHub", "https://github.com/");
add_link("GitLab", "https://gitlab.com/");
add_link("GNOME GitLab", "https://gitlab.gnome.org/");
add_link("Arch Linux", "https://archlinux.org/");
add_link("Hangouts", "https://hangouts.google.com/");
add_link("Email", "https://beta.protonmail.com/inbox");
add_link("Mastodon", "https://linuxrocks.online/");
add_link("Level1Techs", "https://forum.level1techs.com/");
add_link("LTT Forums", "https://linustechtips.com/main/");
add_link("Reddit", "https://reddit.com/");
add_link("/r/Linux_Gaming", "https://reddit.com/r/linux_gaming");
add_link("Steam", "https://store.steampowered.com/");
add_link("PCPartPicker", "https://ca.pcpartpicker.com/");
add_link("Kernel Newbies", "https://kernelnewbies.org/LinuxChanges");
add_link("SteamGridDB", "https://steamgriddb.com/");