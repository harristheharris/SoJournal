
$(() => {
    $('#logout').on('click', async (event) => {
        const url = event.target.getAttribute('data-action');
        const method = event.target.getAttribute('data-method');

        const response = await fetch(url, {
            method: method,
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to delete');
        }
    })
})