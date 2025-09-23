document.getElementById('lastmod').textContent =
    new Date(document.lastModified).toLocaleDateString('de-DE');

const copyToClipboard = async function(elementid, copystring) {
    document.getElementById(elementid).addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(copystring);
        const btn = document.getElementById(elementid);
        const old = btn.textContent;
        btn.textContent = " Kopiert!";
        setTimeout(() => (btn.textContent = old), 1200);
    } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = copystring;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch {}
        document.body.removeChild(ta);
    }
    });    
};

const textToCopy = "Hallo Welt das ist mein String ✨";
copyToClipboard("copyMail", "webmaster@max-hofert.de");
copyToClipboard("copyPhone", "+4917687826888");
copyToClipboard("copyLinkedIn", textToCopy);


