const { Page } = require('puppeteer');
const { links } = require('../Helpers/links');
const { loginSelectors } = require('../Helpers/Login/selectors');
const { credentials } = require('../Helpers/Login/credentials');
const { login, click } = require('../Helpers');
const { clientSelectors } = require('../ClientSelector/selectors');

/**
 *
 * @param {Page} page
 */
const getAllClients = async (page) => {
  const { buttons, all } = clientSelectors;
  console.log(credentials);
  // await login(page, links.login, loginSelectors, credentials);
  // await click(page, buttons?.icon, { wait: true, delay: 3000 });
  // await click(page, buttons?.changeAccount, { wait: true });

  return 'Success';
  // return page.$$eval(all.child, (clients) =>
  //   clients.map((client) => client.textContent.trim())
  // );
};

module.exports = { getAllClients };
