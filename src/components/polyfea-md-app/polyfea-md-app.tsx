import { Component, Host, Prop, State, h } from '@stencil/core';
import { href } from '@polyfea/core';

/**
 * @slot icon - icon to replace the icon shown in navigation, rail, and drawer variants. Takes priority over `icon-src` and `material-icon` properties.
 */
@Component({
  tag: 'polyfea-md-app',
  styleUrl: 'polyfea-md-app.css',
  shadow: true,
})
export class PolyfeaMdApp {

  /** The main title of the application. */
  @Prop() headline: string;

  /** A shorter version of the headline, used in drawer, rail, or navigation variant rendering. */
  @Prop() shortHeadline: string;

  /** Additional text to display in the tile variant rendering. */
  @Prop() supportingText: string;

  /** The URL of the image to display in the tile variant rendering. */
  @Prop() tileImgSrc: string;

  /** The URL of the image to display in the drawer, rail, or navigation variant rendering. */
  @Prop() iconSrc: string;

  /**
   * This property specifies the name of the Material Symbol icon to be used. 
   * It's only utilized if the `icon-src` property is not set. 
   * For more details on Material Symbols, refer to the [Material Symbols documentation](https://fonts.google.com/icons).
   */
  @Prop() materialIcon: string;

  /**
   * This property disables the image in the tile variant rendering. If the `tile-img-src` property is not specified, the colored content is used instead. 
   * When the tile image is disabled, only the `headline` and `supporting-text` properties are rendered.
   */
  @Prop() tileImgDisabled: boolean = false;

  /**
   * This property specifies the URL to navigate to when the element is clicked. 
   * The click handler uses either the Navigation API's `navigate()` method or the History API's `pushState()` method.
   * For more details, refer to the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate) and [History API](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) documentation.
   */
  @Prop() href: string;

  /**
   * This property specifies whether the element is actived on all paths prefixed by href. By default, the element is only active
   * when the href matches the current path.
   */
  @Prop() isActivePrefix: boolean = false;

  /** /**
 * This property specifies the context in which the element is rendered. 
 * It's typically set by the `polyfea-context` element.
 * For more details, refer to the [`polyfea-context` documentation](https://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md).
 */
  @Prop({
    reflect: true,
    attribute: 'context'
  }) context: string;

  
  private tileImg: HTMLImageElement;
  private lastTileImg: HTMLImageElement;

  @State() isActive: boolean = false;

  private onNavigateSuccess() {
    const href = new URL(this.href, new URL(document.baseURI, document.location.href || "http://localhost")).href;
    if (this.isActivePrefix) {
          this.isActive =  window.location.href.startsWith(href);
    }
      this.isActive = window.location.href === href;
  }

  componentWillLoad() {
    if(globalThis.navigation) {
      globalThis.navigation.addEventListener("navigatesuccess", () => this.onNavigateSuccess());
    }
    this.onNavigateSuccess();
  }

  render() {
    return (
      <Host>
        {this.context === 'drawer-content'
          ? this.renderDrawerItem()
          : this.context === 'rail-content'
            ? this.renderRailItem()
            : this.context === 'navigation-content'
              ? this.renderNavigationItem()
              : this.renderTile()
        }
      </Host>
    );
  }

  private renderRailItem() {
    return <a class="rail-button" {...href(this.href)}>
      <div class={ "icon" + ( this.isActive ? " active" : "")}>
        <md-ripple></md-ripple>
        <slot name="icon">
        {this.iconSrc
          ? <img src={this.iconSrc} alt="" />
          : this.materialIcon
            ? <md-icon>{this.materialIcon}</md-icon>
            : undefined
        }
        </slot>
      </div>
      <div class="headline">{this.shortHeadline || this.headline || ""}</div>

    </a>
  }

  private renderNavigationItem() {
    return <a class="navigation-button" {...href(this.href)}>
      <div class={ "icon" + ( this.isActive ? " active" : "")}>
        <md-ripple></md-ripple>
        <slot name="icon">
        {this.iconSrc
          ? <img src={this.iconSrc} class="app-icon" alt="" />
          : this.materialIcon
            ? <md-icon>{this.materialIcon}</md-icon>
            : undefined
        }
        </slot>
      </div>
      <div class="headline">{this.shortHeadline || this.headline}</div>
    </a>
  }

  private renderDrawerItem() {
    return <a class={ "drawer-button" + ( this.isActive ? " active" : "")} {...href(this.href)} >
      <md-ripple></md-ripple>
      <div class="icon">
        <slot name="icon">
        {this.iconSrc
          ? <img src={this.iconSrc} class="app-icon" alt="" />
          : this.materialIcon
            ? <md-icon>{this.materialIcon}</md-icon>
            : undefined
        }
        </slot>
      </div>
      <div class="headline">{this.headline}</div>
    </a>
  }

  private renderTile() {
    return <a class="card-wrapper" href={this.href} onClick={
      (e) => {
        e.preventDefault();
        setTimeout(() => {
          if (globalThis.navigation) {
            globalThis.navigation.navigate(this.href)
          } else {
            window.history.pushState({}, '', this.href);
          }

        }, 300);
      }} >
      <md-elevation></md-elevation>
      <md-ripple></md-ripple>
      {this.tileImgDisabled ? '' :
        <div class="tile-picture">
          <img src={this.tileImgSrc} alt="" ref={(el) => this.tileImg = el} />
        </div>
      }
      <div class="content">
        <div class="headline">
          {this.headline}
        </div>
        <div class="supporting-text">
          {this.supportingText}
        </div>
      </div>
    </a>
  }

  componentDidRender() {
    if (this.tileImg && this.tileImg !== this.lastTileImg) {
      this.tileImg.addEventListener('load', () => {
        this.tileImg.style.opacity = '1';
      });
      this.lastTileImg = this.tileImg;
    }
  }

}
