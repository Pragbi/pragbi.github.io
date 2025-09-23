const d = new Date(document.lastModified);
const day = String(d.getDate()).padStart(2, "0");
const month = String(d.getMonth() + 1).padStart(2, "0");
const year = d.getFullYear();

document.getElementById("lastmod").textContent = `${day}.${month}.${year}`;

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
