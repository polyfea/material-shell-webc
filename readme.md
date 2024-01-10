# Polyfea Material Application Shell

Web components for the application shell for Polyfea ecosystem, based on the Material Design scheme. It provides basic layout and context areas for the application composed of the microfrontends. In default configuration it contains top application bar, navigation rail or navigation drawer, top bar menu, main content area, and navigation bar on small resolution devices.

See documentation of the primary web component [`polyfea-md-shell`](./src/components/polyfea-md-shell/readme.md) for more details.

## Installation

As npm module:

```bash
npm install @polyfea/md-shell
```

Deployment to the kubernetes cluster running [polyfea controller](https://github.com/polyfea/polyfea-controller):

```bash
kubectl apply -k https://github.com/polyfea/md-shell/raw/v1.0./deploy/manifests
```

## Usage

See documentation of the primary web component [`polyfea-md-shell`](./src/components/polyfea-md-shell/readme.md) for more details

## Documentation

These custom elements are provided by the package:

| Element name | Description |
|--------------|-------------|
| [`polyfea-md-shell`](src/components/polyfea-md-shell/readme.md) | The application shell for Polyfea ecosystem, based on the Material Design scheme. It provides basic layout and context areas for the application composed of the microfrontends. In default configuration it contains top application bar, navigation rail or navigation drawer, top bar menu, main content area, and navigation bar on small resolution devices. |
| [`polyfea-md-app`](src/components/polyfea-md-app/readme.md) | The application link for the polyfea ecosystem. Renders according to context in which it is used - as card tile, navigation drawer link, navigation rail action, or navigation bar action |
| [`polyfea-md-apps`](src/components/polyfea-md-apps/readme.md) | The list of application tiles for the polyfea ecosystem. Intended as the main content element for landing zone page |
| [`polyfea-md-topbar`](src/components/polyfea-md-topbar/readme.md) | The top application bar for the polyfea md shell. It contains the application leading icon, title, trailing icons, and menu button. |
| [`polyfea-md-drawer`](src/components/polyfea-md-drawer/readme.md) | The navigation drawer for the polyfea md shell. It contains the list of application links. |
| [`polyfea-md-drawer-label`](src/components/polyfea-md-drawer-label/readme.md) | The navigation drawer label to separate or group drawer actions |
| [`polyfea-md-rail`](src/components/polyfea-md-rail/readme.md) | The navigation rail for the polyfea md shell. It contains the list of application actions. |
| [`polyfea-md-navigation`](src/components/polyfea-md-navigation/readme.md) | The navigation bar for the polyfea md shell. It contains the list of application links. |
| [`polyfea-md-theme-control`](src/components/polyfea-md-theme-control/readme.md) | The theme control buttons/menu items to control font and theme mode |
