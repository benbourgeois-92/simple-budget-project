
export const currencyFormat = (value) => {


  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
  
}

export const addDateSuffix = (dt) => {    
    
    const conversion = dt.getDate()+(dt.getDate() % 10 == 1 && dt.getDate() != 11 ? 'st' : (dt.getDate() % 10 == 2 && dt.getDate() != 12 ? 'nd' : (dt.getDate() % 10 == 3 && dt.getDate() != 13 ? 'rd' : 'th'))); 
    return conversion;

} 

export const month= ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const getDisabledDays = (startDate, endDate) => {

      const disabledDaysList = [];
      
        for(let arr=[], dt = new Date(startDate); dt <= endDate; dt.setDate(dt.getDate()+1)) {
          arr.push(new Date(dt));
          if(dt.getDate() > 28){
              disabledDaysList.push(new Date(dt))
          }
      }

      return disabledDaysList;

}

export default currencyFormat;