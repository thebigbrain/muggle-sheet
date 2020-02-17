export const invokeService = async (service, msg) => {
  let r = await window.fetch(`/${service}`, {
    method: "POST",
    data: JSON.stringify(msg)
  });
  return await r.json();
};
