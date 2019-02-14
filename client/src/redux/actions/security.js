const logUser = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}
export const login = (username, password, dispatch) => {
    const data = {username, password};
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch('http://localhost:3000/login_check', 
    {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => dispatch(logUser(data)))
    .catch(error => console.log(error));

    return {
        type: "REQUEST_LOGIN",
        payload: {}
    }
}
