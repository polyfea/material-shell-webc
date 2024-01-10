import { newSpecPage } from '@stencil/core/testing';
import { PolyfeaMdDrawerLabel } from '../polyfea-md-drawer-label';

describe('polyfea-md-drawer-label', () => {
  it('renders headline', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdDrawerLabel],
      html: `<polyfea-md-drawer-label headline="My Headline"></polyfea-md-drawer-label>`,
    });
    expect(page.root).toEqualHtml(`
      <polyfea-md-drawer-label headline="My Headline">
        <mock:shadow-root>
          My Headline
          <slot></slot>
        </mock:shadow-root>
      </polyfea-md-drawer-label>
    `);
  });
});
