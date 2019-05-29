import HomePage from '../pageobjects/HomePage'
import ResultPage from '../pageobjects/ResultPage'

context ('Search Google', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('search something', () => {
        const homePage = new HomePage();
        const resultPage = new ResultPage();

        homePage.fillSearch('Maximiliano alves da cruz')
        homePage.clickSearch()
        resultPage.containsInPage('Maximiliano Alves')
    })
})