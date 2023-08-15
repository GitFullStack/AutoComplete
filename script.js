const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// function search(str) {
// 	let results = [];
	
// 	// TODO

// 	return results;
// }

function searchHandler(e) {
	// TODO
	const filteredData = fruit.filter((val) => val.toLowerCase().includes(input.value))
    showSuggestions(filteredData, input.value);
		
}

function showSuggestions(arr, inputVal) {
    loadData(arr);
}

function useSuggestion(e) {
	// TODO
	let val = e.target.innerHTML;
	input.value = "";
	input.value = e.target.innerHTML

    suggestions.innerHTML = "";
}
function loadData (dataArr){
	newData = []
	newData = dataArr
	suggestions.innerHTML = "";
	let innerEl = "";
	newData.forEach((val) => {
		innerEl += `<li>${val}</li>`
	})
	suggestions.innerHTML = innerEl;
	
}
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);