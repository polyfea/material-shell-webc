
import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

/** 
 * @slot headline - The headline of the top bar. If not provided, the value of the `headline` property is shown.
 * @slot leading - The leading icon or button of the top bar. If not provided, the content is controlled by the `leading-icon` property.
 * @slot trailing - The trailing actions - icons or buttons of the top bar,
 * @slot menu - The menu items of the "more actions" menu. Shall be elements of type `<md-menu-item>`.
 */
@Component({
  tag: 'polyfea-md-topbar',
  styleUrl: 'polyfea-md-topbar.css',
  shadow: true,
})
export class PolyfeaMdTopbar {

  /** Text of the headline */
  @Prop() headline: string = "Polyfea";

  /** Icon to show in the leading position of the top bar if the `leading` slot is left empty. Possible values are:
   * - `none` - No icon is shown.
   * - `drawer` - A [menu](https://fonts.google.com/icons?icon.query=menu) icon is shown that opens the drawer.
   * - `back` - A [back](arrow_back) icon is shown that emits a `back` event when clicked.
   **/
  @Prop() leadingIcon: "none" | "drawer" | "back" = "drawer";

  /**
   * Variant of the applications top bar - changes the layout and size of the top bar. Possible values are:
   * - `centered` - The top bar is centered and has a fixed height, only "more actions" menu or single trailing icon. 
   * - `small` - The top bar has a fixed height and a menu and trailing icons.
   * - `medium` - The top bar has a fixed height and a menu and trailing icons. Headline is bigger on separate line.
   * - `large` - The top bar has a fixed height and a menu and trailing icons. Headline is bigger on separate line with wrapping enabled.
   **/
  @Prop() variant: "centered" | "small" | "medium" | "large" = "centered";

  /** Controls if right side icon with more actions menu is rendered */
  @Prop() moreActionsDisabled: boolean = false;

  /** Emitted when clicking on the drawer leading icon button. The parent component shall set the `leading-icon` to `none` if the drawer is open */
  @Event() drawerOpened: EventEmitter;

  /** Emitted when clicking on the back leading icon button. The parent component shall set the `leading-icon` to `none` if there is no back action */
  @Event() back: EventEmitter;

  private menuEl: HTMLElement;

  render() {

    return (
      <Host>
        <div class={this.variant + "-wrapper"}>
          <slot name="leading">
            {this.leadingIcon == "back"
              ? <md-icon-button class="back-button"
                onclick={() => this.back.emit()}>
                <md-icon>back</md-icon>
              </md-icon-button>
              : this.leadingIcon == "drawer"
                ? <md-icon-button class="drawer-button"
                  onclick={() => this.drawerOpened.emit()}>
                  <md-icon>menu</md-icon>
                </md-icon-button>
                : <div></div>
            }
          </slot>
          <div class="headline">
            <slot name="headline"><h1>{this.headline}</h1></slot>
          </div>
          {this.variant == "centered"
            ? this.renderMoreActions()
            : [
              <div class="trailing">
                <slot name="trailing">
                </slot>
              </div>,
              this.renderMoreActions()
            ]
          }
        </div>
      </Host>
    );
  }

  private renderMoreActions() {
    return <div class="menu" >
      {this.moreActionsDisabled ? '' : [
        <md-icon-button id="topbar-menu"
          onclick={() => (this.menuEl as any).open = true}>
          <md-icon>more_vert</md-icon>
        </md-icon-button>,
        <md-menu anchor="topbar-menu" ref={el => this.menuEl = el}
          anchor-corner="end-end"
          menu-corner="start-end">
          <slot name="menu"></slot>
        </md-menu>
      ]
      }
    </div>
  }

}
