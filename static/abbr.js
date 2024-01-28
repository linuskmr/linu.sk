// Setup onclick handler for abbr tags. Clicking on an abbr opens an alert box
// showing its title/explanation. This is useful on mobile devices that don't
// show the title in a tooltip.
for (const abbr of document.getElementsByTagName("abbr")) {
	abbr.onclick = e => alert(`${e.target.innerText}: ${e.target.title}`)
}