import { newE2EPage } from '@stencil/core/testing';

describe('polyfea-md-drawer', () => {
  it('clicking close button raises element event', async () => {
    const page = await newE2EPage();
    await page.setContent('<polyfea-md-drawer></polyfea-md-drawer>');

    const element = await page.find('polyfea-md-drawer');
    const closeButton = await page.find('polyfea-md-drawer >>> .close-button');
    closeButton.click();

    await element.waitForEvent('drawerClosed');
    expect(true).toBeTruthy();
  });

});
