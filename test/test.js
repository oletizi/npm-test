let assert = require('assert');

describe('My Test', () => {
    describe('Basic assert', () => {
        it('should pass equality test', () => {
            assert.strictEqual(1, 1, "I should have succeeded");
        });
        it ('should fail equality test', () => {
            try {
                assert.strictEqual(1, 0, "I should have failed.");
                assert.fail("I should have failed!");
            } catch (err) {
                console.log("Success!");
            }
        });
    });
});
