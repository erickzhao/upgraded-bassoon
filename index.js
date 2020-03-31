const { remote } = require('webdriverio');

// before running this script, first start chromedriver with
// "./node_modules/electron-chromedriver/bin/chromedriver"

async function main() {
  const options = {
    port: 9515, // "9515" is the port opened by chrome driver.
    capabilities: {
      browserName: 'chrome',
      'goog:chromeOptions': {
        binary: `/Applications/Slack.app/Contents/MacOS/Slack`,
        args: [
          '--remote-debugging-port=12209',
          '--test-type=webdriver',
        ]
      }
    }
  }

  try {
    const client = await remote(options);
    console.log(client);
  } catch(e) {
    console.error('ERROR', e);
  }
}

main();
