let input = document.getElementById("text");
            let temp = document.getElementById("value");
            let locEle = document.getElementById("locate");
            let disc = document.getElementById("weather-disc");
            let btnEle = document.getElementById("btn");
            const apikey = "8f4485f5f505ef4d2ad72e90b213a15f";
            btnEle.onclick = function(){
                if(input.value == "")
                alert("please enter some location");
                else{
                    loc = input.value
                    url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
                    fetch(url).then(res => res.json())
                    .then(data =>{
                    console.log(data)
                    const{name} = data
                    const{feels_like} =data.main
                    const{description} = data.weather[0]
                    temp.innerText=Math.floor(feels_like-273);
                    locEle.innerText= name;
                    disc.innerText = description
                     })
                     .catch(() =>{
                        alert("enter valid location")
                     })
                     input.value =" ";
                    }
            }