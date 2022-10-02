function onTimeForTheExam(input) {
    let hExam = Number(input[0]);
    let mExam = Number(input[1]);
    let hArrive = Number(input[2]);
    let mArrive = Number(input[3]);

    let timeExam = hExam * 60 + mExam;
    let timeArrive = hArrive * 60 + mArrive;

    if(timeExam >= timeArrive && timeExam - timeArrive <= 30) {
        console.log("On time");
        let diff = Math.abs(timeExam - timeArrive);
        let min = diff % 60
            if(min < 10) {
                console.log(`${min} minutes before the start`)
                
    }       else if(min >=10 && min <= 30){
        console.log(`${min} minutes before the start`)

    }
    
  }  else if(timeExam < timeArrive) {
        console.log("Late");
        let diff = Math.abs(timeExam - timeArrive);
        let min = diff % 60
            if(diff < 60) {
                console.log(`${min} minutes after the start`)
            }else {
                let h = Math.floor(diff / 60);
                if(min < 10 && h >= 1){
                    console.log(`${h}:0${min} hours after the start`)
                }else {
                    console.log(`${h}:${min} hours after the start`)
                }
            }  
    }else if(timeExam > timeArrive && timeExam - timeArrive > 30) {
        console.log("Early");
        let diff = Math.abs(timeExam - timeArrive);
        let min = diff % 60
            if(diff < 60) {
                console.log(`${min} minutes before the start`)
            }else {
                let h = Math.floor(diff / 60);
                if(min < 10 && h >= 1){
                    console.log(`${h}:0${min} hours before the start`)
                }else {
                    console.log(`${h}:${min} hours before the start`)
                }
            }  
    }
}  

onTimeForTheExam (["14",
"00",
"13",
"55"])






