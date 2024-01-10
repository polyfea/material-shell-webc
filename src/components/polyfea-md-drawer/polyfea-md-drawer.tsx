import { Component, EventEmitter, Event, Host, h, Prop, } from '@stencil/core';

@Component({
  tag: 'polyfea-md-drawer',
  styleUrl: 'polyfea-md-drawer.css',
  shadow: true,
})
/**
 * /**
 * @slot - This slot is for the main content of the drawer, typically a list of navigation links. It can contain:
 *    * [polyfea-md-drawer-label](../polyfea-md-drawer-label/readme.md): A label separator in the drawer list.
 *    * [polyfea-md-app](../polyfea-md-app/readme.md): Set its 'context' property to "drawer-content" to use it as a navigation element.
 *    * md-divider: A divider in the drawer list.
 *    * other element that can be used in a navigation drawer.
 */
export class PolyfeaMdDrawer {

  /**
   * By default, the drawer includes a close button. If this property is set to false, the close button will be hidden. 
   * This can be useful when the drawer is used for navigation and a close button is unnecessary.
   */
  @Prop() closeDisabled: boolean = false;

  /** Rised when the close button is clicked indicating the user want to close the drawer */
  @Event() drawerClosed: EventEmitter;


  render() {
    return (
      <Host>
        {this.closeDisabled ? '' :
          <div class="close-button-wrapper">
            <md-icon-button class="close-button" 
              onclick={()=> this.drawerClosed.emit()}>
              <md-icon>close_small</md-icon>
            </md-icon-button>
          </div>
          }
        <div class="content">
            <slot></slot>
        </div>
        
      </Host>
    );
  }

}
