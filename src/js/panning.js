const track = document.querySelector('.cards-slider')

window.onmousedown = e => {
	track.dataset.mouseDown = e.clientX
}
window.onmouseup = e => {
	track.dataset.mouseDown = 0
	track.dataset.prevPos = track.dataset.prevpercentage
}

window.onmousemove = e => {
	if (track.dataset.mouseDown == 0) return

	const mouseMovement = parseFloat(track.dataset.mouseDown) - e.clientX
	const fullTrack = window.innerWidth

	const proc = (mouseMovement / fullTrack) * -100
	const prev = parseFloat(track.dataset.prevPos) + proc

	track.dataset.prevpercentage = prev

	track.style.transform = `translate(${prev}%,-50%)`
}
