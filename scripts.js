const panels = document.querySelectorAll('.panel')
const panelLive = document.querySelector('.live')
const panelSource = document.querySelector('.source')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
        panelLive.classList.add('active');
        panelSource.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
        panelLive.classList.remove('active');
        panelSource.classList.remove('active');
    })
}