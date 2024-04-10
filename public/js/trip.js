const newEventFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#event-name').value.trim();
    const date = document.querySelector('#event-date').value.trim();
    const desc = document.querySelector('#event-desc').value.trim();

    if (name && startDate && endDate) {
        const response = await fetch('api/events', {
            method: 'POST',
            body: JSON.stringify({ name, date, desc }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to add Event');
        }
    }
}

const delEventButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`api/events/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete Event');
        }
    }
}

document.querySelector('.new-event-form').addEventListener('submit', newEventFormHandler);
document.querySelector('.event-list').addEventListener('click', delEventButtonHandler);