var fortunes = [
    '"If I have trouble installing Linux, something is wrong.  Very wrong."\n\n- Linus Torvalds',
    '"I hope you will find the courage to keep on living despite the existence of this feature."\n\n- Richard Stallman',
    '"Talk is cheap.  Show me the code."\n\n- Linus Torvalds',
    '"I am getting pretty good at running diff and patch now"\n\n- Jeff Merkey',
    '"Hardware simply does not work like the manual says and no amount of Zen contemplation will ever make you at one with a 3c905B ethernet card."\n\n- Alan Cox',
    '"Hard work now leads to less work full stop"\n\n- Alan Cox',
    '"Thanks, and THIS time it really is fixed.  I mean, how many times can we get it wrong?  At some point, we just have to run out of really bad ideas.."\n\n- Linus Torvalds',
    '"I looked all over the place for an explanation.  Elves and Gremlins."\n\n- Mike "Heisen who?" Galbraith',
    '"The \'C\' language can order structure members anyway it wants."\n\n- Richard B. Johnson',
    '"No bugs were harmed in the preparation of this patch. It\'s just me fartarsing around."\n\n- Andrew Morton',
    '"You are welcome to your opinion.  I\'ve got this great bridge to sell you too."\n\n- Alan Cox to someone recommending the NVidia drivers',
    '"A computer is a state machine. Threads are for people who can\'t program state machines."\n\n- Alan Cox',
    '"After 40 Terabytes, your fingers start to hurt."\n\n- David Miller on typing',
    '"Oh, well.  Not everybody can be as goodlooking as me.  It\'s a curse."\n\n- Linus Torvalds',
]

function fortune()
{
    document.getElementById("prompt-input").setAttribute("contenteditable", false);
    document.getElementById("prompt-input").className = "disabled";

    document.getElementById("fortune").style.display = "block";
    document.getElementById("prompt-fortune").textContent =
        fortunes[Math.floor(Math.random()*fortunes.length)];
};
