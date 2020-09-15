import { get } from "./actionsUtilities";

export const getCategories = async (url) => {
    try {
        const response = await get(url);
        return await response.json;
    } catch(error) {
        throw new Error(error);
    }
};
