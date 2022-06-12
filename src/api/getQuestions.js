import server from "./index";

const getCategories = async (amount, categoryId, difficulty) => {
  try {
    const questions = await server.get(
      `/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`
    );
    return questions.data.results;
  } catch (error) {
    return error.response;
  }
};

export default getCategories;
