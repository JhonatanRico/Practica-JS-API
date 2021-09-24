function Leer() {
    const city = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='5382cfc75555d2ca9727c4fdda358616';
    const api_url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    buscar1(api_url);
}

function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);

            console.log(resultado.main)

            document.getElementById("lista").innerHTML=`<h1> Temp: ${resultado.main.temp}</h1>
                                                        <h2> Temp Minima: ${resultado.main.temp_min}</h2>
                                                        <h3> Temp Maxima: ${resultado.main.temp_max}</h3>`;
           
      });


}

