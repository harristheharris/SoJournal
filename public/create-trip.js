$( function() {
	$( "#create-trip-start-date" ).datepicker();
	$( "#create-trip-end-date" ).datepicker();

	$('#create-trip-form').on('submit', async (e) => {
		e.preventDefault();

		const data = {
			name: $('#create-trip-name').val(),
			date_start: $('#create-trip-start-date').val(),
			date_end: $('#create-trip-end-date').val(),
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
});
