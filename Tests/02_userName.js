import { Selector } from 'testcafe';


fixture('Getting Started')
    .page('http://localhost:11891/admin');

const userName = Selector('[data-testid="userName"]');

test('User name', async t => {
    await t
        .maximizeWindow()
        .typeText(userName, 'administrator')
        .expect(userName.value).contains('administrator', "User name field doesn't contain 'administrator'");
});
