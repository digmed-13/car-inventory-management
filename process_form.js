const badges = [
    'badge1_0correct.jpeg', 'badge2_1correct.jpeg', 'badge3_2correct.jpeg'
];

let secondPage = document.querySelector('#second-page');
secondPage.style.display = 'none';

let form = document.querySelector('form');

let txtFields = [];
txtFields = form.querySelectorAll('.txt-fields');
console.log(txtFields);


function offerHint(e) {
    let target = e.target;
    console.log(target);
    let hints = [];
    switch (target.name) {
        case 'first':
            let span1 = document.querySelector('#one');
            hints.push(span1);
            let firstHint = document.createTextNode('Use only letters; start with capital letter');
            span1.appendChild(firstHint);
            break;
        case 'last':
            let span2 = document.querySelector('#two');
            hints.push(span2);
            let secondHint = document.createTextNode('Use only letters, spaces, and apostrophes; start with a capital letter');
            span2.appendChild(secondHint);
            break;
        case 'phone':
            let span3 = document.querySelector('#three');
            hints.push(span3);
            let thirdHint = document.createTextNode('Use only numbers and a dash; pattern: XXX XXX-XXXX');
            span3.appendChild(thirdHint);
            break;
        case 'email':
            let span4 = document.querySelector('#four');
            hints.push(span4);
            let fourthHint = document.createTextNode('Use only one "@" and at least 1 "."');
            span4.appendChild(fourthHint);
            break;
        case 'url':
            let span5 = document.querySelector('#five');
            hints.push(span5);
            let fifthHint = document.createTextNode('Use only one "~" and trailing "/"; begin with "https://"');
            span5.appendChild(fifthHint);
            break;
    }
}


for (let i = 0; i < txtFields.length; i++) {
    txtFields[i].addEventListener('focus', offerHint);
    txtFields[i].addEventListener('blur', validateData);
}

const input1 = document.querySelector('#first');
const input2 = document.querySelector('#last');
const input3 = document.querySelector('#phone');
const input4 = document.querySelector('#email');
const input5 = document.querySelector('#url');

const firstRE = /^[A-Z][a-z]+$/;
const lastRE = /^[A-Z][a-z\s']+$/;
const phoneRE = /^\d{3}\s\d{3}-\d{4}$/;
const emailRE = /^[\w.]+@\w+.\w{2,4}$/;
const urlRE = /^https:\/\/students.gaim.ucf.edu\/~[a-z]+\/$/;


function validateData(e) {
    let target = e.target;

    const firstValue = input1.value;
    const lastValue = input2.value;
    const phoneValue = input3.value;
    const emailValue = input4.value;
    const urlValue = input5.value;

    if (target == input1) {
        if (firstValue.match(firstRE)) {
            document.querySelector('#one').innerText = '✓ ';
        } else if (firstValue === '') {
            document.querySelector('#one').innerText = ('✗ Invalid. ');
        } else {
            document.querySelector('#one').innerText = '✗ Invalid. ';
        }
    }

    if (target == input2) {
        if (lastValue.match(lastRE)) {
            document.querySelector('#two').innerText = '✓ ';
        } else if (lastValue === '') {
            document.querySelector('#two').innerText = '✗ Invalid. ';
        } else {
            document.querySelector('#two').innerText = '✗ Invalid. ';
        }
    }

    if (target == input3) {
        if (phoneValue.match(phoneRE)) {
            document.querySelector('#three').innerText = '✓ ';
        } else if (phoneValue === '') {
            document.querySelector('#three').innerText = '✗ Invalid. ';
        } else {
            document.querySelector('#three').innerText = '✗ Invalid. ';
        }
    }
        
    if (target == input4) {
        if (emailValue.match(emailRE)) {
            document.querySelector('#four').innerText = '✓ ';
        } else if (emailValue === '') {
            document.querySelector('#four').innerText = '✗ Invalid. ';
        } else {
            document.querySelector('#four').innerText = '✗ Invalid. ';
        }
    }

    if (target == input5) {
        if (urlValue.match(urlRE)) {
            document.querySelector('#five').innerText = '✓ ';
        } else if (urlValue === '') {
            document.querySelector('#five').innerText = '✗ Invalid. ';
        } else {
            document.querySelector('#five').innerText = '✗ Invalid. ';
        }
    }
}


function submitData(e) {
    e.preventDefault();
    let correctAnswers = 0;

    if (document.querySelector('#sa').checked) {
        correctAnswers++;
    }
    if (document.querySelector('#li').checked) {
        correctAnswers++;
    }
    console.log(correctAnswers);
    
    let firstPage = document.querySelector('#first-page');
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';

    let outputName = input1.value + ' ' + input2.value;
    let outputPhone = input3.value;
    let outputEmail = input4.value;
    let outputUrl = input5.value;

    let firstOut = document.querySelector('#output-name').innerText = outputName;
    let secondOut = document.querySelector('#output-phone').innerText = outputPhone;
    let thirdOut = document.querySelector('#output-email').innerText = outputEmail;
    let fourthOut = document.querySelector('#output-url').innerText = outputUrl;

    let answers = document.querySelector('#answers').innerText = correctAnswers;

    if (correctAnswers === 0) {
        let badge = document.querySelector('#badge');
        let cap = document.querySelector('a');
        badge.src = 'badge1_0correct.JPEG';
        badge.alt = 'Image text: How did you manage that?'
        cap.href = 'c:\Users\Frank\OneDrive - University of Central Florida\Desktop\DIG-3716c_labs\assignment2\img\badge1_0correct.JPEG';
        cap.innerText = 'c:\Users\Frank\OneDrive - University of Central Florida\Desktop\DIG-3716c_labs\assignment2\img\badge1_0correct.JPEG';
    } else if (correctAnswers === 1) {
        let badge = document.querySelector('#badge');
        let cap = document.querySelector('a');
        badge.src = 'badge2_1correct.JPEG';
        badge.alt = 'Image text: You are average when it comes to geography. Better luck next time!'
        cap.href = 'c:\Users\Frank\OneDrive - University of Central Florida\Desktop\DIG-3716c_labs\assignment2\img\badge2_1correct.JPEG';
        cap.innerText = 'c:\Users\Frank\OneDrive - University of Central Florida\Desktop\DIG-3716c_labs\assignment2\img\badge2_1correct.JPEG';
    } else {
        let badge = document.querySelector('#badge');
        let cap = document.querySelector('a');
        badge.src = 'badge3_2correct.JPEG';
        badge.alt = "Image text: You're a pro at geography!"
        cap.href = 'c:\Users\Frank\OneDrive - University of Central Florida\Desktop\DIG-3716c_labs\assignment2\img\badge3_2correct.JPEG';
        cap.innerText = 'c:\Users\Frank\OneDrive - University of Central Florida\Desktop\DIG-3716c_labs\assignment2\img\badge3_2correct.JPEG';
    }
}


let button = document.querySelector('#submit').addEventListener('click', submitData);
