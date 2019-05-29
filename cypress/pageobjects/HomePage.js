class HomePage {
    visit() {
        cy.visit('/')
    }

    getFieldSearch() {
        return cy.get('[name=q]');
    }

    getBtnSearch() {
        return cy.get('.gNO89b[name=btnK]');
    }

    fillSearch(search) {
        this.getFieldSearch().clear();
        this.getFieldSearch().type(search);
    }

    clickSearch() {
        this.getBtnSearch().click({multiple: true, force: true});
    }
}

export default HomePage;