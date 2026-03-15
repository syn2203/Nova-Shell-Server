# wavehub-server

一个可直接复制使用的 NestJS 最小化模板，只保留最基础的应用结构、测试和构建链路。

## 特性

- 标准 `main/app.module/app.controller/app.service` 结构
- `GET /` 健康检查入口
- 内置 `@nestjs/config`，默认读取 `.env`
- 可运行的 unit test 和 e2e test
- 兼容 ESLint 9 的 flat config
- 使用 `HOST`/`PORT` 环境变量配置监听地址和端口
- 自带 GitHub Actions CI 与 Dockerfile

## 启动

```bash
npm install
npm run start:dev
```

可选地先复制环境变量模板：

```bash
cp .env.example .env
npm run start:dev
```

## 常用命令

```bash
npm run build
npm run lint
npm run test
npm run test:e2e
```

## 环境变量

```bash
HOST=0.0.0.0
PORT=3000
```

## Docker

```bash
docker build -t wavehub-server .
docker run --rm -p 3000:3000 --env-file .env wavehub-server
```

## 目录

```text
src/
  app.controller.ts
  app.controller.spec.ts
  app.module.ts
  app.service.ts
  main.ts
test/
  app.e2e-spec.ts
  jest-e2e.json
.github/
  workflows/
    ci.yml
Dockerfile
.dockerignore
.env.example
```
# Nova-Shell-Server
