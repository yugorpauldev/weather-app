function filterDate(){
    const today = new Date();
    const dayofMonth = today.getDate();
    const startDay = today.getDay();
    const startofWeek = dayofMonth - startDay
    const endofWeek = startofWeek + 7
    console.log(startofWeek)
    console.log(endofWeek)
}



 