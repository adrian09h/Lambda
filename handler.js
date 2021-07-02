async function helloWorld(event, context, callback) {
  try {
    callback(null, { message: "Good!" });
  } catch (e) {
    callback(e.toString());
  }
}

module.exports = {
  helloWorld,
};
