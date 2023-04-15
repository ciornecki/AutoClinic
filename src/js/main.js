const burgerIcon = document.querySelector('.burger-icon')
const mobileNav = document.querySelector('.mobile-nav')
const navList = document.querySelector('.nav-list')
const navItem = document.querySelectorAll('.mobile-nav .nav-list .nav-item')

/* Nav Open */
burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('active')
	mobileNav.classList.toggle('active')
	navList.classList.toggle('active')
})

/* Nav Close */

navItem.forEach(item => {
	item.addEventListener('click', () => {
		if (navList.classList.contains('active')) {
			navList.classList.toggle('active')
			burgerIcon.classList.toggle('active')
			mobileNav.classList.toggle('active')
		}
	})
})

/* Footer Year */
const setCurrentDate = () => {
	const footerYear = document.querySelector('.footer-year')
	const date = new Date()
	const year = date.getFullYear()
	footerYear.textContent = year
	console.log(footerYear)
}
setCurrentDate()
