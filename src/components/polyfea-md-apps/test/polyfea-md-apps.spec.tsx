import { newSpecPage } from '@stencil/core/testing';
import { PolyfeaMdApps } from '../polyfea-md-apps';

describe('polyfea-md-apps', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApps],
      html: `<polyfea-md-apps applications-context='test-ctx'></polyfea-md-apps>`,
    });
    expect(page.root.shadowRoot.querySelector("polyfea-context[name='test-ctx']")).toBeTruthy();
  });
});
