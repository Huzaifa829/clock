var hours = document.getElementById('hours')
var minutes = document.getElementById('mins')
var seconds = document.getElementById('seconds')
setInterval(() => {
    date = new Date();
    hourtime = date.getHours();
    mintime = date.getMinutes();
    sectime = date.getSeconds();

    console.log('sectime',sectime)
    hrotation = 30 * hourtime + mintime / 2;

    console.log('hrotation', hrotation)
    mrotation = 6 * mintime;
    srotation = 6 * sectime;
    console.log('srotation', srotation)


    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
    console.log(hours)

  
}, 1000);