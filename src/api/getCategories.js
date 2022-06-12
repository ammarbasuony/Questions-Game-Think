import server from "./index";

const getCategories = async () => {
  try {
    const categories = await server.get("/api_category.php");
    return categories.data.trivia_categories;
  } catch (error) {
    return error.response;
  }
};

export default getCategories;
