export const setAuthToken = (user) => {
    // get JWT token
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //setting the token into local storage
            localStorage.setItem('User-Token', data.token)
        })
}