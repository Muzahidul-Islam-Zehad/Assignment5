function getElementValueById(id){
    const value = document.getElementById(id).value;
    return value;
}

function getElementInnerTextById(id){
    const value = document.getElementById(id).innerText;
    return value;
}


function times(){
    let today = new Date();
    let year = today.getUTCFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let format = 'AM';
    if(hours>12)
    {
        hours = hours - 12;
        format = 'PM'
    }
    const times = 'Date: '+ date +'/'+month+'/'+year +'  Time: '+hours+':'+minutes+':'+seconds +' '+ format;
    return times;
}


