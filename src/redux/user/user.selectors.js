// at time of creation: header uses 'user' 
import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)