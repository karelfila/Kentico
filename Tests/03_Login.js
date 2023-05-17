import { Selector } from 'testcafe';


fixture('Getting Started')
    .page('http://localhost:11891/admin');

const userName = Selector('[data-testid="userName"]');
const password = Selector('[data-testid="password"]');
const submitBtn = Selector('[data-testid="submit"]');

test('User name', async t => {
    await t
        .maximizeWindow()
        .typeText(userName, 'administrator')
        .expect(userName.value).contains('administrator', "User name field doesn't contain 'administrator'")
        .typeText(password, 'admin')
        .click(submitBtn)
});
