// counter application

let counter = 0;

counter = Number(counter)
document.getElementById('inc').onclick = () =>{
    counter = counter + 1;
    document.getElementById('counter').textContent = counter;
}

document.getElementById('dcr').onclick = () =>{
    counter = counter - 1;
    document.getElementById('counter').textContent = counter;
}

document.getElementById('reset').onclick = () =>{
    counter = 0;
    document.getElementById('counter').textContent = 0;
}

