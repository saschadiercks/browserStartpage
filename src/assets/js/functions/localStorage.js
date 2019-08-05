export default function doLocalStorage(item,value) {
	if(value) {
		localStorage.setItem(item,value);
	} else {
		return localStorage.getItem(item);
	}
}
