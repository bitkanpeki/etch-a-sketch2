const container = document.querySelector('.container')

let div

for(let i = 0; i < 16*16; i++) {
    div = document.createElement('div')
    div.classList.add('cell')
    container.appendChild(div)
}

const cells = document.querySelectorAll('.cell')

cells.forEach(cell => cell.addEventListener('mouseenter', () => {
    cell.style.backgroundColor = 'red'
}))