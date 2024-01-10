import { Component, Host, h } from '@stencil/core';

/** 
 * @slot - renders the navigation actions. 
 * Use [polyfea-md-app](../polyfea-md-app/readme.md) with attribute `context="navigation-content" 
 **/
@Component({
  tag: 'polyfea-md-navigation-bar',
  styleUrl: 'polyfea-md-navigation-bar.css',
  shadow: true,
})
export class PolyfeaMdNavigationBar {
  render() {
    return (
      <Host>
        <md-elevation></md-elevation>
        <slot></slot>
      </Host>
    );
  }

}
