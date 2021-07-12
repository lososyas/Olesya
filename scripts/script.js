const headerCityButton = document.querySelector ('.header_ _city-button');

headerCityButton.textContent =  localStorage.getItem('lomoda-location') || 'Ваш город?'

headerCityButton.addEventListener ('click', () => {
    const city = prompt('Укажите ваш город');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda - location', city);
    
})