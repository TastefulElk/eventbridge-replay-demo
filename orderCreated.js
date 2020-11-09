const handler = async (event) => {
  console.log(`handled order ${event.detail.orderId}`);
};

module.exports.handler = handler;
