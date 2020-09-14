// TODO: Add the rest of CRUD calls here to be used within app

export const get = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw new Error(error);
    }
};
