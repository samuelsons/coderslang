//Import user object from constant.js
import { users } from "./constants.js";

export const getUserName = (userId) => users[userId].name;
