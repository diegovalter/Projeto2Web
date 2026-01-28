const {test, expect} = require ('@playwright/test')

test('Realizar a compra de um laptop', async ({page}) => {

    await page.goto('/')
    // Verifico se estou na página inicial
    await expect(page).toHaveURL(/.*#/)
    const our_products = page.locator('a[ng-click="gotoElement(\'our_products\')"]')
    await expect(our_products).toHaveText('OUR PRODUCTS')

    // Entro no card Laptops
    await page.locator('#laptopsImg').click()

    //Verifico se estou na página de Laptops e seleciono um produto
    await expect(page).toHaveURL(/.*category\/Laptops\/1.*/)
    await expect(page.locator('h3.categoryTitle')).toHaveText('LAPTOPS')
    await page.locator('img.imgProduct[src*="image_id=1700"]').click()

    // Verifico se estou na página do produto escolhido
    await expect(page).toHaveURL(/.*product\/7*/)
    await expect(page.getByRole('heading', { name: 'HP ENVY - 17T TOUCH LAPTOP' })).toBeVisible()
    await page.locator('button[name="save_to_cart"]').click()

    //Verifico se o produto foi adcionado ao carrinho
    const cartBadge = page.locator('span.cart')
    await expect(cartBadge.first()).toHaveText('1')
    await page.locator('button#checkOutPopUp').click()

    // Verifico se estou na tela de login
    await expect(page).toHaveURL(/.login/)
    await expect(page.getByRole('heading', { name: 'ORDER PAYMENT' })).toBeVisible()

    // Realizo o login
    await page.fill('[name="usernameInOrderPayment"]', 'testefinal')
    await page.fill('[name=passwordInOrderPayment]', 'Teste123')
    await page.locator('button#login_btn').click()

    // Verifico e avanço para página de pagamento
    await expect(page).toHaveURL(/#\/orderPayment/, { timeout: 15000 })
    await expect(page.getByRole('heading', { name: 'ORDER PAYMENT' })).toBeVisible()
    await page.locator('button[data-ng-click="shippingDetails_next()"]').click()
   
    // Verifico a página de pagamento e o produto
    await expect(page).toHaveURL(/.orderPayment/)
    await expect(page.getByRole('heading', { name: 'ORDER PAYMENT' })).toBeVisible()
    await expect(page.getByText('2. PAYMENT METHOD')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'ORDER SUMMARY' })).toBeVisible()
    const orderSummary = page.getByRole('heading', { name: 'ORDER SUMMARY' }).locator('..')
    await expect(orderSummary.getByText('QTY: 1')).toBeVisible()
    await expect(orderSummary.locator('span.totalValue')).toHaveText('$849.99')
    await page.locator('button#pay_now_btn_MasterCredit').click()

    // Verifico se a ordem foi executada com sucesso
    await expect(page.getByText('Thank you for buying with Advantage')).toBeVisible()
    await expect(page.locator('#orderNumberLabel')).toBeVisible()
    await expect(page.locator('label.total a.floater')).toHaveText('$849.99')

})