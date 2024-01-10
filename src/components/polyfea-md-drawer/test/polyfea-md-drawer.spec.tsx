import { newSpecPage } from '@stencil/core/testing';
import { PolyfeaMdDrawer } from '../polyfea-md-drawer';

describe('polyfea-md-drawer', () => {
  it('renders closed button', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdDrawer],
      html: `<polyfea-md-drawer></polyfea-md-drawer>`,
    });

    const element = page.root as HTMLPolyfeaMdDrawerElement;

    expect(element.shadowRoot.querySelector('.close-button')).toBeDefined();
  });

  it('disables closed button', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdDrawer],
      html: `<polyfea-md-drawer close-disabled></polyfea-md-drawer>`,
    });

    const element = page.root as HTMLPolyfeaMdDrawerElement;

    expect(element.shadowRoot.querySelector('.close-button')).toBeFalsy();
  });

});