
// Store complaints in local storage
const complaintForm = document.getElementById('complaint-form');
const complaintsList = document.getElementById('complaints-list');
const complaintsTable = document.getElementById('complaints-table');

// Load existing complaints when the admin page is loaded
document.addEventListener('DOMContentLoaded', () => {
    const savedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    savedComplaints.forEach((complaint) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${complaint.name}</td>
            <td>${complaint.email}</td>
            <td>${complaint.phone}</td>
            <td>${complaint.address}</td>
            <td>${complaint.complaint}</td>
        `;
        complaintsTable.appendChild(tr);
    });
});

// Handle complaint form submission on the home page
complaintForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const newComplaint = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        complaint: document.getElementById('complaint').value
    };

    if (newComplaint.name && newComplaint.email && newComplaint.phone && newComplaint.address && newComplaint.complaint) {
        let savedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
        savedComplaints.push(newComplaint);
        localStorage.setItem('complaints', JSON.stringify(savedComplaints));
        alert('Complaint submitted successfully!');
        complaintForm.reset(); // Reset form fields
    } else {
        alert('All fields are required!');
    }
});