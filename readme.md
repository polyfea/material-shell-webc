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