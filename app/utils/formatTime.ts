export default function formatTime(timeString: string) {
  const time = new Date(timeString);
  const hours = time.getUTCHours();
  const minutes = time.getUTCMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12; // Handle midnight (0 hours) as 12
  const formattedTime = `${formattedHours}:${minutes < 10 ? 0 + minutes : minutes} ${ampm}`;
  return formattedTime;
}