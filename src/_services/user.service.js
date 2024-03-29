
export const userService = {
    login,
    logout,
    gmaillogin,
    signup,
    outlooklogin,
    forgotPassword,
    resetPassword
};

function login(usernameOrEmail, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernameOrEmail, password })
    };

    return fetch(`http://192.168.1.194:8080/api/auth/signin/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(usernameOrEmail + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function gmaillogin(email, token, firstName, lastName) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token, firstName, lastName  })
    };

    return fetch(`http://localhost:8080/api/auth/gmaillogin/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(email + ':' + token);
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function outlooklogin(email, token, firstName, lastName) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token, firstName, lastName })
    };

    return fetch(`http://localhost:8080/api/auth/outlooklogin/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                console.log(user);
                user.authdata = window.btoa(email + ':' + token);
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function forgotPassword(email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email)
    };

    return fetch(`http://localhost:8080/forgotPassword`, requestOptions)
        .then(handleResponse)
        .then(user => {return user;}); // TODO: redirect to the relevant place 
}

function signup(SignupDetails) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(SignupDetails)
    };

    return fetch(`http://localhost:8080/api/auth/signup/`, requestOptions)
        .then(handleResponse)
        .then(user => {return user;}); // TODO: redirect to the relevant place 
}

function handleResponse(response) {
    debugger;
    console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data);
        
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function resetPassword(password, confirmPassword, email, token) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, confirmPassword, token })
    };

    return fetch(`http://localhost:8080/api/auth/resetPassword/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(email + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}