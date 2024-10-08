// blog button
function homeToBlog(){

    window.location.assign('blog.html');
    document.getElementById('my-blog-Balance').innerText = getElementInnerTextById('my-Balance');
}



// NOAKHALI DONATION SECTION JS
document.getElementById('noakhali-donate-button').addEventListener('click', function (event) {
    event.preventDefault();
    let donationAmount = getElementValueById('donation-amount-noakhali');
    let totalDonation = getElementInnerTextById('noakhali-total-donation');
    let myCurrentBalance = getElementInnerTextById('my-Balance');

    if (isNaN(donationAmount) === true) {
        alert('Invalid Amount');
        document.getElementById('donation-amount-noakhali').value = '';
        return;
    }

    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);

    if (donationAmount < 0) {
        alert('Invalid Amount');
        document.getElementById('donation-amount-noakhali').value = '';
        return;
    }
    if (donationAmount > myCurrentBalance) {
        alert('Insuficient Balance');
        document.getElementById('donation-amount-noakhali').value = '';
        return;
    }

    document.getElementById('noakhali-total-donation').innerText = donationAmount + totalDonation;

    document.getElementById('my-Balance').innerText = myCurrentBalance - donationAmount;

    document.getElementById('donation-amount-noakhali').value = '';



    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    h2.innerText = donationAmount + " Taka Donated For Flood Relief in Noakhali, Bangladesh";
    p.innerText =`Date : ${new Date().toString()}`;

    div.appendChild(h2);
    div.appendChild(p);

    h2.style.fontWeight = 'bold';
    h2.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';
    document.getElementById('donation-history').appendChild(div);

    //show modal
    document.getElementById('my_modal').showModal();
})


// feni donation section js
document.getElementById('feni-donation-button').addEventListener('click', function (event) {
    event.preventDefault();
    let donationAmount = getElementValueById('donation-amount-feni');
    let totalDonation = getElementInnerTextById('feni-total-donation');
    let myCurrentBalance = getElementInnerTextById('my-Balance');


    if (isNaN(donationAmount)) {
        alert('Invalid Amount');
        document.getElementById('donation-amount-feni').value = '';
        return;
    }

    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);

    
    if (donationAmount < 0) {
        alert('Invalid Amount');
        document.getElementById('donation-amount-feni').value = '';
        return;
    }
    if (donationAmount > myCurrentBalance) {
        alert('Insuficient Balance');
        document.getElementById('donation-amount-feni').value = '';
        return;
    }

    document.getElementById('feni-total-donation').innerText = donationAmount + totalDonation;

    document.getElementById('my-Balance').innerText = myCurrentBalance - donationAmount;

    document.getElementById('donation-amount-feni').value = '';



    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    h2.innerText = donationAmount + " Taka Donated For Flood Relief in Feni, Bangladesh";
    p.innerText =`Date : ${new Date().toString()}`;

    div.appendChild(h2);
    div.appendChild(p);

    h2.style.fontWeight = 'bold';
    h2.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';

    document.getElementById('donation-history').appendChild(div);

    //show modal
    document.getElementById('my_modal').showModal();
})


// quota donation section js
document.getElementById('quota-donation-button').addEventListener('click', function (event) {
    event.preventDefault();
    let donationAmount = getElementValueById('donation-amount-quota');
    let totalDonation = getElementInnerTextById('quota-total-donation');
    let myCurrentBalance = getElementInnerTextById('my-Balance');

    if (isNaN(donationAmount)) {
        alert('Invalid Amount');
        document.getElementById('donation-amount-quota').value = '';
        return;
    }

    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);

    if (donationAmount < 0) {
        alert('Invalid Amount');
        document.getElementById('donation-amount-quota').value = '';
        return;
    }
    if (donationAmount > myCurrentBalance) {
        alert('Insuficient Balance');
        document.getElementById('donation-amount-quota').value = '';
        return;
    }

    document.getElementById('quota-total-donation').innerText = donationAmount + totalDonation;

    document.getElementById('my-Balance').innerText = myCurrentBalance - donationAmount;

    document.getElementById('donation-amount-quota').value = '';


    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    h2.innerText = donationAmount + " Taka Donated For Aid for Quota Movement, Bangladesh";
    p.innerText =`Date : ${new Date().toString()}`;

    div.appendChild(h2);
    div.appendChild(p);

    h2.style.fontWeight = 'bold';
    h2.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';

    document.getElementById('donation-history').appendChild(div);

    //show modal
    document.getElementById('my_modal').showModal();
})



// donation button
document.getElementById('donation').addEventListener('click', function(){

    document.getElementById('donation').classList.remove('bg-white','border','border-[#1111114D]');
    document.getElementById('donation').classList.add('bg-lime-300', 'hover:bg-lime-200',);


    document.getElementById('history').classList.remove('border-none', 'bg-lime-300', 'hover:bg-lime-200');
    document.getElementById('history').classList.add('bg-white');

    document.getElementById('donation-history').classList.add('hidden');
    document.getElementById('donation-page').classList.remove('hidden');
})



// history button
document.getElementById('history').addEventListener('click', function () {

    document.getElementById('donation').classList.remove('bg-lime-300', 'hover:bg-lime-200');
    document.getElementById('donation').classList.add('bg-white', 'hover:bg-gray-200', 'border', 'border-[#1111114D]');


    document.getElementById('history').classList.remove('bg-white');
    document.getElementById('history').classList.add('border-none', 'bg-lime-300', 'hover:bg-lime-200');

    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('donation-history').classList.remove('hidden');
})