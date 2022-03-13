const { Page } = require('puppeteer');
const { clientSelectors } = require('./selectors');
const { click } = require('../../helpers');
const { getCurrentClient } = require('../Helpers/helpers');

/**
 *
 * @param {Page} page
 * @param {string} chosenClient
 */
const chooseClient = async (page, chosenClient) => {
  const { all } = clientSelectors;
  const allClients = await page.$$eval(all.child, (clients) =>
    clients.map((client) => client.textContent.trim())
  );
  const clientId = allClients.indexOf(chosenClient);

  await page.click(`#mat-radio-${clientId + 2}`, { delay: 1000 });
  await page.$$eval('mat-dialog-actions > button', (buttons) =>
    buttons[1].click()
  );
};

/**
 * This function will click on the client specified.
 * @param {Page} page The page to perform the functions on.
 * @param {string} client The client to click on.
 */
const changeClient = (page, client) => {
  setTimeout(async () => {
    const { buttons } = clientSelectors;
    const currentClient = await getCurrentClient(page);

    if (client !== currentClient) {
      await click(page, buttons?.icon, { wait: true, delay: 3000 });
      await click(page, buttons?.changeAccount, { wait: true });
      await chooseClient(page, client);
    }
  }, 3000);
};

module.exports = { changeClient };
