import core from '@actions/core';
import github from '@actions/github';
import parameters from './requests';
import request from './utils/request';

try {
  const options = parameters?.[core.getInput('request')];

  // return, request doesn't exists
  if (!options) {
    throw Error('request does not exist');
  }

  // set parameters
  for (const param of options) {
    const option = core.getInput(param);
    if (option) {
      options[param] = option;
    }
  }

  console.log(options);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);

  // request(options);
} catch (error) {
  core.setFailed(error.message);
}
