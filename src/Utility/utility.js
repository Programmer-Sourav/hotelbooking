export function convertDateFormat(dateInput){
   const day = String(dateInput.getDate()).padStart(2,'0')
   const month = String(dateInput.getMonth()+1).padStart(2,'0')
   const year = dateInput.getFullYear()

   const formattedDate = `${day}-${month}-${year}`

   return formattedDate;
}
