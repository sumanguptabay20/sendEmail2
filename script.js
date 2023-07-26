// cookies.set("movieseat",{expires :2021-5-30});
// var mycookie = cookies.get("movieseat");
// var title = document.getElementById('cookie');
// if (mycookie){
//     title.classList.add("cookie")
// } else{
//     title.classList.remove("cookie")
// }                     

const container = document.querySelector('.movie-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');
const timeselect = document.getElementById('Time');
const myButton = document.getElementById('btn');
const popup = document.getElementById('popup');

// console.log(seats);
// populateUI();
let ticketprice = +movieselect.value;
// console.log(ticketprice);

// save selected movie and data
function setmoviedata(movieIndex, movieprice) {
    localStorage.setItem('selectedmovieIndex', movieIndex);
    localStorage.setItem('selectedmovieprice', movieprice);
}
setmoviedata();

// update total and count
function updateselectedcount() {
    const selectedseat = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedseat);
    const seatsIndex = [...selectedseat].map(function (seat) {
        return [...seats].indexOf(seat);
    });


    // console.log(seatsIndex);
    localStorage.setItem('selectedseat', JSON.stringify(seatsIndex));

    const selectedseatcount = selectedseat.length;
    // console.log(selectedseatcount);

    count.innerText = selectedseatcount;
    total.innerText = selectedseatcount * ticketprice;

    function populateUI() {
        const selectedseats = JSON.parse(localStorage.getItem('selectedseat'));
    }
    console.log('selectedseats');
}
// function enableButton() {
//     myButton.removeAttribute("disabled");
// }
// movie select
movieselect.addEventListener('change', (e) => {
    ticketprice = +e.target.value;
    // console.log(ticketprice);    
    e.target.selectedIndex, e.target.value;
    updateselectedcount();

});
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    }

    updateselectedcount();
    const a = Array.from(seats).some(div => div.classList.contains('selected'));
    myButton.disabled = !a

    timeselect.addEventListener('change', (e) => {
        updateselectedcount();

    });
});

myButton.addEventListener('click', (e) => {
    e.preventDefault();
    container.style.display = "none";
    document.getElementById('popup').style.display = "block";
}

);
function clearFields() {
    document.querySelector('.movie-container').value = '',
        document.querySelectorAll('.row .seat:not(.occupied)').value = '',
        document.getElementById('count').value = '',
        document.getElementById('total').value = '',
        document.getElementById('movie').value = '',
        document.getElementById('Time').value = '';
}
clearFields();
document.getElementById('bton').addEventListener('click', e => {
    movie - container.element.remove();
})

document.querySelector('.close').addEventListener('click', e => {
    //    location.reload()
    //     container.style.display ="block";
    //     document.getElementById('popup').style.display="none";
    location.href = './form.html';
});

