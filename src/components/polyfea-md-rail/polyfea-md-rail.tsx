import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

/** 
 * @slot - This slot is for the main content of the rail, typically a list of navigation actions. 
 * Use [polyfea-md-app](../polyfea-md-app/readme.md) with attribute `context="rail-content" 
 * 
 * @slot primary-action - This slot is for the [primary action's FAB](https://m3.material.io/components/navigation-rail/guidelines#3bdde9e4-7698-4dfb-9ffb-36285bca6329) 
 * of the rail, and is depending on the application state.
 **/
@Component({
  tag: 'polyfea-md-rail',
  styleUrl: 'polyfea-md-rail.css',
  shadow: true,
})
export class PolyfeaMdRail {

  /** The rail show drawer open icon by default. Set this property to false to hide it */
  @Prop() drawerDisabled: boolean = false;

  /** The alignment of the navigation actions. */
  @Prop() contentPosition: 'top' | 'middle' | 'bottom' = 'top';

  /** Raised when the drawer open icon is clicked indicating the user want to open the drawer. Drawer and rail are 
   * mutually exclusive, the logic of showing one or other is controlled by the parent component.
   */
  @Event() drawerOpened: EventEmitter;

  render() {
    return (
      <Host>
        <div class="primary-action">
        {this.drawerDisabled ? null :
          <md-icon-button onclick={() => this.drawerOpened.emit()} class="drawer-button">
            <md-icon>menu</md-icon>
          </md-icon-button>
        }
        <slot name="primary-action"></slot>
        </div>

        <div class="content">
          { this.contentPosition === 'middle' || this.contentPosition === 'bottom' 
          ? <div class="glue"></div>
          : undefined
          }
          <slot></slot>
          { this.contentPosition === 'middle' || this.contentPosition === 'top' 
          ? <div class="glue"></div>
          : undefined
          }
        </div>
      </Host>
    );
  }

}
