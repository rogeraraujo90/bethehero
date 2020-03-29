const generateUniqueId = require('../../src/utils/genereateUniqueId');

describe('Test Generate Unique ID', () => {
    it('should return an ID with eight characters', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});