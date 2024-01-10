import { Component, Host, Prop, State, h } from '@stencil/core';

/**
/**
 * @slot - This slot is for the content of the element, typically application tiles. 
 * You can use [polyfea-md-app](../polyfea-md-app/readme.md) or any other component. 
 * If a context area is specified and available, the slot content is not rendered. 
 * Instead, elements provided by the context are displayed.
 */
@Component({
  tag: 'polyfea-md-apps',
  styleUrl: 'polyfea-md-apps.css',
  shadow: true,
})
export class PolyfeaMdApps {

  /** 
   * name of the [polyfe-context](https://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md) 
   * element that will be used to render the applications web components.
   */
  @Prop() applicationsContext: string = "applications";

  @State()
  transistioning: boolean = true;

  componentWillLoad() {
    this.transistioning = true;
  }

  render() {
    return (
      <Host >
        <div class={"wrapper" + (this.transistioning ? " begin-transition" : "" )}>
          <polyfea-context name={this.applicationsContext}>
          <slot></slot>
          </polyfea-context>
        </div>
      </Host>
    );
  }

  componentDidRender() {
    if (this.transistioning) {
      setTimeout(() => this.transistioning = false, 10);
    }
  }

}
