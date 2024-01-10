import { newE2EPage } from '@stencil/core/testing';

describe('polyfea-md-rail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<polyfea-md-rail></polyfea-md-rail>');

    const element = await page.find('polyfea-md-rail');
    const drawerButton = await page.find('polyfea-md-rail >>> .drawer-button');
    drawerButton.click();

    await element.waitForEvent('drawerOpened');
    expect(true).toBeTruthy();
  });
});
