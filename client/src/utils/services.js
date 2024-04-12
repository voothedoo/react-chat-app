export const baseUrl = "http://localhost:5000";

export const postRequest = async (url, body) => {

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body

    });
    const data = await response.json();

    if (!response.ok) {
      let message;

      if (data?.message) {
        message = data.message;
      } else {
        message = data;
      }

      return { error: true, message };
    }

    return data;

  } catch (err) {
    console.error("An error occurred durint the POST request: ", err);
    return { error: true, message: "An error occured. Please try again later." };
  }
};

export const getRequest = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      let message = "An error occured.";

      if (data?.message) {
        message = data.message;
      }
      return ({ error: true, message });
    }
    return data;

  } catch (err) {
    console.error("An error occurred durint the GET request: ", err);
    return { error: true, message: "An error occured. Please try again later." };
  }


};