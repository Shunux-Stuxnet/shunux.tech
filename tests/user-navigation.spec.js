import { test, expect } from '@playwright/test'

test('navigate from / to all main routes using the navbar', async ({
	page
}) => {
	await page.goto('/')

	const skillsLink = await page.locator('a[href="/skills"].nav-button')
	const aboutLink = await page.locator('a[href="/about"].nav-button')
	const workLink = await page.locator('a[href="/work"].nav-button')
	const logo = await page.locator('header .logo')

	await skillsLink.click()
	await expect(page).toHaveTitle(/Writing/)

	await aboutLink.click()
	await expect(page).toHaveTitle(/About Me/)

	await workLink.click()
	await expect(page).toHaveTitle(/Work/)

	await logo.click()
	await expect(page).toHaveTitle(/Shunux Stuxnet/)
})
