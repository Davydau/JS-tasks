// 8 Exception handling

// 8.1 В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием нужно объявить’.
try{
    console.log(a);
    let a = 3;
 } catch(err){
  alert("‘let перед использованием нужно объявить’") 
 }
 // 8.2 При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
 function culcDivision (a, b){
       try{
       if (b == 0) {
          throw new Error('на ноль делить нельзя');
       }else{
          alert(a / b);}
       }
       catch (e){
 alert('на ноль делить нельзя');
       }}