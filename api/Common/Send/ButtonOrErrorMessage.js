const ButtonMessageTemplate = require('../Template/ButtonMessageTemplate');
const ErrorMessageTemplate = require('../Template/ErrorMessageTemplate');

exports.SendMessage = (client, event) => {
  const text = event.message.text;
  const replyToken = event.replyToken;

  if (text === '今日の洋服は？') {
    client.replyMessage(replyToken, ButtonMessageTemplate.Template());
  } else {
    client.replyMessage(replyToken, ErrorMessageTemplate.Template());
  }
};
