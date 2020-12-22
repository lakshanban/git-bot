# Git-Bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that A bot to automate git processes.

## Setup

```sh
# Install dependencies
npm install

# Compile
npm run build

# Run
npm run start
```

## Docker

```sh
# 1. Build container
docker build -t Git-Bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> Git-Bot
```

## Contributing

If you have suggestions for how Git-Bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.


## License

[ISC](LICENSE) © 2020 Lakshan Bandara
