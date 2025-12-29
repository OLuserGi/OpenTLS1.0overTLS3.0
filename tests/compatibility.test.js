import OpenTLSBridge from '../src/main.js';

describe('OpenTLS Compatibility', () => {
    test('Legacy protocol connection', async () => {
        const testUrl = 'https://old-service.example.com';
        const result = await OpenTLSBridge.processRequest(testUrl);
        
        expect(result).not.toBeNull();
    });
});
