const { Page } = require('puppeteer');

const { loginSelectors } = require('./Helpers/Login/selectors');
const { links } = require('./Helpers/links');
const { credentials } = require('./Helpers/Login/credentials');

const { login } = require('../helpers');
const { changeClient } = require('./ClientSelector/clientSelector');
const { clickOnChannel } = require('./ChannelSelector/channelSelector');
const {
  showAllProducts,
  refreshItem,
} = require('./ItemRefresher/itemRefresher');
const { getCurrentClient } = require('./Helpers/helpers');

/**
 *
 * @param {Page} page
 */
const PDXEvents = async (page) => {
  const clientName = 'A2B Investments';
  const clientChannel = 'TheHomeDepot';
  const { login: loginLink, homeDepot } = links;

  await login(page, loginLink, loginSelectors, credentials);

  changeClient(page, clientName);
  clickOnChannel(page, clientName, clientChannel, homeDepot);
  showAllProducts(page, clientChannel);

  await refreshItem(page);
};

module.exports = { PDXEvents };
