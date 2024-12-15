document.getElementById('servicesForm').addEventListener('change', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let total = 0;
    checkboxes.forEach(function (checkbox) {
        total += parseInt(checkbox.value);
    });
    document.getElementById('totalAmount').textContent = total;
});
