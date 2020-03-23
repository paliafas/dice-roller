SetVH();

window.addEventListener('resize', SetVH);

function SetVH() {
    const windowInnerHeightVH = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(
        '--vh',
        `${windowInnerHeightVH}px`
    );
}
