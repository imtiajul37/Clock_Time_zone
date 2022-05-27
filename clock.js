function timezone(zone){
    if(zone == 'Dhaka'){
            let date = new Date();
            let hour = date.getUTCHours() + 6;  
            let minute = date.getMinutes();
            let second = date.getSeconds();
    console.log(hour + ':' + minute + ':' + second)
    }else if(zone == 'New York'){
            let date = new Date();
            let hour = date.getUTCHours() - 4;  
            console.log(hour)
            let minute = date.getMinutes();
            let second = date.getSeconds();
            console.log(hour + ':' + minute + ':' + second)
    }else{
        console.log('Please enter timezone..')
    }
    
}
timezone('New York')
