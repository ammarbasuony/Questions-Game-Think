import server from "./index";

const getToken = async () => {
  try {
    const sessionToken = await server.get("/api_token.php?command=request");
    return sessionToken.data.token;
  } catch (error) {
    return error.response;
  }
};

export default getToken;
