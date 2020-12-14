import { GLOBAL } from '../../app/services/global'

$(document).ready(function(){

  var ctx = document.getElementById("usersChart");
  if(ctx){

    let token = localStorage.getItem('token');
    var settings = {
      "url": GLOBAL.url+"/users",
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "authorization": token
      }
    };
    
    $.ajax(settings).done(function (response) {
      
      let datatable = [];
      let c_admin = 0;
      let c_user = 0;
  
      response.users.forEach(obj => {
        datatable.push(['<img class="img-profile rounded-circle" width="30px" src="'+GLOBAL.url+'getImageUser/'+obj.image+'"></img>', obj.name, obj.surname, obj.email, obj.role, '<a class="btn btn-danger btn-circle btn-sm ml-1" data-toggle="modal" data-target="#deleteUserModal" data-id="'+obj._id+'" onclick="$(\'#delete-id-user\').val(\''+obj._id+'\');"><i class="fas fa-trash"></i></a><a class="btn btn-warning btn-circle btn-sm ml-1" onclick="$(\'#formEdit\').trigger(\'reset\'); $(\'#edit-name\').val(\''+obj.name+'\'); $(\'#edit-surname\').val(\''+obj.surname+'\'); $(\'#edit-email\').val(\''+obj.email+'\'); $(\'#edit-role\').val(\''+obj.role+'\'); $(\'#edit-pic\').attr(\'src\', \''+GLOBAL.url+'getImageUser/'+obj.image+'\'); $(\'#edit-id-user\').val(\''+obj._id+'\');" data-toggle="modal" data-target="#userEditModal"><i class="fas fa-info"></i></a>'])
        if(obj.role == 'ROLE_ADMIN'){c_admin++;}
        if(obj.role == 'ROLE_USER'){c_user++;}
      });
  
      $('#usersTable').DataTable({
        data: datatable
      });
  
      Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
      Chart.defaults.global.defaultFontColor = '#858796';
    
      var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["User", "Admin"],
          datasets: [{
            data: [c_user, c_admin],
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });
        
    });

  }

});