function indexOfIgnoreCase(s1, s2) {
	let s1lower = s1.toLowerCase();
	let s2lower = s2.toLowerCase();
	return s1lower.indexOf(s2lower)
			}
	
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
