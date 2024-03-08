import axios from "axios";

export const getPackages = async () => {
  try {
    const res = await axios.get("https://mock-api-pribadi-malik.vercel.app/api/mosleme-travel/packages");
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
