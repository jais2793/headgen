const users = []


export const addUser = (data) => {
    const idx = users.findIndex((e) => e.sessionId === data.sessionId)
    if(idx >= 0){
        return {status: true, user: users[idx], message: 'user session already exists'}
    } 
    users.push(data)
    return {status:true, user: data}
}


export const getUser = (sessionId) => {
    const idx = users.findIndex((e) => e.sessionId === sessionId)
    if(idx >= 0) {
        return {status: true, user: users[idx]}
    }
    return {status: false, message: "user not found"}
}

export const deleteUser = (sessionId) => {
    const idx = users.findIndex((e) => e.sessionId === sessionId)
    if(idx >= 0) {
        users.splice(idx, 1)
        return {status: true, message: "user deleted successfully"}
    }
    return {status: false, message: "user not found"}
}