const { Page } = require('puppeteer');

/**
 * This will get the name of the active client.
 * @param {Page} page
 * @returns The name of the current active client.
 */
const getCurrentClient = async (page) =>
  page.$eval('.company', (company) => company.textContent);

module.exports = { getCurrentClient };
