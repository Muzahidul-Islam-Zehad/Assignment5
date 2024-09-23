

// NOAKHALI DONATION SECTION JS
document.getElementById('noakhali-donate-button').addEventListener('click', function(event){
    event.preventDefault();
    let donationAmount = getElementValueById('donation-amount-noakhali');
    let totalDonation = getElementInnerTextById('noakhali-total-donation');
    let myCurrentBalance = getElementInnerTextById('my-Balance');

    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);

    if(isNaN(donationAmount))
    {
        alert('Input valid Number');
        document.getElementById('donation-amount-noakhali').value = '';
        return;
    }
    if(donationAmount<0){
        alert('Donation amount cannot be negative number');
        document.getElementById('donation-amount-noakhali').value = '';
        return;
    }
    if(donationAmount>myCurrentBalance)
    {
        alert('Insuficient Balance');
        document.getElementById('donation-amount-noakhali').value = '';
        return;
    }

    document.getElementById('noakhali-total-donation').innerText = donationAmount + totalDonation;

    document.getElementById('my-Balance').innerText = myCurrentBalance - donationAmount;

    document.getElementById('donation-amount-noakhali').value = '';
    alert('Donation successfull');
})


// feni donation section js
document.getElementById('feni-donation-button').addEventListener('click', function(event){
    event.preventDefault();
    let donationAmount = getElementValueById('donation-amount-feni');
    let totalDonation = getElementInnerTextById('feni-total-donation');
    let myCurrentBalance = getElementInnerTextById('my-Balance');

    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);

    if(isNaN(donationAmount))
    {
        alert('Input valid Number');
        document.getElementById('donation-amount-feni').value = '';
        return;
    }
    if(donationAmount<0){
        alert('Donation amount cannot be negative number');
        document.getElementById('donation-amount-feni').value = '';
        return;
    }
    if(donationAmount>myCurrentBalance)
    {
        alert('Insuficient Balance');
        document.getElementById('donation-amount-feni').value = '';
        return;
    }

    document.getElementById('feni-total-donation').innerText = donationAmount + totalDonation;

    document.getElementById('my-Balance').innerText = myCurrentBalance - donationAmount;

    document.getElementById('donation-amount-feni').value = '';
    alert('Donation successfull');
})


// quota donation section js
document.getElementById('quota-donation-button').addEventListener('click', function(event){
    event.preventDefault();
    let donationAmount = getElementValueById('donation-amount-quota');
    let totalDonation = getElementInnerTextById('quota-total-donation');
    let myCurrentBalance = getElementInnerTextById('my-Balance');

    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);

    if(isNaN(donationAmount))
    {
        alert('Input valid Number');
        document.getElementById('donation-amount-quota').value = '';
        return;
    }
    if(donationAmount<0){
        alert('Donation amount cannot be negative number');
        document.getElementById('donation-amount-quota').value = '';
        return;
    }
    if(donationAmount>myCurrentBalance)
    {
        alert('Insuficient Balance');
        document.getElementById('donation-amount-quota').value = '';
        return;
    }

    document.getElementById('quota-total-donation').innerText = donationAmount + totalDonation;

    document.getElementById('my-Balance').innerText = myCurrentBalance - donationAmount;

    document.getElementById('donation-amount-quota').value = '';
    alert('Donation successfull');
})