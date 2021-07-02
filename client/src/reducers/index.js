import { combineReducers } from "redux";

import posts from './posts';
import auth from './auth';

export default combineReducers({
    posts: posts, // as key=value so we can also simply write it as posts, instead of posts:posts, 
    auth: auth,  
});