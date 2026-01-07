export default function ReturnDate() {
    const date = new Date();

    const formattedDate = new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric'}).format(date);
    const formattedTime = new Intl.DateTimeFormat(undefined, {hour: 'numeric', minute: 'numeric', hour12: false}).format(date);

    return (`Today, ${formattedDate}, ${formattedTime}`)
}