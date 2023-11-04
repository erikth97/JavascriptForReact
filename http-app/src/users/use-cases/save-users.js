import {User} from '../models/user';

/**
 * 
 * @param {Like<User>} userLike
 */
export const saveUsers = (userLike) => {

    const user = new User(userLike);

    //TODO mapper

    if (user.id) {
        throw 'No implementada la actualizacion'
        return;
    }

    const updateUser = await createUser(user)

}


const createUser = () => {
    
}