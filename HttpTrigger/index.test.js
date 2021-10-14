const functions = require('./index');
const context = require('../testing/Context');
//const { test, expect } = require('@jest/globals');

test('Http trigger example', async () => {
    const request = {
        query: { name: 'sluis' }
    };

    var iterations = 1000000;
    console.time('FUNCTION #1');
    
    for(var i = 0; i < iterations; i++){
        await functions(context, request);
    }

    console.timeEnd('FUNCTION #1');
    expect(context.res.body).toEqual('Welcome, sluis');
    expect(context.log.mock.calls.length).toBe(1000000);
});