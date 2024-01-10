import { newSpecPage } from '@stencil/core/testing';
import { PolyfeaMdApp } from '../polyfea-md-app';

describe('polyfea-md-app', () => {
  it('renders as a tile', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApp],
      html: `<polyfea-md-app context="main-content" href="./home" ></polyfea-md-app>`,
    });
    expect(page.root.shadowRoot.querySelector("a.card-wrapper[href='./home']")).toBeDefined();
    expect(page.root.shadowRoot.querySelector(".tile-picture")).toBeDefined();
    expect(page.root.shadowRoot.querySelector(".headline")).toBeDefined();
    expect(page.root.shadowRoot.querySelector(".supporting-text")).toBeDefined();
  });

  it('renders as a tile without image', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApp],
      html: `<polyfea-md-app href="./home" context="main-content" tile-img-disabled></polyfea-md-app>`,
    });
    expect(page.root.shadowRoot.querySelector("a.card-wrapper[href='./home']")).toBeDefined();
    expect(page.root.shadowRoot.querySelector(".tile-picture")).toBeFalsy();
    expect(page.root.shadowRoot.querySelector(".headline")).toBeDefined();
    expect(page.root.shadowRoot.querySelector(".supporting-text")).toBeDefined();
  });

  it('renders as a drawer action', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApp],
      html: `<polyfea-md-app href="./home" context="drawer-content" headline="Tets headline" material-icon="home" ></polyfea-md-app>`,
    });

    const icon = page.root.shadowRoot.querySelector(".icon");
    const headline = page.root.shadowRoot.querySelector(".headline");

    expect(page.root.shadowRoot.querySelector("a.drawer-button[href='./home']")).toBeDefined();
    expect(icon).toEqualHtml('<div class="icon"><slot name="icon"><md-icon>home</md-icon></slot></div>');
    expect(headline).toEqualHtml('<div class="headline">Tets headline</div>');
  });

  it('renders as a drawer action with icon source', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApp],
      html: `<polyfea-md-app href="./home" context="drawer-content" headline="Tets headline" icon-src="./img/home.png" ></polyfea-md-app>`,
    });

    const icon = page.root.shadowRoot.querySelector(".icon");
    const headline = page.root.shadowRoot.querySelector(".headline");

    expect(page.root.shadowRoot.querySelector("a.drawer-button[href='./home']")).toBeDefined();
    expect(icon).toEqualHtml('<div class="icon"><slot name="icon"><img alt="" src="./img/home.png"></slot></div>');
    expect(headline).toEqualHtml('<div class="headline">Tets headline</div>');
  });

  it('has drawer action active on target href', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApp],
      url: 'http://localhost:3333/home',
      html: `<polyfea-md-app href="./home" context="drawer-content" headline="Tets headline" icon-src="./img/home.png" ></polyfea-md-app>`,
    });

    expect(page.root.shadowRoot.querySelector("a.drawer-button[href='./home']")).toBeDefined();
    expect(page.root.shadowRoot.querySelector("a.drawer-button,active")).toBeTruthy();
  });


  it('renders as a rail action', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApp],
      html: `<polyfea-md-app href="./home" context="rail-content" headline="Tets headline" material-icon="home" ></polyfea-md-app>`,
    });

    const icon = page.root.shadowRoot.querySelector(".icon");
    const headline = page.root.shadowRoot.querySelector(".headline");

    expect(page.root.shadowRoot.querySelector("a.rail-button[href='./home']")).toBeDefined();
    expect(icon).toEqualHtml('<div class="icon"><md-ripple></md-ripple><slot name="icon"><md-icon>home</md-icon></slot></div>');
    expect(headline).toEqualHtml('<div class="headline">Tets headline</div>');
  });

  it('renders as a rail action with short hedline and icon-src', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApp],
      html: `<polyfea-md-app 
        href="./home" 
        context="rail-content" 
        headline="Test long headline" 
        short-headline="Short" icon-src="./img/home.png" ></polyfea-md-app>`,
    });

    const icon = page.root.shadowRoot.querySelector(".icon");
    const headline = page.root.shadowRoot.querySelector(".headline");

    expect(page.root.shadowRoot.querySelector("a.rail-button[href='./home']")).toBeDefined();
    expect(icon).toEqualHtml('<div class="icon"><md-ripple></md-ripple><slot name="icon"><img alt="" src="./img/home.png"></slot></div>');
    expect(headline).toEqualHtml('<div class="headline">Short</div>');
  });


  it('has rail action active on target href', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApp],
      url: 'http://localhost:3333/home',
      html: `<polyfea-md-app 
        href="./home" 
        context="rail-content" 
        headline="Test long headline" 
        short-headline="Short" icon-src="./img/home.png" ></polyfea-md-app>`,
    });

    const icon = page.root.shadowRoot.querySelector(".icon");

    expect(page.root.shadowRoot.querySelector("a.rail-button[href='./home']")).toBeDefined();
    expect(icon).toHaveClass("active");
  });

  it('renders as a navigation action', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApp],
      html: `<polyfea-md-app href="./home" context="navigation-content" headline="Tets headline" material-icon="home" ></polyfea-md-app>`,
    });

    const icon = page.root.shadowRoot.querySelector(".icon");
    const headline = page.root.shadowRoot.querySelector(".headline");

    expect(page.root.shadowRoot.querySelector("a.navigation-button[href='./home']")).toBeDefined();
    expect(icon).toEqualHtml('<div class="icon"><md-ripple></md-ripple><slot name="icon"><md-icon>home</md-icon></slot></div>');
    expect(headline).toEqualHtml('<div class="headline">Tets headline</div>');
  });

  it('renders as a navigation action with short hedline and img-src', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApp],
      html: `<polyfea-md-app
        href="./home" context="navigation-content" 
        headline="Test long headline" short-headline="Short" 
        icon-src="./img/home.png" ></polyfea-md-app>`,
    });

    const icon = page.root.shadowRoot.querySelector(".icon");
    const headline = page.root.shadowRoot.querySelector(".headline");

    expect(page.root.shadowRoot.querySelector("a.navigation-button[href='./home']")).toBeDefined();
    expect(icon).toEqualHtml('<div class="icon"><md-ripple></md-ripple><slot name="icon"><img alt="" src="./img/home.png"></slot></div>');
    expect(headline).toEqualHtml('<div class="headline">Short</div>');
  });

  it('has navigation action active on target href', async () => {
    const page = await newSpecPage({
      components: [PolyfeaMdApp],
      url: 'http://localhost:3333/home',
      html: `<polyfea-md-app 
        href="./home" 
        context="navigation-content" 
        headline="Test long headline" 
        short-headline="Short" icon-src="./img/home.png" ></polyfea-md-app>`,
    });

    const icon = page.root.shadowRoot.querySelector(".icon");

    expect(page.root.shadowRoot.querySelector("a.navigation-button[href='./home']")).toBeDefined();
    expect(icon).toHaveClass("active");
  });

});

//     expect(page.root).toEqualHtml(``);

