function Mneme(type, text) {
	if (typeof text !== "string" || typeof type !== "string")
		throw new Error("Uknown Argument Type");
    if(text.length < 1) throw new Error("Empty Text Argument")
    if(!(text === "encode" || type === "decode")) throw new Error("Unknown Mneme Type");
	if (type === "encode") {
		var encodedlist = morse.encode(
			text
				.toLocaleLowerCase()
				.replace(/ç/g, "c")
				.replace(/ğ/g, "g")
				.replace(/ö/g, "o")
				.replace(/ş/g, "s")
				.replace(/ı/g, "i")
				.replace(/ü/g, "u")
				.split(" ")
		);

		let newStr = "";

		encodedlist.forEach((encoded) => {
			let type = ".";
			let length = 0;
			let tChange = { ".": "-", "-": "." };
			for (let i = 0; i < encoded.length; i++) {
				let char = encoded[i];
				if (char == " ") {
					type = ".";
					newStr += "" + length;
					length = 0;
					newStr += "0";
					continue;
				}
				if (type == char) length++;
				else {
					newStr += "" + length;
					type = tChange[type];
					length = 1;
				}
			}
			newStr += "" + length;
			newStr += " ";
		});
		return newStr.trim().trimEnd();
	} else if (type === "decode") {
		let textlist = text.split(" ");
		let arr = [];
		textlist.forEach((texty) => {
			let before = 0;
			let type = ".";
			let morsed = "";
			let last = 0;
			let tChange = { ".": "-", "-": "." };
			for (let i = 0; texty.length > i; i++) {
				let char = texty[i];
				let numb = Number(char);
				if (numb == 0) {
					if (last == 0) {
						type = "-";
						last = numb;
					} else {
						morsed += " ";
						type = ".";
						last = numb;
					}
					continue;
				}
				for (let k = 0; k < numb; k++) {
					morsed += "" + type;
				}
				type = tChange[type];
				last = numb;
			}
			arr.push(morse.decode(morsed));
		});
		return arr.join(" ");
	}
}
