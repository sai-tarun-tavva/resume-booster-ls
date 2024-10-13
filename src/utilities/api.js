import { END_POINTS, STATUS_CODES } from "../constants";

export const makeSuggestions = async (body) => {
  try {
    const response = await fetch(END_POINTS.GET_SUGGESTIONS, {
      method: "GET",
      body,
    });

    if (!response.ok) {
      return { status: response.status, data: null };
    } else {
      const resData = await response.json();
      return { status: response.status, data: resData };
    }
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return { status: STATUS_CODES.SUCCESS, data: null };
  }
};
