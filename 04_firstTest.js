import { Selector } from 'testcafe';

fixture('Website')
    .page('http://localhost:11891');

const emailForm = Selector('.editing-form-control-nested-control .form-control');
const submitBtn = Selector('.subscription-form div form [type="submit"]')
const submitText = Selector('.formwidget-submit-text').withText('Thank you for subscribing! Now we just need to confirm your email address - please click the link in the email we sent you. Thanks!')


test('doesTextAppear', async t => {
    await t
        .maximizeWindow()
        .typeText(emailForm, 'a@a.cz')
        .click(submitBtn)

        .expect((submitText).exists).ok()
});
