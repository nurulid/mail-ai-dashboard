export default function formatMonthDay(dateString: string) { 
	const date = new Date(dateString); 
	const month = date.toLocaleString('default', { month: 'long' }); 
	const day = date.getDate(); 
	return `${month} ${day}`; 
}