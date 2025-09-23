document.getElementById('lastmod').textContent =
    new Date(document.lastModified).toLocaleDateString('de-DE');

const btnphone = document.getElementById("copyPhone");
const msgphone = document.getElementById("copyMsgPhone");

btnphone.addEventListener("click", () => {
  navigator.clipboard.writeText("+4917687826888");
  msgphone.style.display = "inline";
  setTimeout(() => (msgphone.style.display = "none"), 1500);
});

const btnmail = document.getElementById("copyMail");
const msgmail = document.getElementById("copyMsgMail");

btnmail.addEventListener("click", () => {
  navigator.clipboard.writeText("webmaster@max-hofert.de");
  msgmail.style.display = "inline";
  setTimeout(() => (msgmail.style.display = "none"), 1500);
});
