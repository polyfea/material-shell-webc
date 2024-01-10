import { newSpecPage } from '@stencil/core/testing';
import { PolyfeaMdShell } from '../polyfea-md-shell';

describe('polyfea-md-shell', () => {
  it.each([
    "drawer-content",
    "main-content",
    "navigation-content",
    "rail-content",
    "rail-primary-action",
    "topbar-leading-icon",
    "topbar-menu-items",
    "topbar-trailing-icon"
  ])
    ('renders context area', async (name: string) => {
      const page = await newSpecPage({
        components: [PolyfeaMdShell],
        html: `<polyfea-md-shell></polyfea-md-shell>`,
      });

      let ctx = page.root.shadowRoot.querySelector(`polyfea-context[name='${name}']`);
      let slot = ctx.querySelector('slot');
      expect(ctx).toBeTruthy();
      expect(slot).toBeTruthy();
    });
});


