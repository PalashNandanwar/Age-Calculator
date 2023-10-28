function CalculateAge() {
    var my_days = Number(document.querySelector("#Days").value)
    var my_Mon = Number(document.querySelector("#Months").value)
    var my_Year = Number(document.querySelector("#Year").value)

    var curr_year = new Date().getFullYear()
    var curr_mon = new Date().getMonth()

    var year = curr_year - my_Year;
    var months = (year*12 ) + curr_mon;
    var days = year*365 + curr_mon*30

    document.querySelector("#Year_Left").textContent = year
    document.querySelector("#Months_Left").textContent = months
    document.querySelector("#days_Left").textContent = days
}