
 






$(document).ready(function () { 
   
      
    orden = [] , cantidad = [] , nombre=[], cantidades=[];   
      
    
    
    $.ajax({
           type: "GET",  
           url: "http://localhost:8080/api/order",    
           dataType: "json",
           
       success: function (data, status, xhr) {
       
       var gdpData = data;
       
       gdpData.forEach(element => {
           // departamento.push(element.departamento);
           orden.push(element.Orden);
           cantidad.push(element.Cantidad);

       });
       
       createBarGraph(orden, cantidad);
       
       }
       });

       
       $.ajax({
           type: "GET",  
           url: "http://localhost:8080/zz/pro",    
           dataType: "json",
           
       success: function (data1, status, xhr) {
       
       var gdpData1 = data1;
      
       gdpData1.forEach(element1 => {
           
           nombre.push(element1.nombre);
           cantidades.push(element1.Cantidad);

       });
       
       createBarGraph1(nombre, cantidades);
      
       }
       });





   
   }); 




   function createBarGraph(name,val) {
    
           let barChart = new Chart("myChart", {
           type: "line",
           data: {
           labels: name,
           datasets: [{
           data: val,
           label: name,
           backgroundColor: ["#b71540", "#eb2f06", "#f6b93b", "#0c2461", "#1e3799",
           "#0a3d62", "#60a3bc", "#079992", "#78e08f", "#6a89cc"]
           }]
           },
           options:{
           
           }
           });
           }




           function createBarGraph1(name1,val1) {
            
                   let barChart1 = new Chart("myChart1", {
                   type: "bar",
                   data: {
                   labels: name1,
                   datasets: [{
                   data: val1,
                   label: name1,
                   backgroundColor: ["#b71540", "#eb2f06", "#f6b93b", "#0c2461", "#1e3799",
                   "#0a3d62", "#60a3bc", "#079992", "#78e08f", "#6a89cc"]
                   }]
                   },
                   options:{
                   
                   }
                   });
                   }