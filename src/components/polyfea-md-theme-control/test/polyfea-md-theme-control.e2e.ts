import { newE2EPage } from '@stencil/core/testing';
import { Theme } from '../polyfea-md-theme-control';

describe('polyfea-md-theme-control', () => {
  it('togle-theme toggles theme', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <polyfea-md-theme-control variant="button" control="theme-toggle">
      </polyfea-md-theme-control>
      <polyfea-md-theme-control variant="preset"></polyfea-md-theme-control>
      
    `);

    const element = await page.find('polyfea-md-theme-control');    
    const control = await page.find('polyfea-md-theme-control >>> md-icon-button');
    const spy = await element.spyOnEvent('themeChanged');
    
    await control.click();   
    await control.click();
  
    expect(spy).toHaveReceivedEventTimes(2);
    expect((spy.firstEvent.detail as Theme).name).not.toEqual((spy.lastEvent.detail as Theme).name);
  });

  it('text increase raises changes', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <polyfea-md-theme-control variant="button" control="text-increase">
      </polyfea-md-theme-control>
    `);

    const element = await page.find('polyfea-md-theme-control');    
    const control = await page.find('polyfea-md-theme-control >>> md-icon-button');
    const spy = await element.spyOnEvent('themeChanged');
    
    await control.click();   
    await control.click();
  

    expect(spy).toHaveReceivedEventTimes(2);
    expect((spy.firstEvent.detail as Theme).textSize).toBeLessThan((spy.lastEvent.detail as Theme).textSize);
  });

  it('text decrease raises changes', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <polyfea-md-theme-control variant="button" control="text-decrease">
      </polyfea-md-theme-control>
    `);

    const element = await page.find('polyfea-md-theme-control');    
    const control = await page.find('polyfea-md-theme-control >>> md-icon-button');
    const spy = await element.spyOnEvent('themeChanged');
    
    await control.click();   
    await control.click();
  

    expect(spy).toHaveReceivedEventTimes(2);
    expect((spy.firstEvent.detail as Theme).textSize).toBeGreaterThan((spy.lastEvent.detail as Theme).textSize);
  });

  it('reset font raises changes', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <polyfea-md-theme-control variant="button" control="text-increase">
      </polyfea-md-theme-control>
      <polyfea-md-theme-control variant="button" control="reset-font">
      </polyfea-md-theme-control>
    `);

    const element = await page.find('polyfea-md-theme-control[control="reset-font"]');
    const spy = await element.spyOnEvent('themeChanged');

    const reset = await page.find('polyfea-md-theme-control[control="reset-font"] >>> md-icon-button');
    const increase = await page.find('polyfea-md-theme-control[control="text-increase" >>> md-icon-button');
    
    
    await increase.click();   
    await increase.click();

    await reset.click();
  

    expect(spy).toHaveReceivedEventTimes(1);
    expect((spy.lastEvent.detail as Theme).textSize).toEqual(16);
  });
});
