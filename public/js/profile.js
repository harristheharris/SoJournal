$(function () {
    $("#trip-date-start").datepicker();
    $("#trip-date-end").datepicker();
    
    $('.trip-form').on('submit', async (e) => {
        e.preventDefault();

        const data = {
            name: $('#trip-name').val(),
            date_start: $('#trip-date-start').val(),
            date_end: $('#trip-date-end').val(),
        }

        const response = await fetch('/api/trips', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            const body = await response.json();

            document.location.replace(`/trip/${body.id}`);
        } else {
            alert(response.statusText);
        }
    })
    $('.trip-list').on('click', async (e) => {
        if (e.target.hasAttribute('data-id')) {
            const id = e.target.getAttribute('data-id');

            const response = await fetch(`api/trips/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                document.location.replace('/profile');
            } else {
                alert('Failed to delete Trip');
            }
        }
    })

});