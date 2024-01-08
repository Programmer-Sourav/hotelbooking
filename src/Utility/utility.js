export function convertDateFormat(dateInput){
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