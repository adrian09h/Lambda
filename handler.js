async function helloworld(event, context, callback) {
  try {
    callback(null, { message: process.env.STAGE });
  } catch (e) {
    callback(e.toString());
  }
}

module.exports = {
  helloworld,
};
