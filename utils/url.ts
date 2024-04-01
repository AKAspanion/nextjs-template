export const getUrlWithHost = (path?: string) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_HOST_URL || "https://template.spanion.in";
  return `${baseUrl}${path || "/"}`;
};
