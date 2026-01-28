const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
    use: {
        baseURL: 'https://www.advantageonlineshopping.com/#/',
        headless: false
    }
})