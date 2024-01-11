/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 测试环境
  VITE_USER_NODE_ENV: string;

  // 公共基础路径
  VITE_PUBLIC_PATH: string;

  // 路由模式
  // Optional: hash | history
  VITE_ROUTER_MODE: 'hash' | 'history';

  // 是否启用 gzip 或 brotli 压缩打包，如果需要多个压缩规则，可以使用 “,” 分隔
  // Optional: gzip | brotli | none
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';

  // 打包压缩后是否删除源文件
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;

  // 打包时是否删除 console
  VITE_DROP_CONSOLE: boolean;

  // 是否开启 VitePWA
  VITE_PWA: boolean;

  // 测试环境接口地址
  VITE_API_URL: string;
}
