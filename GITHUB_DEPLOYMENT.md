# GitHub 自动部署到 ZYRO Wiki

工作流 `.github/workflows/deploy-wiki.yml` 会构建静态网站，并且只同步服务器上的
`/var/www/zyro-wiki/wiki` 目录，不会覆盖 `www.zyrolink.cn` 的主站首页。

在 GitHub 仓库的 **Settings → Secrets and variables → Actions** 中添加：

- `ALIYUN_HOST`：服务器地址，例如 `47.79.1.75`
- `ALIYUN_USER`：SSH 登录用户
- `ALIYUN_SSH_KEY`：对应用户的 SSH 私钥
- `ALIYUN_PORT`：可选，默认 `22`
- `ALIYUN_WIKI_PATH`：可选，默认 `/var/www/zyro-wiki/wiki`

服务器需要安装 `rsync`，并按打包产物中的 `nginx-wiki.conf` 配置 `/wiki/`。
Secrets 配置完成后，可在 Actions 页面手动运行 **Deploy ZYRO Wiki**；后续每次推送
到 `main` 都会自动更新 Wiki。
