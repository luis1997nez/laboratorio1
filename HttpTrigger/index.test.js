const httpFunction = require('./index');
const context = require('../testing/Context');
//const { test, expect } = require('@jest/globals');

test('Http trigger example', async () => {
    const request = {
        query: { name: 'sluis' }
    };

    await httpFunction(context, request);
    expect(context.res.body).toEqual('Welcome, sluis');
    expect(context.log.mock.calls.length).toBe(1);
});