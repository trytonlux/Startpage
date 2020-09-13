const links = [
    {name: "3kliksphilip", href: "https://www.youtube.com/channel/UCmu9PVIZBk-ZCi-Sk2F2utA/videos"},
    {name: "Alan Pope", href: "https://www.youtube.com/channel/UCFNOT8x4KDYQQPUtmDsvaYA/videos"},
    {name: "AntVenom", href: "https://www.youtube.com/channel/UCK376qNDlNZZDNHsnaWuTeg/videos"},
    {name: "Arlo", href: "https://www.youtube.com/channel/UC-9QiiVaViuqMhLp1XEwdxA/videos"},
    {name: "Armoured Skeptic", href: "https://www.youtube.com/channel/UC1BWMtZbNLVMSFgwSukjqCw/videos"},
    {name: "Austin Eruption", href: "https://www.youtube.com/channel/UC0SyhPy7VsMQCIYDszFaplQ/videos"},
    {name: "Austin Evans", href: "https://www.youtube.com/channel/UCXGgrKt94gR6lmN4aN3mYTg/videos"},
    {name: "Bitwit", href: "https://www.youtube.com/channel/UCftcLVz-jtPXoH3cWUUDwYw/videos"},
    {name: "Brendaniel", href: "https://www.youtube.com/channel/UC7EpM9PXIn3bTIlJYiP1xWg/videos"},
    {name: "brutalmoose", href: "https://www.youtube.com/channel/UC18ju52OET36bdewLRHzPdQ/videos"},
    {name: "Bryan Lunduke", href: "https://lbry.tv/@Lunduke"},
    {name: "BulletBarry", href: "https://www.youtube.com/channel/UCu0sLdOcxsr3de-CwVLrpdg/videos"},
    {name: "Channel Super Fun", href: "https://www.youtube.com/channel/UCBZiUUYeLfS5rIj4TQvgSvA/videos"},
    {name: "Chris Fisher", href: "https://www.youtube.com/channel/UCGwtC5MuvpqkxWyyV90olFQ/videos"},
    {name: "Chris Ray Gun", href: "https://www.youtube.com/channel/UCctjGdm2NlMNzIlxz02IsXA/videos"},
    {name: "Chris Titus Tech", href: "https://lbry.tv/@christitustech"},
    {name: "Chris Were Digital", href: "https://share.tube/accounts/chriswere/videos"},
    {name: "Cinemassacre", href: "https://www.youtube.com/channel/UC0M0rxSz3IF0CsSour1iWmw/videos"},
    {name: "Dan Bull", href: "https://www.youtube.com/channel/UC1hkAIJnb2CSmm7SPJaPR-A/videos"},
    {name: "DASGeek", href: "https://www.youtube.com/c/DASGeek/videos"},
    {name: "Destination Linux Network", href: "https://www.youtube.com/channel/UCWJUSpXVHTaHErtGWC5qPlQ/videos"},
    {name: "DidYouKnowFood", href: "https://www.youtube.com/channel/UCh4q6c_OHmA7MTEWlQR-g5Q/videos"},
    {name: "DidYouKnowGaming?", href: "https://www.youtube.com/channel/UCyS4xQE6DK4_p3qXQwJQAyA/videos"},
    {name: "DistroTube", href: "https://lbry.tv/@DistroTube"},
    {name: "Donut Operator", href: "https://www.youtube.com/c/DonutOperatorOfficial/videos"},
    {name: "Eevnos Linux", href: "https://www.youtube.com/channel/UClxCfSepAnuDI7hVCrfIhlg/videos"},
    {name: "Egoraptor", href: "https://www.youtube.com/channel/UC0gEw6pgNkLkkzMwzX4UtHA/videos"},
    {name: "Flashgitz", href: "https://www.youtube.com/channel/UCNnKprAG-MWLsk-GsbsC2BA/videos"},
    {name: "Gamers Nexus", href: "https://www.youtube.com/channel/UChIs72whgZI9w6d6FhwGGHA/videos"},
    {name: "Gigguk", href: "https://www.youtube.com/channel/UC7dF9qfBMXrSlaaFFDvV_Yg/videos"},
    {name: "Hoeg Law", href: "https://www.youtube.com/c/HoegLaw/videos"},
    {name: "InfinitelyGalactic", href: "https://www.youtube.com/channel/UC3jSNmKWYA04R47fDcc1ImA/videos"},
    {name: "Internet Comment Etiquette with Erik", href: "https://www.youtube.com/channel/UCyWDmyZRjrGHeKF-ofFsT5Q/videos"},
    {name: "Jaboody Dubs", href: "https://www.youtube.com/channel/UCZ30YNIcUWuSz8eVJZtLEjw/videos"},
    {name: "jacksepticeye", href: "https://www.youtube.com/channel/UCYzPXprvl5Y-Sf0g4vX-m6g/videos"},
    {name: "Jeff Holiday", href: "https://www.youtube.com/channel/UCAldq8BAAGdsX9UyK_09-ZA/videos"},
    {name: "JelloApocalypse", href: "https://www.youtube.com/channel/UCP4nS6ag1-E6TzlQvaWfiZg/videos"},
    {name: "JonTronShow", href: "https://www.youtube.com/channel/UCdJdEguB1F1CiYe7OEi3SBg/videos"},
    {name: "kenny lauderdale", href: "https://www.youtube.com/channel/UC6dsQSn70Cem7zFsUANHqpQ/videos"},
    {name: "Larry Bundy Jr", href: "https://www.youtube.com/channel/UCJVdNvvuvOnthuWVQjYff2w/videos"},
    {name: "Let's Game It Out", href: "https://youtube.com/channel/UCto7D1L-MiRoOziCXK9uT5Q/videos"},
    {name: "Level1Linux", href: "https://www.youtube.com/channel/UCOWcZ6Wicl-1N34H0zZe38w/videos"},
    {name: "Level1Techs", href: "https://www.youtube.com/channel/UC4w1YQAJMWOz4qtxinq55LQ/videos"},
    {name: "LGR", href: "https://www.youtube.com/channel/UCLx053rWZxCiYWsBETgdKrQ/videos"},
    {name: "Linus Tech Tips", href: "https://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw/videos"},
    {name: "Little Kuriboh", href: "https://www.youtube.com/channel/UC2NU0s1H0p9N4jvF7qV59vA/videos"},
    {name: "LMG Clips", href: "https://www.youtube.com/channel/UCFLFc8Lpbwt4jPtY1_Ai5yA/videos"},
    {name: "Lockstin & Gnoggin", href: "https://www.youtube.com/channel/UC6sjkvDzyY0J8o7k2Kc5rEw/videos"},
    {name: "Louis Rossmann", href: "https://www.youtube.com/channel/UCl2mFZoRqjw_ELax4Yisf6w/videos"},
    {name: "Luke Smith", href: "https://videos.lukesmith.xyz/video-channels/luke_channel/videos"},
    {name: "Matt McMuscles", href: "https://www.youtube.com/channel/UCiP_FwGyJQ_6P8k5ON5mncQ/videos"},
    {name: "Mind Drip Media", href: "https://www.youtube.com/channel/UCHu86o6BP1Qh9Ipz-ha6ISQ/videos"},
    {name: "Mumbo Jumbo", href: "https://www.youtube.com/channel/UChFur_NwVSbUozOcF_F2kMg/videos"},
    {name: "nickisnotgreen", href: "https://youtube.com/channel/UCnTr3rLQySAokkQjXbduk7Q/videos"},
    {name: "PBGGameplay", href: "https://www.youtube.com/channel/UCS4_hcviJUA6beVsXb0xakQ/videos"},
    {name: "NormalBoots", href: "https://www.youtube.com/channel/UCGB4yHg_Pg_CigeTxm_rygg/videos"},
    {name: "PewDiePie", href: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw/videos"},
    {name: "PeanutButterGamer", href: "https://www.youtube.com/channel/UCRBkeMoYX02w-0qVIKNkruw/videos"},
    {name: "ProJared", href: "https://www.youtube.com/channel/UC2e0bNZ6CzT-Xvr070VaGsw/videos"},
    {name: "ProJared Plays!", href: "https://www.youtube.com/channel/UCi7GVfMNROkrw5F2YrdBkNw/videos"},
    {name: "PushingUpRoses", href: "https://www.youtube.com/channel/UCCTNXqhWPba9Xh8gx0EKOtQ/videos"},
    {name: "Scarfulhu", href: "https://www.youtube.com/channel/UC5qrE62e0455xvZ_QYfBYSA/videos"},
    {name: "Scott The Woz", href: "https://www.youtube.com/channel/UC4rqhyiTs7XyuODcECvuiiQ/videos"},
    {name: "SethBling", href: "https://www.youtube.com/channel/UC8aG3LDTDwNR1UQhSn9uVrw/videos"},
    {name: "Shoe0nHead", href: "https://www.youtube.com/channel/UC0aanx5rpr7D1M7KCFYzrLQ/videos"},
    {name: "ShortCircuit", href: "https://www.youtube.com/channel/UCdBK94H6oZT2Q7l0-b0xmMg/videos"},
    {name: "SomeOrdinaryGamers", href: "https://www.youtube.com/channel/UCtMVHI3AJD4Qk4hcbZnI9ZQ/videos"},
    {name: "SpaceHamster", href: "https://www.youtube.com/channel/UCXV_RBIFNTulEdcuKkRZhBA/videos"},
    {name: "SquidTheSid", href: "https://www.youtube.com/channel/UCxR8q_XMkrrSc-DkHVtghIw/videos"},
    {name: "SsethTzeentach", href: "https://www.bitchute.com/channel/yf20Ej01hStI/"},
    {name: "TeamFourStar", href: "https://www.youtube.com/channel/UCsvazPPlhZlch0-Z3wPByeg/videos"},
    {name: "TechLinked", href: "https://www.youtube.com/channel/UCeeFfhMcJa1kjtfZAGskOCA/videos"},
    {name: "Techquickie", href: "https://www.youtube.com/channel/UC0vBXGSyV14uvJ4hECDOl0Q/videos"},
    {name: "The Completionist", href: "https://www.youtube.com/channel/UCPYJR2EIu0_MJaDeSGwkIVw/videos"},
    {name: "The Film Theorists", href: "https://www.youtube.com/channel/UC3sznuotAs2ohg_U__Jzj_Q/videos"},
    {name: "The Food Theorists", href: "https://www.youtube.com/channel/UCHYoe8kQ-7Gn9ASOlmI0k6Q/videos"},
    {name: "The Game Theorists", href: "https://www.youtube.com/channel/UCo_IB5145EVNcf8hw1Kku7w/videos"},
    {name: "TheJWittz", href: "https://www.youtube.com/channel/UCUIJFJJLhxIrZVdAVdwL3bQ/videos"},
    {name: "TheQuartering", href: "https://lbry.tv/@TheQuartering"},
    {name: "TheWarOwl", href: "https://www.youtube.com/channel/UCpFcHE36IoySjYj1Rytxyog/videos"},
    {name: "This Is", href: "https://www.youtube.com/c/thisis/videos"},
    {name: "TLG", href: "https://lbry.tv/@TheLinuxGamer"},
    {name: "YOGSCAST", href: "https://www.youtube.com/c/yogscast/videos"},
    {name: "Rucka Rucka Ali", href: "https://www.youtube.com/c/itsRucka/videos"},
]

// Sort channels by name alphabetically
links.sort((a, b) => a.name.localeCompare(b.name));

function insert_links()
{
    let items = [];

    for (let link of links)
    {
        items.push(
            `<li><a href="${link.href}"><span class="yellow">"${link.name}"</span>,<a/></li>`
        );
    }

    let ul = document.getElementById("link-list");
    ul.innerHTML = items.join("");
}

document.addEventListener("DOMContentLoaded", ()=> {
    insert_links();
});