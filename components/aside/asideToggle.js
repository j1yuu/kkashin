export default function asideToggle() {
    document.getElementById('aside').classList.toggle("aside-active");
    document.querySelector('.aside-toggle').classList.toggle("toggle-active");
    document.querySelectorAll('.toggle-image').forEach((image) => {
        image.classList.toggle('toggle-image-active');
    });
};