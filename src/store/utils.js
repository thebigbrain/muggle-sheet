export const adjustPath = tree => {
  const getPath = r => {
    if (r == null) return "";
    const path = r.path.trim().replace(/^[/]+|[/]+$/g, "");
    return `${getPath(tree.get(r.parent))}/${path}`;
  };

  for (let r of tree.values()) {
    r.path = getPath(r);
  }
  return Array.from(tree.values());
};
