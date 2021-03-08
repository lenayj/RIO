
export const userService = {
    login,
    logout,
    gmaillogin
};

function login(usernameOrEmail, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernameOrEmail, password })
    };

    return fetch(`http://localhost:8080/api/auth/signin/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(usernameOrEmail + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function gmaillogin(email, token) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token })
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

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
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