
const message = document.getElementById("bluffmess")

const bluffrec = [
                    {date:["macdonalds","the house","the crib","the hotel","movies","starlight"]},
                    {time:["after 8","once every week to set something up","when you tryna smash","call or text/right now"]},
                    {tone:["playful","pimpish","demanding","fatherly","stern"]}
                 ] 
                 

    function getRandom(max){

            return Math.floor(Math.random() * max); // make sure to return 
    }

    function randdate(recomendation){
            const dates = recomendation[0]
       return dates["date"][getRandom(recomendation[0]["date"].length)]
    };

    function randtone(recomendation){
       const tones = recomendation[2]
         return tones["tone"][getRandom(recomendation[2]["tone"].length)]
    }

    function randtime(recomendation){
         const times = recomendation[1]
         return times["time"][getRandom(times["time"].length)]
    }
    message.innerText = "We might take her out to " + randdate(bluffrec) + " and call at " + randtime(bluffrec) + " and talk with a "+ randtone(bluffrec)+" tone " 
    