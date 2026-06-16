const key = "http://localhost:9999"

export const signupAPI = async (values) => {
    const response = await fetch(key + "/user/createUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify(values),
    });
    return response;
};
export const singinAPI = async (values) => {
    const response = await fetch(key + "/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify(values),
    });
    return response;
};