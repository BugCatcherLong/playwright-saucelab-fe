
# Playwright Demo using Saucelabs test site

## Setup
1. Make sure node 17 is installed 
2. Download all the dependencies by
  
  ```bash
  yarn install
  ```

## Run

Test command per environment:

```bash
yarn test:e2e
```

Running specific files and with headed:

```bash
yarn test:e2e <file-name or parts-of-file-name> --headed
```