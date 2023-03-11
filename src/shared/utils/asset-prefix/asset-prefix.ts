export const assetPrefix = () => {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  const repo = process.env.GITHUB_REPOSITORY || false;
  let assetPrefix = "";
  if (isGithubActions && repo) {
    assetPrefix = `/${repo.replace(/.*?\//, "")}`;
  }
  return assetPrefix
};
