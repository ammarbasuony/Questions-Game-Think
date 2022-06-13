import server from "./index";

const getCategories = async (amount, categoryId, difficulty, token) => {
  try {
    const questions = await server.get(
      `/api.php?amount=${amount}${
        categoryId !== -1 ? `&category=${categoryId}` : ""
      }&difficulty=${difficulty}&token=${token}`
    );
    return questions.data.results;
  } catch (error) {
    return error.response;
  }
};

export default getCategories;
