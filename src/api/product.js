import api from "./api";

const getList = async () => {
  const response = await api.get(`/products`);

  return response;
};

const getById = async (id) => {
  const response = await api.get(`/products/${id}`);

  return response;
};

export { getList, getById };
