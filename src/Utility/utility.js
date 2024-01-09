const { format } = require('date-fns');

export function convertDateFormat(dateInput){
    //converting date to string
   const day = String(dateInput.getDate()).padStart(2,'0')
   const month = String(dateInput.getMonth()+1).padStart(2,'0')
   const year = dateInput.getFullYear()

   const formattedDate = `${day}-${month}-${year}`

   return formattedDate;
}


export function calculateTax(hotelPrice){
    const totalTax = (hotelPrice * 28)/100;
    return totalTax;
}


export function calculateTotal(hotelPrice){
    const totalPrice = hotelPrice + calculateTax(hotelPrice)
    return totalPrice;
}

export function calculateTotalWithCouponCode(hotelPrice){
    //say Rs. 180 + 9% of hotelPrice
    const couponValue = 9*hotelPrice/100 + 180;
    const totalPrice = hotelPrice + couponValue;
    return totalPrice
}


export function formatNumber(rating){
    //if rating is not given/empty, make it 0.0
    if(rating==="" || rating==="null" || isNaN(rating)){
        return "0.0"
    }
    if(Number(rating)>=0 && Number(rating)<10 && !rating.toString().includes('.')){
        return `${rating}.0`
    }
    if (rating.toString().includes('.')) {
        return rating.toString();
    }
}

export function formatDateTime(inputDate) {
    //converting string to date 
    console.log(666, inputDate, typeof(inputDate), inputDate.split('-'))
    const parts = inputDate.split('-');
    const formattedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);

    const dateFormat = 'EEE ddMMM yyyy';
    const timeFormat = 'hh:mm a';

    const formattedDateString = format(formattedDate, dateFormat);
    const formattedTimeString = format(formattedDate, timeFormat);

    return `${formattedDateString}${formattedTimeString}`;
}

export function formatCheckoutDateTime(inputDate) {
    //converting string to date 
    const parts = inputDate.split('-');
    const formattedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);

    const dateFormat = 'EEE ddMMM yyyy';
    const timeFormat = 'hh:mm a';

    const formattedDateString = format(formattedDate, dateFormat);
    const formattedTimeString = format(formattedDate, timeFormat);

    return `${formattedDateString}${formattedTimeString}`;
}

export function differenceBetweenDates(endDate, startDate){
    let  start_date, end_Date;
    if(startDate && endDate){
    const startDateParts = startDate.split("-")
    const endDateParts = endDate.split("-")
    
    start_date = new Date(startDateParts[2],startDateParts[1]-1, startDateParts[0])
    end_Date = new Date(endDateParts[2], endDateParts[1]-1, endDateParts[0])
    }
    console.log(8888, startDate, endDate, start_date, end_Date)
    const difference = end_Date - start_date //it will calculate the difference in milliseconds

    const days = difference / (1000*60*60*24);
    console.log(999, difference, days)
    return Math.abs(days)
}