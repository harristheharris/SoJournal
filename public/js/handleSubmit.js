$(() => {
    $('form').on('submit', async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const url = new URL(form.action);
        const formData = new FormData(form);
        const extraData = $(event.currentTarget).data();

        for (let data in extraData) {
            formData.append(data, extraData[data]);
        }

        const searchParams = new URLSearchParams(formData);

        const fetchOptions = {
            method: form.method,
        };

        if (form.method.toLowerCase() === 'post') {
            if (form.enctype === 'multipart/form-data') {
                fetchOptions.body = formData;
            } else {
                fetchOptions.body = searchParams;
            }

        } else {
            url.search = searchParams;
        }

        response = await fetch(url, fetchOptions);

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }  
    })
})