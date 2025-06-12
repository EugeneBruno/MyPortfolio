window.onload = function () {
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('profiles').classList.remove('hidden');
  }, 2500); // intro logo duration
};

function enterSite() {
  document.getElementById('profiles').style.display = 'none';
  document.getElementById('main').classList.remove('hidden');
}
