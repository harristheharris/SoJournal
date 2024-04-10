const logout = async () => {
    const respone = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (respone.ok) {
        document.location.replace('/');
    } else {
        alert(respone.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);