import { newSpecPage } from '@stencil/core/testing';
import { PolyfeaMdNavigationBar } from '../polyfea-md-navigation-bar';

describe('polyfea-md-navigation-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdNavigationBar],
      html: `<polyfea-md-navigation-bar></polyfea-md-navigation-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <polyfea-md-navigation-bar>
        <mock:shadow-root>
          <md-elevation></md-elevation> 
          <slot></slot>
        </mock:shadow-root>
      </polyfea-md-navigation-bar>
    `);
  });
});
