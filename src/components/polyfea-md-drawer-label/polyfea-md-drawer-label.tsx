import { Component, Host, Prop, h } from '@stencil/core';

/** 
 * @slot - additional content of the label, or the headline if the `headline` property is not used 
 **/
@Component({
  tag: 'polyfea-md-drawer-label',
  styleUrl: 'polyfea-md-drawer-label.css',
  shadow: true,
})
export class PolyfeaMdDrawerLabel {

  /** The headline of the label. May be empty if slot is used*/
  @Prop() headline: string;

  render() {
    return (
      <Host>
        {this.headline}
        <slot></slot>
      </Host>
    );
  }

}
