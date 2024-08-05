function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const result = document.getElementById('result');

    if (!day || day < 1 || day > 31 || !month || month < 1 || month > 12 || !year || year < 1920 || year > 2100) {
        result.textContent = 'Please enter a valid date, month, and year';
        result.style.color = 'red'; // Error color
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    const diffTime = today - birthDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    let ageText = '';

    if (diffYears >= 1) {
        let age = diffYears;
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        ageText = `Your age is ${age} years.`;
        result.style.color = 'black'; // Success color
    } else if (diffMonths >= 1) {
        ageText = `Your age is ${diffMonths} months.`;
        result.style.color = 'black'; // Success color
    } else if (diffWeeks >= 1) {
        ageText = `Your age is ${diffWeeks} weeks.`;
        result.style.color = 'black'; // Success color
    } else {
        ageText = `Your age is ${diffDays} days.`;
        result.style.color = 'black'; // Success color
    }

    result.textContent = ageText;
}
