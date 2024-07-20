export function generatePostID() {
    // Get the timestamp and convert
    // it into alphanumeric input
    return Date.now().toString(36);
}
