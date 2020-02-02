const invokeService = async (_, msg) => {
  let r = await window.fetch("/excel/fx/", {
    method: "POST",
    data: JSON.stringify(msg)
  });
  return await r.json();
};

export default {
  invokeService
};
