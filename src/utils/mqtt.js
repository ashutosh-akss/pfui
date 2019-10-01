// MQTT
import { connect } from 'mqtt';
import Logs from '../utils/logs';
const SITE_ID = 5585;

class MQTTClient {
    constructor(broker) {
        console.log('adding client')
        this.client = connect(broker);
        this.subscribe("*");
        this.subscribe("aks001p");
        this.handleMessage();
    }

    subscribe(topic) {
        console.log('subscribing to client');
        try {
            this.client.subscribe('5585');
            this.client.subscribe('pick_product');
            this.client.subscribe('pick_container');
            console.log('client siubscrived');
        } catch (err) {
            console.log('error subscribing to clinet')
        }
    }

    publish(topic, message) {
        this.client.publish(topic, message);
    }

    handleMessage() {
        let formattedMessage = '';
        this.client.on('message', function (topic, payload) {
            // alert([topic, payload].join(": "))
            switch (topic) {
                case 'pick_product':
                    formattedMessage = `Product with barcode ${payload.toString()} picked.`;
                    Logs.add('scan', formattedMessage)
                    break;
                case 'pick_container':
                    formattedMessage = `Product kept in container ${payload.toString()}.`
                    Logs.add('scan', formattedMessage)
                    break;
                default:
                    Logs.add('message', payload.toString())
            }
            // this.client.end()
        });
    }

}

export default new MQTTClient("wss://server.pickfast.in:3001");