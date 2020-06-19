
import * as S from './public-strings';
export default function () {
    return `
    self.publicWorker = {
        ports: [],
        addresses: new Set(),
        listeners: new Map()
    };
    
    function processMessage(event, port, ports) {
        if (event.data && event.type) {
        }
    }
    
    function postMessenger(type, msg, port) {
        let _port = (!!port && port.address) ? 
            self.publicWorker.ports.find(p => {
                return p.address === port.address;
            }) : false;
        switch (type) {
            case 
        }
    }
    
    function uniqueNumber() {
        var date = Date.now();
        if (date <= uniqueNumber.previous) {
            date = ++uniqueNumber.previous;
        } 
        else {
            uniqueNumber.previous = date;
        }
            return date;
    }
    uniqueNumber.previous = 0;
    self.publicWorker = {
        ports: [],
        events: new Map(),
        scripts: new Set(),
        addresses: new Set(),
        listeners: new Map(),
        
    };   
    
    onconnect = (event) => {
        let address = uniqueNumber();
        let src = event.source,
            port = {
                address: address,
                session: src,
                tries: 10
        };
        self.publicWorker.ports.push(port);
        src.start();
        src.addEventListener('message', (event) => {
            processMessage(event, src, self.publicWorker.ports);
        });
        src.postMessage({
            type: '${S.OPEN}',
            id: address
        });
    }
    
    
    
    `;
}
