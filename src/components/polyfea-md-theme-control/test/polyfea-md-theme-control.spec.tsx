import { newSpecPage } from '@stencil/core/testing';
import { PolyfeaMdThemeControl } from '../polyfea-md-theme-control';

describe('polyfea-md-theme-control', () => {
  it('preset renders empty', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdThemeControl],
      html: `<polyfea-md-theme-control variant="preset"></polyfea-md-theme-control>`,
    });
    expect(page.root).toEqualHtml(`
    <polyfea-md-theme-control variant=\"preset\">
      <mock:shadow-root></mock:shadow-root>
    </polyfea-md-theme-control>
    `);
  });

  it.each([
    { control: 'theme-toggle', icon: 'dark_mode' },
    { control: 'text-increase', icon: 'text_increase' },
    { control: 'text-decrease', icon: 'text_decrease' },
    { control: 'reset-font', icon: 'text_format' },
  ]
  )
  ('variant renders icon', async ( test: { control: string, icon: string}) => {
    const page = await newSpecPage({
      components: [PolyfeaMdThemeControl],
      html: `<polyfea-md-theme-control variant="button" control="${test.control}"></polyfea-md-theme-control>`,
    });
    expect(page.root).toEqualHtml(`
    <polyfea-md-theme-control variant="button" control="${test.control}">
      <mock:shadow-root>
      <md-icon-button>
           <md-icon>
           ${test.icon}
           </md-icon>
         </md-icon-button>
      </mock:shadow-root>
    </polyfea-md-theme-control>
    `);
  });

  it.each([
    { control: 'theme-toggle', icon: 'dark_mode', },
    { control: 'text-increase', icon: 'text_increase' },
    { control: 'text-decrease', icon: 'text_decrease' },
    { control: 'reset-font', icon: 'text_format' },
  ]
  )
  ('variant renders menu item', async ( test: { control: string, icon: string}) => {
    const page = await newSpecPage({
      components: [PolyfeaMdThemeControl],
      html: `<polyfea-md-theme-control variant="menu-item" control="${test.control}"></polyfea-md-theme-control>`,
    });

    expect(page.root.shadowRoot.querySelector("md-icon")).toEqualHtml(`
         <md-icon slot="start">
         ${test.icon}
         </md-icon>
    `);
  });
});
