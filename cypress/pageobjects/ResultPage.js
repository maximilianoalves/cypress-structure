class ResultPage {
    getFirstTitle() {
        return cy.get('.LC20lb');
    }

    containsInPage(search) {
        this.getFirstTitle().contains(search)
    }
}

export default ResultPage;