const users = [];

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate the data
    if(!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Chack for existing user
    const existingUsers = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if(existingUsers) {
        return {
            error: 'Username is in use!'
        }
    }
    
    // Store user
    const user = { id, username, room };
    users.push(user);

    return { user };
}
const removeUser = (id) => {
    const index = users.findIndex((user) => id === user.id);
    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}
const getUser = (id) => {
    return users.find((user) => id === user.id);
}
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => room === user.room);
}
module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}