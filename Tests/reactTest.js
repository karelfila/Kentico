import { Selector } from 'testcafe';

fixture('Website')
    .page('http://localhost:3000');

const inputText = Selector('.task-input')
const submitBtn = Selector('.btn-primary')
const deleteBtn = Selector('.btn-danger')

test('Test App', async t => {
    await t
        .maximizeWindow()
        .typeText(inputText, 'New Task')
        .click(submitBtn)
        .click(deleteBtn)
});
