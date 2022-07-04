const Page = require('./page');

class HomePage extends Page {
    get getJoinBtn () {
        return $('[class="join-button md:block"]');
    }
    async clickJoinBtn () {
        await this.getJoinBtn
        .click();
    }
}

module.exports = new HomePage();
