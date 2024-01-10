import { newE2EPage } from '@stencil/core/testing';

describe('polyfea-md-topbar', () => {
  it('clicking drawer button raises element event', async () => {
    const page = await newE2EPage();
    await page.setContent('<polyfea-md-topbar></polyfea-md-topbar>');

    const element = await page.find('polyfea-md-topbar');
    const drawerButton = await page.find('polyfea-md-topbar >>> .drawer-button');
    drawerButton.click();

    await element.waitForEvent('drawerOpened');
    expect(true).toBeTruthy();
  });

  it('clicking back button raises element event', async () => {
    const page = await newE2EPage();
    await page.setContent('<polyfea-md-topbar leading-icon="back"></polyfea-md-topbar>');

    const element = await page.find('polyfea-md-topbar');
    const backButton = await page.find('polyfea-md-topbar >>> .back-button');
    backButton.click();

    await element.waitForEvent('back');
    expect(true).toBeTruthy();
  });
});
