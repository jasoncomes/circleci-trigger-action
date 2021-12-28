const core = require('@actions/core');
const github = require('@actions/github');
const request = require('request');

const {
  GITHUB_REPOSITORY: repo,
  GITHUB_REF: branch,
} = process.env;

try {

  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

// fetch request

const options = {
  method: 'POST',
  url: 'https://circleci.com/api/v2/workflow/%7Bid%7D/approve/%7Bapproval_request_id%7D',
  headers: {authorization: 'Basic REPLACE_BASIC_AUTH'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});