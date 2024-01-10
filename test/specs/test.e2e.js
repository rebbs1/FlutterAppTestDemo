//const wdio = require(‘webdriverio’);
const find = require ('appium-flutter-finder')
const assert = require('assert')

describe('Launch app and Search', () => {
    it('Clicck button and type', async () => {
        
        const button = find.byText('Get Started')
        assert.strictEqual(await driver.getElementText(find.byText('Get Started')), 'Get Started')
        await driver.elementClick(button)
    })
})
//I have tried my best


