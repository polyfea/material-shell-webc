import { newSpecPage } from '@stencil/core/testing';
import { PolyfeaMdTopbar } from '../polyfea-md-topbar';

describe('polyfea-md-topbar', () => {
  it('renders centered with required slots', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdTopbar],
      html: `<polyfea-md-topbar></polyfea-md-topbar>`,
    });

    const element = page.root as HTMLPolyfeaMdTopbarElement;

    expect(element.shadowRoot.querySelector('.centered-wrapper')).toBeDefined();
    expect(element.shadowRoot.querySelector('slot[name="leading"]')).toBeDefined();
    expect(element.shadowRoot.querySelector('slot[name="headline"]')).toBeDefined();
    expect(element.shadowRoot.querySelector('slot[name="menu"]')).toBeDefined();
  });

  it.each(["centered"])('centered mode renders with required slots', async (mode: string) => {
    const page = await newSpecPage({
      components: [PolyfeaMdTopbar],
      html: `<polyfea-md-topbar mode=${mode}></polyfea-md-topbar>`,
    });

    const element = page.root as HTMLPolyfeaMdTopbarElement;

    expect(element.shadowRoot.querySelector(`.${mode}-wrapper`)).toBeDefined();
    expect(element.shadowRoot.querySelector('slot[name="leading"]')).toBeDefined();
    expect(element.shadowRoot.querySelector('slot[name="headline"]')).toBeDefined();
    expect(element.shadowRoot.querySelector('slot[name="menu"]')).toBeDefined();
    // no trailing in centered mode
    expect(element.shadowRoot.querySelector('slot[name="trailing"]')).toBeFalsy();
  });

  it.each(["small", "medium", "large"])('notcentered mode renders with required slots', async (mode: string) => {
    const page = await newSpecPage({
      components: [PolyfeaMdTopbar],
      html: `<polyfea-md-topbar mode=${mode}></polyfea-md-topbar>`,
    });

    const element = page.root as HTMLPolyfeaMdTopbarElement;

    expect(element.shadowRoot.querySelector(`.${mode}-wrapper`)).toBeDefined();
    expect(element.shadowRoot.querySelector('slot[name="leading"]')).toBeDefined();
    expect(element.shadowRoot.querySelector('slot[name="trailing"]')).toBeDefined();
    expect(element.shadowRoot.querySelector('slot[name="headline"]')).toBeDefined();
    expect(element.shadowRoot.querySelector('slot[name="menu"]')).toBeDefined();
  });

  it.each(["centered", "small", "medium", "large"])
    ('headline is shown', async (mode: string) => {
      const page = await newSpecPage({
        components: [PolyfeaMdTopbar],
        html: `<polyfea-md-topbar mode=${mode} headline="My Test Headline"></polyfea-md-topbar>`,
      });

      const element = page.root as HTMLPolyfeaMdTopbarElement;

      expect(element.shadowRoot.querySelector(`h1`)).toEqualHtml(`<h1>My Test Headline</h1>`);
    });

  it.each(["centered", "small", "medium", "large"])
    ('leading menu button is shown if drawer specified', async (mode: string) => {
      const page = await newSpecPage({
        components: [PolyfeaMdTopbar],
        html: `<polyfea-md-topbar mode=${mode} leading-icon="drawer"></polyfea-md-topbar>`,
      });

      const element = page.root as HTMLPolyfeaMdTopbarElement;

      expect(element.shadowRoot.querySelector("slot[name='leading']")).toEqualHtml(`
    <slot name="leading">
    <md-icon-button class="drawer-button">
      <md-icon>
        menu
      </md-icon>
    </md-icon-button>
    </slot>`);
    });

  it.each(["centered", "small", "medium", "large"])
    ('leading menu button is shown if back specified', async (mode: string) => {
      const page = await newSpecPage({
        components: [PolyfeaMdTopbar],
        html: `<polyfea-md-topbar mode=${mode} leading-icon="back"></polyfea-md-topbar>`,
      });

      const element = page.root as HTMLPolyfeaMdTopbarElement;

      expect(element.shadowRoot.querySelector("slot[name='leading']")).toEqualHtml(`
    <slot name="leading">
    <md-icon-button class="back-button">
      <md-icon>
        back
      </md-icon>
    </md-icon-button>
    </slot>`);
    });

  it.each(["centered", "small", "medium", "large"])
    ('no leading menu button if none specified', async (mode: string) => {
      const page = await newSpecPage({
        components: [PolyfeaMdTopbar],
        html: `<polyfea-md-topbar mode=${mode} leading-icon="none"></polyfea-md-topbar>`,
      });

      const element = page.root as HTMLPolyfeaMdTopbarElement;

      expect(element.shadowRoot.querySelector("slot[name='leading']")).toEqualHtml(`
    <slot name="leading"><div></div></slot>`);
    });

    it.each(["centered", "small", "medium", "large"])
    ('no more actions if disabled', async (mode: string) => {
      const page = await newSpecPage({
        components: [PolyfeaMdTopbar],
        html: `<polyfea-md-topbar mode=${mode} more-actions-disabled></polyfea-md-topbar>`,
      });

      const element = page.root as HTMLPolyfeaMdTopbarElement;
      expect(element.shadowRoot.querySelector("md-menu")).toBeFalsy();
    });
});