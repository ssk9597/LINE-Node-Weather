const FlexMessageTemplate = require('../Template/WeatherForecast/FlexMessageTemplate');

exports.SendMessage = async (client, event) => {
  try {
    const message = await FlexMessageTemplate.Template(event);
    const replyToken = event.replyToken;

    client.replyMessage(replyToken, message);
  } catch (err) {
    console.log(err.response.data);
  }
};
