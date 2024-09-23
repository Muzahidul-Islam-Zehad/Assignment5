

// NOAKHALI DONATION SECTION JS
document.getElementById('noakhali-donate-button').addEventListener('click', function (event) {
    event.preventDefault();
    let donationAmount = getElementValueById('donation-amount-noakhali');
    let totalDonation = getElementInnerTextById('noakhali-total-donation');
    let myCurrentBalance = getElementInnerTextById('my-Balance');

    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);

    if (isNaN(donationAmount)) {
        alert('Input valid Number');
        document.getElementById('donation-amount-noakhali').value = '';
        return;
    }
    if (donationAmount < 0) {
        alert('Donation amount cannot be negative number');
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
    p.innerText = times();

    div.appendChild(h2);
    div.appendChild(p);

    h2.style.fontWeight = 'bold';
    h2.style.marginBottom ='12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';
    document.getElementById('donation-history').appendChild(div);

    alert('Donation successfull');
})


// feni donation section js
document.getElementById('feni-donation-button').addEventListener('click', function (event) {
    event.preventDefault();
    let donationAmount = getElementValueById('donation-amount-feni');
    let totalDonation = getElementInnerTextById('feni-total-donation');
    let myCurrentBalance = getElementInnerTextById('my-Balance');

    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);

    if (isNaN(donationAmount)) {
        alert('Input valid Number');
        document.getElementById('donation-amount-feni').value = '';
        return;
    }
    if (donationAmount < 0) {
        alert('Donation amount cannot be negative number');
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
    p.innerText = times();

    div.appendChild(h2);
    div.appendChild(p);

    h2.style.fontWeight = 'bold';
    h2.style.marginBottom ='12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';

    document.getElementById('donation-history').appendChild(div);
    alert('Donation successfull');
})


// quota donation section js
document.getElementById('quota-donation-button').addEventListener('click', function (event) {
    event.preventDefault();
    let donationAmount = getElementValueById('donation-amount-quota');
    let totalDonation = getElementInnerTextById('quota-total-donation');
    let myCurrentBalance = getElementInnerTextById('my-Balance');

    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);

    if (isNaN(donationAmount)) {
        alert('Input valid Number');
        document.getElementById('donation-amount-quota').value = '';
        return;
    }
    if (donationAmount < 0) {
        alert('Donation amount cannot be negative number');
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
    p.innerText = times();

    div.appendChild(h2);
    div.appendChild(p);

    h2.style.fontWeight = 'bold';
    h2.style.marginBottom ='12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';

    document.getElementById('donation-history').appendChild(div);
    alert('Donation successfull');
})



// donation button
document.getElementById('donation').addEventListener('click', function () {
    document.getElementById('donation-history').classList.add('hidden');
    document.getElementById('donation-page').classList.remove('hidden');
})



// history button
document.getElementById('history').addEventListener('click', function () {

    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('donation-history').classList.remove('hidden');
})