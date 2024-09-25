
function showSection(section) {

    document.getElementById('donation').classList.add('hidden');
    document.getElementById('historySection').classList.add('hidden');

    document.getElementById(section).classList.remove('hidden');
}

document.getElementById('btnDonation').addEventListener('click',function(){
    this.classList.add('bg-primary');
    this.classList.add('text-white');
    document.getElementById('btnHistory').classList.remove('bg-primary');
    document.getElementById('btnHistory').classList.remove('text-white');
    showSection('donation');

});


document.getElementById('btnHistory').addEventListener('click',function(){
    this.classList.add('bg-primary');
    this.classList.add('text-white');
    document.getElementById('btnDonation').classList.remove('bg-primary');
    document.getElementById('btnDonation').classList.remove('tex-white');
    showSection('historySection');
});