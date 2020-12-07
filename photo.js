console.log('ore bhai');

let file_names = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'];

let imgs = document.getElementsByTagName('img');

for (imgs_ele of imgs) {
	let r = Math.floor(Math.random() * file_names.length);
	let file = file_names[r];
	let url = chrome.extension.getURL(file);
	imgs_ele.src = url;
	console.log('working');
}
