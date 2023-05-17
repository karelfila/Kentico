import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';


fixture('Website')
    .page('http://localhost:11891');

const btnFacebook = Selector('.social-links :nth-child(1)');
const btnTwitter = Selector('.social-links :nth-child(2)');
const getPageUrl = ClientFunction(() => window.location.href);

test('Check the page URL for Facebook', async f => {
    await f
        .maximizeWindow()
        .scroll(0, 10000)
        .click(btnFacebook)
        .expect(getPageUrl()).contains('https://www.facebook.com/Dancing.Goat');
});

test('Check the page URL for Twitter', async t => {
    await t
        .maximizeWindow()
        .scroll(0, 10000)
        .click(btnTwitter)
        .expect(getPageUrl()).contains('https://twitter.com/DancingGoat78');
});