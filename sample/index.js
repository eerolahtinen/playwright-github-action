// Playwright 1.8.0 | docs: https://playwright.dev/docs/videos
const { chromium, webkit, firefox } = require('playwright')

const fn = async () => {
  const browser = await chromium.launch({
    headless: false,
    ignoreDefaultArgs: ['--mute-audio'],
    args: ['--autoplay-policy=no-user-gesture-required']
  })
  const page = await browser.newPage({ recordVideo: { dir: 'videos/' } })
  await page.goto('https://www.youtube.com/watch?v=pIWX6hF0C_s')

  await page.waitForTimeout(14000)

  await page.close()
  await browser.close()
}
fn()
