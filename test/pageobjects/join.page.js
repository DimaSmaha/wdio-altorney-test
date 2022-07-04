const Page = require('./page');

class JoinPage extends Page {
    get getReviewerBtn () {
        return $('[class="reviewer-button-wrapper"]');
    }
    async clickReviewerBtn () {
        await this.getReviewerBtn
        .click();
    }
}

module.exports = new JoinPage();
