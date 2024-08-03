// Date and time update
function updateDateTime() {
    let d = new Date();
    $('#date').text(d.toLocaleDateString());
    let h = new Date();
    $('#heure').text(h.toLocaleTimeString());
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Chronometer logic
let heu = 0, min = 0, sec = 0, dsec = 0;
let timer;
let zero = 0;

function chrono() {
    $('#heu').text(heu);
    $('#min').text(min);
    $('#sec').text(sec);
    $('#dsec').text(dsec);
    dsec++;
    if (dsec == 10) {
        sec++;
        dsec = 0;
    }
    if (sec == 60) {
        min++;
        sec = 0;
    }
    if (min == 60) {
        heu++;
        min = 0;
    }
}

function play() {
    timer = setInterval(chrono, 100);
}

function pause() {
    clearInterval(timer);
}

function reset() {
    $('#heu, #min, #sec, #dsec').text(zero);
    heu = min = sec = dsec = zero;
    clearInterval(timer);
}

$('#pl').click(play);
$('#ps').click(pause);
$('#rs').click(reset);

// Toggle date and time section
$('#toggle-date').click(function() {
    $('#date-time-section').slideToggle(400);
});

// Toggle chronometer section
$('#toggle-chrono').click(function() {
    $('#chronometer-section').slideToggle(400);
});