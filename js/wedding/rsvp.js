function rsvpOnClick(rsvpElem) {
    // don't navigate using the href automatically; it's there as a fallback
    // in-case javascript is disabled
    event.preventDefault();

    const text = "Before RSVPing, if you are attending as a day guest, ensure "
               + "that you have read our menu below and have decided on what "
               + "you would like to eat at the event."
               + "\n\n"
               + "If you have dietry requirements, you will be able to tell us "
               + "these during the RSVP process."
               + "\n\n"
               + "Click OK when you are ready to continue.";

    if (confirm(text)) {
        window.location.href = rsvpElem.href;
    }
}
