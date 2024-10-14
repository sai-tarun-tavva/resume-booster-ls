import { END_POINTS } from "../constants";

/**
 * Makes a GET request to retrieve suggestions.
 *
 * @async
 * @function
 * @param {Object} [body=null] - Optional request body (not typically used for GET requests).
 * @returns {Promise<{ status: number, data: Object|null }>} The status and data from the response.
 */
export const makeSuggestions = async (body = null) => {
  try {
    const response = await fetch(END_POINTS.GET_SUGGESTIONS, {
      method: "GET",
      body,
    });

    if (!response.ok) {
      // Assume any error that causes this block to execute is a server issue
      return { status: 500, data: null };
    } else {
      // Return the response data and status
      const resData = await response.json();
      return { status: response.status, data: resData };
    }
  } catch (error) {
    // Assume any error that causes this block to execute is a server or network issue
    console.error("Error fetching suggestions:", error);
    return { status: 500, data: null };
  }
};
