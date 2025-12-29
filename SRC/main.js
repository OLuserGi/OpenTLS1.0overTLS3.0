class OpenTLSBridge {
    constructor() {
        this.legacyProtocols = ['TLS1.0', 'SSL3.0'];
    }

    initializeProtocolHandler() {
        // Логика инициализации обработчика протоколов
    }

    detectLegacyResource(url) {
        // Определение необходимости использования legacy-протокола
    }
}

export default new OpenTLSBridge();
