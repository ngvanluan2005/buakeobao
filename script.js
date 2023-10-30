const thongbao = alert('chao mung')
const luachon = document.querySelector('.luachon')
const gridBtn = [...document.querySelectorAll('.dapan')]
gridBtn.map(btn => {
    btn.addEventListener('click', event => {
        const nguoichoira = event.target.dataset.type
        event.target.classList.add('clicked')
        // console.log(luonWin(nguoichoira));
        luachon.innerHTML = `
        <span style="font-size: .75rem">Ban da chon !</span>
        ${aiTurn(nguoichoira)}
        -----
        `
        setTimeout(() => {
            luachon.innerHTML = `
                ${aiTurn(nguoichoira)}
                <div class="tbao">
                    <span style="font-size: .75rem; padding: 4px 0;">Ban thua !</span>
                    <button onclick="location.reload()">Choi Lai</button>
                </div>
                ${luonWin(nguoichoira)}
            `
            localStorage.setItem('ai', parseInt(localStorage.getItem('ai')) + 1)
            updatePoint()
        }, 2000)
    })
})
const aiTurn = (turn) => {
    return `
        <img
            data-type="${turn}"
            class="dapan ${turn}"
            src="./images/${turn}.png"
            alt="${turn}">
    `
}

const luonWin = peo => {
    const logic = peo == 'bua' ? 'bao'
        : peo == 'keo' ? 'bua'
            : peo == 'bao' ? 'keo' : 1
    return aiTurn(logic)
}
window.addEventListener('load', () => {
    if (localStorage.getItem("ai") === null && localStorage.getItem("peo") === null) {
        localStorage.setItem('ai', 0)
        localStorage.setItem('peo', 0)
    }
    updatePoint()
})
const updatePoint = () => {
    document.getElementById('points-may').innerHTML = localStorage.getItem('ai')
    document.getElementById('points-nguoi').innerHTML = localStorage.getItem('peo')
}