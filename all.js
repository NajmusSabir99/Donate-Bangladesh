if (window.location.pathname.includes("home.html")) {
    document.getElementById('btn-blog').classList.remove('hidden');
    document.getElementById('btn-home').classList.add('hidden');
} else if (window.location.pathname.includes("blog.html")) {
    document.getElementById('btn-home').classList.remove('hidden');
    document.getElementById('btn-blog').classList.add('hidden');
}

let totalBalance = parseInt(document.getElementById('orginial-balance').innerText);
let totalNoakhali = 0;
let totalFeni = 0;
let totalQuota = 0;

document.getElementById('btn-donation').addEventListener('click', function() {
    document.getElementById('historySection').classList.add('hidden');
    document.getElementById('donationSection').classList.remove('hidden');
    toggleActive(this, 'btn-history');
});

document.getElementById('btn-history').addEventListener('click', function() {
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('historySection').classList.remove('hidden');
    toggleActive(this, 'btn-donation');
});

function toggleActive(activeBtn, inactiveBtnId) {
    activeBtn.classList.add('btn-dark');
    activeBtn.classList.remove('btn-info');
    const inactiveBtn = document.getElementById(inactiveBtnId);
    inactiveBtn.classList.remove('btn-dark');
    inactiveBtn.classList.add('btn-info');
}

// Noakhali Donation Logic
document.getElementById('btn-donate-noakhali').addEventListener('click', function() {
    const inputNoakhali = parseFloat(document.getElementById('input-noakhali').value) || 0;

    if (inputNoakhali > 0 && inputNoakhali <= totalBalance) {
        totalNoakhali += inputNoakhali;
        document.getElementById('balance-noakhali').innerText = totalNoakhali + " BDT";
        totalBalance -= inputNoakhali;
        document.getElementById('orginial-balance').innerText = totalBalance + " BDT";
        document.getElementById('input-noakhali').value = '';
        addDonationHistory(inputNoakhali, 'Flood at Noakhali, Bangladesh');
    } else {
        alert("Please enter a valid donation amount.");
    }
});

// Feni Donation Logic
document.getElementById('btn-donate-feni').addEventListener('click', function() {
    const inputFeni = parseFloat(document.getElementById('input-feni').value) || 0;

    if (inputFeni > 0 && inputFeni <= totalBalance) {
        totalFeni += inputFeni;
        document.getElementById('balance-feni').innerText = totalFeni + " BDT";
        totalBalance -= inputFeni;
        document.getElementById('orginial-balance').innerText = totalBalance + " BDT"; 
        document.getElementById('input-feni').value = '';
        
        addDonationHistory(inputFeni, 'Flood Relief in Feni, Bangladesh');
    } else {
        alert("Please enter a valid donation amount.");
    }
});

// Quota Donation Logic
document.getElementById('btn-donate-quota').addEventListener('click', function() {
    const inputQuota = parseFloat(document.getElementById('input-quota').value) || 0;

    if (inputQuota > 0 && inputQuota <= totalBalance) {
        totalQuota += inputQuota;
        document.getElementById('balance-quota').innerText = totalQuota + " BDT";
        totalBalance -= inputQuota;
        document.getElementById('orginial-balance').innerText = totalBalance + " BDT"; 
        document.getElementById('input-quota').value = '';
       
        addDonationHistory(inputQuota, 'Aid for Injured in the Quota Movement');
    } else {
        alert("Please enter a valid donation amount.");
    }
});
const historySection = document.getElementById('historySection');

function addDonationHistory(amount, cause) {
    const currentDate = new Date().toLocaleString("en-BD", { timeZone: "Asia/Dhaka" });
    const donationEntry = `
        <div class="bg-white border border-gray-200 p-5 rounded-lg mb-4">
            <p class="font-semibold">${amount} BDT is donated for ${cause}</p>
            <span class="text-sm text-gray-500">Date: ${currentDate}</span>
        </div>
    `;
    historySection.insertAdjacentHTML('afterbegin', donationEntry);
}
