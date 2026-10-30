/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly AMAZON_ASSOCIATES_TAG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
