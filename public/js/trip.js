$(function () {
    $("#event-date").datepicker({
        minDate: $(".trip-page").data('date-start'),
        maxDate: $(".trip-page").data('date-end')
    });

    $('.event-form').on('submit', async (e) => {
        e.preventDefault();
        const data = {
            name: $('#event-name').val(),
            date: $('#event-date').val(),
            description: $('#event-description').val(),
            trip_id: $('.trip-page').data('id'),
        }
        console.log(data);
        const response = await fetch('/api/events', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            const body = await response.json();

            document.location.replace(`/trip/${body.trip_id}`);
        } else {
            alert(response.statusText);
        }
    })
    $('.event-list').on('click', async (e) => {
        if (e.target.hasAttribute('data-id')) {
            const id = e.target.getAttribute('data-id');

            const response = await fetch(`/api/events/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                document.location.reload();
            } else {
                alert('Failed to delete Trip');
            }
        }
    })

});