import Api from "../services/Api";

// Method to get a list of all Pokemon
export const getAllAidesList50 = async () => {
      const response = await Api.get("all?page=1&count=50");
      return response;
};