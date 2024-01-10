# polyfea-md-drawer

This component renders navigation drawer, modeled after the [Material Design Navigation Drawer](https://m3.material.io/components/navigation-drawer/overview).

## How to Use

This web component is built with [StencilJS](https://stenciljs.com/), making it compatible with any framework or even without one. It's designed to be used as part of the [`polyfea-md-shell`](../polyfea-md-shell/readme.md) component and in combination with [polyfea-md-app](../polyfea-md-app/readme.md) component.

Import [@material/web](https://github.com/material-components/material-web#readme) and [theme tokens](https://m3.material.io/foundations/design-tokens/overview). For more details, refer to the examples in [polyfea-md-shell](../polyfea-md-shell/readme.md) documentation.

Import the component in your module:

```typescript
import '@polyfea/md-shell';
```

then place the element in your HTML.

```html
<polyfea-md-drawer>
  <polyfea-md-app 
    href="./"
    headline="Home" supporting-text="Naviagte to landing page"
    material-icon="home" context="drawer-content"
  ></polyfea-md-app>
  <polyfea-md-drawer-label>My Frontend Applications</polyfea-md-drawer-label>
  <polyfea-md-app 
    href="./cool"
    headline="My other fea" supporting-text="My cool micro frontend"
    material-icon="mood" context="drawer-content">
  </polyfea-md-app>
  <md-divider></md-divider>
    <polyfea-md-app 
      href="./settings"
      headline="Settings" supporting-text="Configure application parameters"
      material-icon="manufacturing" context="drawer-content">
  </polyfea-md-app>
</polyfea-md-drawer>
```

It will render the following drawer:

![drawer](docs/drawer-example.png)

## Specification
<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                                                                      | Type      | Default |
| --------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `closeDisabled` | `close-disabled` | By default, the drawer includes a close button. If this property is set to false, the close button will be hidden.  This can be useful when the drawer is used for navigation and a close button is unnecessary. | `boolean` | `false` |


## Events

| Event          | Description                                                                         | Type               |
| -------------- | ----------------------------------------------------------------------------------- | ------------------ |
| `drawerClosed` | Rised when the close button is clicked indicating the user want to close the drawer | `CustomEvent<any>` |


## Dependencies

### Used by

 - [polyfea-md-shell](../polyfea-md-shell)

### Graph
```mermaid
graph TD;
  polyfea-md-shell --> polyfea-md-drawer
  style polyfea-md-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Polyfea MD Shell Web Components
