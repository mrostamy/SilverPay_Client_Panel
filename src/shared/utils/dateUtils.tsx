
function createDateRange(): Date[] {

    let currentYear = new Date().getFullYear();
    const dates: Date[] = [];



    for(let i=0;i<730;i++){

        let tempDate = new Date();
        tempDate.setDate(tempDate.getDate()-729);
        tempDate.setDate(tempDate.getDate()+i);
        dates.push(tempDate);
        console.log(tempDate);
    }


    return dates;




}

export default createDateRange;