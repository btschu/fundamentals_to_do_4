// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). Writing a function given a day and a starting IQ, return Bogdan's IQ on that specific day

function soaringIQ() {
    var iq = 101;
    var increment = .01;
    for (var i = 1; i <= 98; i++) {
        iq = iq + increment;
        increment = increment + .01
        console.log("Day " + i + ": IQ of " + iq);
    }
    console.log("Bogdan's IQ would be " + iq + " at the end of the bootcamp.");
}

soaringIQ()


