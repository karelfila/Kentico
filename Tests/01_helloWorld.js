import { Selector } from 'testcafe';


fixture('Getting Started') // 
    .page('http://localhost:11891/admin'); // You will need to paste here your URL

const userName = Selector('[data-testid="userName"]');

test('Hello World!', async t => {
    await t
        .maximizeWindow()
        .typeText(userName, 'Hello World');
});