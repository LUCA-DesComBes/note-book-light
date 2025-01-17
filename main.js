const btnPlus = document.getElementById("divPlus");
const mainScroll = document.querySelector("main");
const articleNote = document.getElementById("articleNote");
const allNotes = document.getElementById("allNotes");

function createElement(tag, attributes = {}, textContent = "") {
	const element = document.createElement(tag);
	for (const key in attributes) {
		if (key === "className") element.className = attributes[key];
		else element.setAttribute(key, attributes[key]);
	}
	if (textContent) element.textContent = textContent;
	return element;
}

function truc() {
	articleNote.style.display = "none";
	allNotes.style.display = "none";

	const articleNav = createElement("article", { className: "artNav" });
	mainScroll.appendChild(articleNav);

	const sectNav = createElement("section", { className: "sectNav" });
	articleNav.appendChild(sectNav);

	const btnBack = createElement(
		"button",
		{ className: "btnBack", id: "btnBack" },
		"Go Back"
	);

	btnBack.addEventListener("click", () => {
		btnPlus.style.display = "block";
		articleNav.remove();
		articleNote.style.display = "block";
		allNotes.style.display = "block";
	});

	sectNav.appendChild(btnBack);

	const imgArrow = createElement("img", {
		src: "./img/arrow-left.svg",
		alt: "arrow-left",
	});
	btnBack.appendChild(imgArrow);

	const divDel = createElement("div", { className: "divDel" });
	sectNav.appendChild(divDel);

	const imgDel = createElement("img", {
		src: "./img/Delete.svg",
		alt: "Delete",
	});

	const imgArchive = createElement("img", {
		src: "./img/Archive-note.svg",
		alt: "Archive-note",
	});

	const btnCancel = createElement("button", { className: "cancel" }, "Cancel");

	const btnSaveNote = createElement(
		"button",
		{ className: "saveNote" },
		"Save Note"
	);

	divDel.append(imgDel, imgArchive, btnCancel, btnSaveNote);

	articleNav.appendChild(createElement("hr"));

	articleNav.appendChild(
		createElement("h2", {}, "React Performance Optimization")
	);

	const sectAttr = createElement("section", { className: "sectAttr" });
	articleNav.appendChild(sectAttr);

	const divAttr = createElement("div", { className: "divAttr" });
	sectAttr.appendChild(divAttr);

	const attr = createElement("div", { className: "attr" });
	divAttr.appendChild(attr);

	const imgTag = createElement("img", {
		src: "./img/Tag-note.svg",
		alt: "Tag-note",
	});

	const tagsAttr = createElement("p", { className: "tagsAttr" }, "Tags");

	const attrJob = createElement("p", { className: "attrJob" }, "Dev, React");
	attr.append(imgTag, tagsAttr, attrJob);

	const divAttribut = createElement("div", { className: "divAttribut" });
	sectAttr.appendChild(divAttribut);

	const attrTwo = createElement("div", { className: "attr" });
	divAttribut.appendChild(attrTwo);

	const imgClock = createElement("img", {
		src: "./img/Circle-clock.svg",
		alt: "Circle-clock",
	});

	const tagsAttrTwo = createElement(
		"p",
		{ className: "tagsAttr" },
		"Last edited"
	);

	const attrDate = createElement("p", { className: "attrDate" }, "29 Oct 2024");

	attrTwo.append(imgClock, tagsAttrTwo, attrDate);

	articleNav.appendChild(createElement("hr"));

	const sectNote = createElement("section", { className: "sectNote" });
	articleNav.appendChild(sectNote);

	const textareaNote = createElement("textarea");
	sectNote.appendChild(textareaNote);
}

btnPlus.addEventListener("click", () => {
	btnPlus.style.display = "none";
	truc();
});
