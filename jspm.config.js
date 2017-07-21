SystemJS.config({
  nodeConfig: {
    "paths": {
      "github:": "jspm_packages/github/",
      "npm:": "jspm_packages/npm/",
      "aurelia-formly/": "src/"
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {},
  typescriptOptions: {
    "tsconfig": true
  },
  packages: {
    "aurelia-formly": {
      "main": "index.ts",
      "format": "esm",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        },
        "*.js": {
          "loader": "plugin-typescript"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "@types/systemjs": "npm:@types/systemjs@0.20.2",
    "aurelia-binding": "npm:aurelia-binding@1.2.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
    "aurelia-framework": "npm:aurelia-framework@1.1.4",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.3.1",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
    "aurelia-pal": "npm:aurelia-pal@1.3.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
    "aurelia-templating": "npm:aurelia-templating@1.4.2",
    "aurelia-validation": "npm:aurelia-validation@1.1.1",
    "reflect-metadata": "npm:reflect-metadata@0.1.10",
    "tslib": "npm:tslib@1.7.1"
  },
  packages: {}
});
