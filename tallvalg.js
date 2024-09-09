const btnPartall = document.querySelector("#btnPartall")
const btnOddetall = document.querySelector("#btnOddetall")
const divUtskrift = document.querySelector("#utskrift")

btnPartall.onclick = () => {
    divUtskrift.innerHTML = ""
    for(let i = 2; i <=100; i += 2){
        divUtskrift.innerHTML += `${i} `
    }
}

btnOddetall.onclick = () => {
    divUtskrift.innerHTML = ""
    for(let i = 1; i <=100; i += 2){
        divUtskrift.innerHTML += `${i} `
    }
}