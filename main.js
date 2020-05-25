function parseCsv(csv){
  var table_total = '';

  var rows=csv.split('\n');

  //Header
  var cols_header = rows[0].split(',');
  var table_header = '<tr>'

  for (var k = 1; k < cols_header.length ; k++){
    table_header += '<td>'+cols_header[k]+'</td>'
  }

  table_header += '</tr>';
  $('#mainheader').html(table_header);


  //Data
  for (var i = 1; i < rows.length ; i++){
  	var table_current = '<tr>'
  	var cols = rows[i].split(',');

    //Col
  	for (var j = 1; j < cols.length ; j++){
  		
      if(j == 1){
        //Add link to img for the JP name
        table_current += "<td class='weapon_picture' id='"+cols[0]+"'>"+cols[j]+"</td>"
      } else if (j == 3) {
        //Icon for Element
        table_current += "<td class='element_icon "+cols[j]+"'><img src='icon/"+cols[j]+".png'>   "+cols[j]+"</td>"
      } else {
        table_current += "<td>"+cols[j]+"</td>"
      }

  	}

  	table_total += table_current+'</tr>'
  }

  //Final table with all data
  $('#maintable').html(table_total);

  //Datatable
  $('#table_id').DataTable({
    "scrollX": true	
  });


  $('.weapon_picture').click(function(event){
    var path = "<img src='weapon_img/"+event.currentTarget.id+".png'>";
    $('.modal-body').html(path);
    $('#myModal').modal('show');
  });

}


$(document).ready( function () {

	//Get the data from the file
		$.ajax({
  			type: "GET",
  			url: "weapon.csv",
  			dataType: "text",
  			success: parseCsv
			});
})

