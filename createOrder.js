const AWS = require('aws-sdk');

const eventBridge = new AWS.EventBridge({ region: 'eu-north-1' });

const handler = async (event) => {
  const order = {
    orderId: event.orderId,
  };
  
  return eventBridge.putEvents({
    Entries: [{
      EventBusName: 'orders',
      Source: 'elk.orders',
      DetailType: 'order',
      Detail: JSON.stringify(order)
    }]
  }).promise();
};

module.exports.handler = handler;
