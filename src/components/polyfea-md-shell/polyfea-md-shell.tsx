import { Component, Element, Host, Listen, Prop, State, h } from '@stencil/core';

/** 
 * @slot topbar-leading - Place content in the leading icon area of the top bar. Defaults to the drawer icon.  Overridden by `topbar-leading-icon` context area.
 * @slot topbar-trailing - Place content in the trailing icon area of the top bar. Defaults to the menu icon. Overridden by `topbar-trailing-icon` context area.
 * @slot topbar-menu - Place content in the top bar's menu area. Overridden by `topbar-menu-items` context area. Use [md-menu-item](https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item) for menu items.
 * @slot navigation - Place content in the navigation bar. Recommended: [polyfea-md-app](../polyfea-md-app/readme.md) elements. Overriden by `navigation-content` context area.
 * @slot rail - Place content in the navigation rail. Recommended: [polyfea-md-app](../polyfea-md-app/readme.md) elements. Overriden by `rail-content` context area.
 * @slot drawer - Place content in the navigation drawer. Recommended: [polyfea-md-app](../polyfea-md-app/readme.md) elements. Overriden by `drawer-content` context area.
 * @slot - Place content in the main content area. For landing page, use [polyfea-md-apps](../polyfea-md-apps/readme.md) element. Overriden by `main-content` context area.
 * @slot rail-primary-action - Place content in the primary action area of the navigation rail. Recommended: [md-fab](https://github.com/material-components/material-web/blob/main/docs/components/fab.md) elements. Overriden by `rail-primary-actions` context area. Overriden by `rail-primary-action` context area.
 */
@Component({
  tag: 'polyfea-md-shell',
  styleUrl: 'polyfea-md-shell.css',
  shadow: true,
})
export class PolyfeaMdShell {

  /** 
   * The name of the application displayed in the top bar. This is only shown 
   * if the `app-shell-title` context area is empty.
   */
  @Prop() applicationHeadline: string = 'Polyfea Shell';

  /** 
   * If set to true, the menu button on the right side of the top bar will be hidden.
   */
  @Prop() topbarMoreDisabled: boolean = false;

  /** 
   * If set to true, the navigation drawer will be hidden in all screen resolutions.
   */
  @Prop() drawerDisabled: boolean = false;

  /** 
   * Determines whether the close button in the navigation drawer is hidden.
   */
  @Prop() drawerCloseDisabled: boolean = false;

  /** 
   * If set to true, the navigation rail will be hidden in all screen resolutions.
   */
  @Prop() railDisabled: boolean = false;

  /** 
   * If set to true, the navigation bar will be hidden in all screen resolutions.
   */
  @Prop() navigationDisabled: boolean = false;

  /** 
   * Controls the visibility of the legibility buttons (font size adjustment, theme toggle) in the top bar menu.
   */
  @Prop() themeMenuDisabled: boolean = false;

  /** Variant of the topbar. See [Top App Bar](https://m3.material.io/components/top-app-bar/overview) documentation. */
  @Prop() topbarVariant: "centered" | "small" | "medium" | "large" = "centered";

  @State() drawerOpen: boolean = true;
  @State() scrolled: boolean = false;


  @Listen('drawerClosed')
  drawerClosedHandler() {
    this.openDrawer(false);
  }

  @Listen('drawerOpened')
  drawerOpenedHandler() {
    this.openDrawer(true);
  }

  @Element() host: HTMLElement;

  componentWillLoad() {
    const drawerClosed = localStorage.getItem('drawerOpen');
    if (drawerClosed) {
      this.drawerOpen = drawerClosed === 'true';
    }
  }

  render() {
    const { mode, drawerIcon } = this.displayMode();
    return (
      <Host>
        <polyfea-md-theme-control variant="preset"></polyfea-md-theme-control>
        <page class={mode}>
          <topbar class={this.scrolled ? "scrolled" : ""} more-actions-disabled={this.topbarMoreDisabled} >
            <polyfea-md-topbar headline={this.applicationHeadline}
              leading-icon={drawerIcon ? "drawer" : "none"} variant={this.topbarVariant}>
              <polyfea-context name="topbar-leading-icon" take={1}>
                <slot slot="leading" name="topbar-leading"></slot>
              </polyfea-context>
              <polyfea-context name="topbar-trailing-icon" take={1}>
                <slot slot="trailing" name="topbar-trailing"></slot>
              </polyfea-context>
              <div class="topbar-menu" slot="menu">
                <polyfea-context name="topbar-menu-items">
                  <slot name="topbar-menu"></slot>
                </polyfea-context>
                {this.themeMenuDisabled ? '' : [
                  <polyfea-md-theme-control variant="menu-item" control="text-increase"></polyfea-md-theme-control>,
                  <polyfea-md-theme-control variant="menu-item" control="text-decrease"></polyfea-md-theme-control>,
                  <polyfea-md-theme-control variant="menu-item" control="reset-font"></polyfea-md-theme-control>,
                  <polyfea-md-theme-control variant="menu-item" control="theme-toggle"></polyfea-md-theme-control>
                ]}
              </div>
            </polyfea-md-topbar>
          </topbar>

          <main onScroll={(ev) => this.scrolled = (ev.target as any).scrollTop > 0}>
            <polyfea-context name="main-content">
              <slot></slot>
            </polyfea-context>
          </main>
          {this.navigationDisabled ? '' :
            <navigation>
              <polyfea-md-navigation-bar>
                <polyfea-context name="navigation-content" take={5}>
                  <slot name="navigation"></slot>
                </polyfea-context>
              </polyfea-md-navigation-bar>
            </navigation>
          }
          {this.railDisabled ? '' :
            <rail>
              <polyfea-md-rail drawerDisabled={this.drawerDisabled}>
                <polyfea-context name="rail-primary-action" take={1}>
                  <slot name="primary-action" slot="primary-action"></slot>
                </polyfea-context>
                <polyfea-context name="rail-content" take={7}>
                  <slot name="rail"></slot>
                </polyfea-context>
              </polyfea-md-rail>
            </rail>
          }
          {this.drawerDisabled ? '' :
            <drawer class="menu" onClick={() => {
              /** close only if navigation drawer is in modal form */
              const mediaQuery = window.matchMedia('(max-width: 60rem)');
              if (mediaQuery.matches) {
                this.openDrawer(false);
              }
            }}>
              <polyfea-md-drawer close-disable={this.drawerCloseDisabled}>
                <polyfea-context name="drawer-content">
                  <slot name="drawer"></slot>
                </polyfea-context>
              </polyfea-md-drawer>
            </drawer>
          }
        </page>
      </Host>
    );
  }

  private displayMode(): { mode: string, drawerIcon: boolean } {
    let mode = "";
    let showMenu = false;
    if (!this.drawerDisabled) {
      showMenu = !this.drawerOpen;
      mode += " drawer" + (this.drawerOpen ? "-open" : "-closed");
    } else {
      mode += " drawer-disabled";
    }
    if (!this.railDisabled && (this.drawerDisabled || !this.drawerOpen)) {
      mode += " rail";
      showMenu = false;
    }
    if (this.railDisabled) {
      mode += " rail-disabled";
      showMenu = !this.drawerDisabled && !this.drawerOpen;
    }

    if (!this.navigationDisabled && this.drawerDisabled && this.railDisabled) {
      mode += " navigation";
    }

    if (this.navigationDisabled) {
      mode += " navigation-disabled";
    }
    return { mode, drawerIcon: showMenu };
  }

  private openDrawer(open: boolean) {
    this.drawerOpen = open;
    localStorage.setItem('drawerOpen', this.drawerOpen ? 'true' : 'false');
  }

}
