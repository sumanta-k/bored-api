function getData() {

	fetch("https://apis.scrimba.com/bored/api/activity").
		then((response) => response.json()).
		then((data) => {
			console.log(data.activity);
			document.querySelector("#idea").textContent = data.activity;
			document.querySelector("#title").textContent = "HappyBot";
			document.body.classList.add("fun");
		});
}

const btn = document.querySelector("#get");
btn.addEventListener('click', getData);
