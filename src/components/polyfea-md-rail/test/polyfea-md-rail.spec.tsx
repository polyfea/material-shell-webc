import { newSpecPage } from '@stencil/core/testing';
import { PolyfeaMdRail } from '../polyfea-md-rail';

describe('polyfea-md-rail', () => {
  it('renders drawer button', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdRail],
      html: `<polyfea-md-rail></polyfea-md-rail>`,
    });
    const element = page.root as HTMLPolyfeaMdDrawerElement;

    expect(element.shadowRoot.querySelector('.drawer-button')).toBeDefined();
  });

  it('removes drawer button when disable', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdRail],
      html: `<polyfea-md-rail drawer-disabled></polyfea-md-rail>`,
    });
    const element = page.root as HTMLPolyfeaMdDrawerElement;

    expect(element.shadowRoot.querySelector('.drawer-button')).toBeFalsy();
  });

  it('rendersall slots', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdRail],
      html: `<polyfea-md-rail></polyfea-md-rail>`,
    });
    const element = page.root as HTMLPolyfeaMdDrawerElement;

    expect(element.shadowRoot.querySelector('slot[name="primary-action"]')).toBeDefined();
    expect(element.shadowRoot.querySelector('slot:not([name])')).toBeDefined();
  });
});
