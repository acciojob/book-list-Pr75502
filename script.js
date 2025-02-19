//your JS code here. If reqhttps://www.svgrepo.com/show/345221/three-dots.svguhttps://www.svgrepo.com/show/345221/three-dots.svgired.

let title=document.querySelector("#title")
let author=document.querySelector("#author")
let isbn=document.querySelector("#isbn")
let btn=document.querySelector("#submit")
let tbody=document.querySelector("#tbody")

btn.addEventListener("click", function(e){
	e.preventDefault()
 let tr=document.createElement("tr")
	let td1=document.createElement("td")
	td1.innerText=title.value
	let td2=document.createElement("td")
	td2.innerText=author.value
	let td3=document.createElement("td")
	td3.innerText=isbn.value
	let td4=document.createElement("td")
	let deleteBtn=document.createElement("button")
	deleteBtn.innerText="X";
	deleteBtn.className="delete"
	deleteBtn.addEventListener("click", function(){
		tr.remove()
	})
	td4.append(deleteBtn)
	tr.append(td1, td2, td3, td4)
	tbody.append(tr)
})

