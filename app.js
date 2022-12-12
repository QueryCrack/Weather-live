var btnTempTranslate = document.querySelector("#btnTemp")
var btnFaraTranslate = document.querySelector("#btnFara")
var inputText = document.querySelector("#txt-area")
var outputText = document.querySelector("#output")



var serverURl = "http://api.weatherapi.com/v1/current.json?key=21f2acfd5cb34f509b2103710221212"
// https.get(url,(res) => {
//   let data ="";
//   res.on("data",(chunk) => {
//       // Data is being received in chunks, we add it to the data variable to save it
//       data+=chunk;
//   })
//   res.on("end",() => {
//     // all data has been received, now we can parse it and are done
//     const parsedData = JSON.parse(data);
//     console.log(parsedData);
//   });
// });



outputText.innerHTML = "value: "
function getUrl(input){
    return serverURl + "&" + "q="+input+"&aqi=no"
}







btnTempTranslate.addEventListener("click", function clickHandler(){
    console.log("clicked")
    console.log(inputText.value)
    


    fetch(getUrl(inputText.value))
    .then(response => response.json())
    .then(json=>{
        var temperature = json.current.temp_c
        outputText.innerHTML = "value: "+temperature + " C"
        console.log(inputText.value + " " + json.current.temp_c + " C")
    })

    
})

btnFaraTranslate.addEventListener("click", function clickFaraHandler(){
    console.log("fara Clicked")
    outputText.innerHTML = inputText.value + " f"

    fetch(getUrl(inputText.value))
    .then(response => response.json())
    .then(json=>{
        var farahneit = json.current.temp_f
        outputText.innerHTML = "value: "+ farahneit +"f"
        console.log(inputText.value +" " + json.current.temp_f + " f")
    })
})