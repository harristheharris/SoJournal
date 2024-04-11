$(() => {
    $("#event-date").datepicker({
        minDate: $(".trip-page").data('date-start'),
        maxDate: $(".trip-page").data('date-end')
    });
})