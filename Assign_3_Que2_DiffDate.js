 // 2. Write a JavaScript function to get the difference between two dates in
// days
 
 let date_diff = function(d1,d2) {
    dt1 = new Date(d1);
    dt2 = new Date(d2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    console.log(date_diff('04/02/2014', '11/04/2014'));
    console.log(date_diff('12/02/2014', '11/04/2014'));