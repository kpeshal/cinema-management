const sContainer = document.querySelector('.screen-seat-container');
const seats = document.querySelectorAll('.seat-row .th1-seat:not(.seat-booked');
const count = document.getElementById('count');
const total = document.getElementById('total');
const selectedMovie = document.getElementById('film');

populateUserInterface();

let tkPrice = +selectedMovie.value;

function setFilmData(filmIndex, filmTkPrice) {
    localStorage.setItem('selectedFilmIndex', filmIndex);
    localStorage.setItem('selectedFilmTicketPrice', filmTkPrice);
}

function updateSeatCount() {
    const chosenSeats = document.querySelectorAll('.seat-row .th1-seat.seat-chosen');

    const indexSeats = [...chosenSeats].map(function (seat) {
        return [...seats].indexOf(seat);
    });

    localStorage.setItem('chosenSeats', JSON.stringify(indexSeats));
    const chosenSeatsCount = chosenSeats.length;
    count.innerText = chosenSeatsCount;
    total.innerText = chosenSeatsCount * tkPrice;
}

function populateUserInterface() {
    const chosenSeats = JSON.parse(localStorage.getItem('chosenSeats'));

    if (chosenSeats != null && chosenSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (chosenSeats.indexOf(index) > -1) {
                seat.classList.add('seat-chosen');
            }
        });
    }
   
    const selectedFilmIndex = localStorage.getItem('selectedFilmIndex');

    if (selectedFilmIndex != null) {
        selectedMovie.selectedIndex = selectedFilmIndex;
    }


}
selectedMovie.addEventListener('change', (e) => {
    tkPrice = +e.target.value;
    setFilmData(e.target.selectedIndex, e.target.value);
    updateSeatCount();
});

sContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('th1-seat') && !e.target.classList.contains('seat-booked')){
        e.target.classList.toggle('seat-chosen');
    }
    updateSeatCount();
});

updateSeatCount();