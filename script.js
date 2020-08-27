replaceText(document.body) // we start at the body then loop through every single element

// this is a recursive function, we find for all the elements which has the word "coronavirus"
function replaceText(element) {
	// are there any child inside this element
	if (element.hasChildNodes()) {
		element.childNodes.forEach(replaceText); // we loop till we don't have more children
	} else if (element.nodeType === Text.TEXT_NODE) {
		if (element.textContent.match(/coronavirus/gi)) {
			const newElement = document.createElement('span');
			newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,'<span class="rainbow">$1</span>'); // we globally find for the word "coronavirus" and replace it with something alternate
			element.replaceWith(newElement);
		}
	}
}


