const configuredBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

export const SITE_BASE_PATH = configuredBasePath.replace(/\/+$/, "");

export function sitePath(path: string) {
  if (!SITE_BASE_PATH || !path.startsWith("/")) return path;
  if (path === SITE_BASE_PATH || path.startsWith(`${SITE_BASE_PATH}/`)) return path;
  return `${SITE_BASE_PATH}${path}`;
}
