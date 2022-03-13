// import writeXlsxFile from 'write-excel-file';

const { Page } = require('puppeteer');
const { itemRefresherSelectors } = require('./selectors');
const { click } = require('../../helpers');
const { default: writeXlsxFile } = require('write-excel-file');

/**
 * Clicks on 'list all products' button.
 * @param {Page} page The page.
 * @param {string} channel Channel to get products from.
 */
const showAllProducts = (page, channel) => {
  channel !== 'TheHomeDepot' &&
    setTimeout(async () => {
      await click(page, itemRefresherSelectors.listAllProducts);
    }, 3500);
};

/**
 *
 * @param {Page} page
 */
const refreshItem = async (page) => {
  const options = { timeout: 60_000 };

  await page.waitForSelector(itemRefresherSelectors.items, options);

  setTimeout(async () => {
    const itemData = [];

    await page.$$eval(
      itemRefresherSelectors.items,
      /**
       *
       * @param elements
       * @param {itemRefresherSelectors} selectors
       * @returns
       */
      (elements, selectors) => {
        elements.slice(1).forEach((element, idx) => {
          const { status, name, upc } = selectors;
          const delay = idx === 0 ? 1_000 : 2_000 * idx;

          setTimeout(() => {
            element.click();
            itemData.push([
              {
                value: document.querySelector(status).textContent,
              },
              { value: document.querySelector(name).textContent },
              {
                value: document
                  .querySelector(upc)
                  .textContent.replace('ID:', ''),
              },
            ]);
          }, delay);
        });
      },
      itemRefresherSelectors
    );

    await writeXlsxFile(itemData);
  }, 5000);
};

module.exports = { showAllProducts, refreshItem };
