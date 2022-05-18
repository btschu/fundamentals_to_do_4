// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.

function poorKenny() {
    var result = Math.floor(Math.random()*100)+1;
    if(result <= 10){
        console.log("Volcano");
    }
    else if(result <= 25){
        console.log("Tsunami");
    }
    else if(result <= 45){
        console.log("Earthquake");
    }
    else if(result <= 70){
        console.log("Blizzard");
    }
    else{
        console.log("Meteor strike");
    }
}

poorKenny()