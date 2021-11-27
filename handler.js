'use strict';

const emojis = [
  '😀', '😁', '☺', '😉', '😍', '🔶', '🔷', '🚀'
]
// https://somehash.execute-api.eu-central-1.amazonaws.com/rank?rank=7

module.exports.rank = async (event) => {
  const rank = event.queryStringParameters.rank;
  const rankEmoji = emojis[rank >= emojis.length - 1 ? emojis.length - 1 : rank]
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: rankEmoji,
      },
      null,
      2
    ),
  };
};
