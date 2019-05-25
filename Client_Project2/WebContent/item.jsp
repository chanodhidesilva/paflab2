<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Items</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="Controllers/controllerMain.js" type="text/javascript"></script>
</head>
<body>
	<br><br>
	<div class="container">    
	<h2>Add Item</h2>    
	<hr>
	<form  id="formAddItem" action="item.jsp" method="post" class="form-horizontal">      
		<div class="form-group row">        
		<label for="itemname" class="col-sm-2 col-form-label">Item Name*</label> 
		<div class="col-sm-10">                
		<input type="text" class="form-control" id="itmname" placeholder="" name="itmname">     
		</div> 
		</div>
		
		<div class="form-group row">        
		<label for="itemname" class="col-sm-2 col-form-label">Item Description*</label> 
		<div class="col-sm-10">                
		<input type="text" class="form-control" id="itmdesc" placeholder="" name="itmdesc">     
		</div> 
		
		</div>
		<div class="form-group row">        
		<label for="itemname" class="col-sm-2 col-form-label">Item Price*</label> 
		<div class="col-sm-10">                
		<input type="text" class="form-control" id="itmprice" placeholder="" name="itmprice">     
		</div> 
		</div>
		
		<div class="form-group row">        
		<label for="itemname" class="col-sm-2 col-form-label">Item Weight*</label> 
		<div class="col-sm-10">                
		<input type="text" class="form-control" id="itmweight" placeholder="" name="itmweight">     
		</div> 
		</div>
		
		<div class="form-group row">        
		<label for="itemname" class="col-sm-2 col-form-label">Item Quantity*</label> 
		<div class="col-sm-10">                
		<input type="text" class="form-control" id="itmqty" placeholder="" name="itmqty">     
		</div> 
		</div>
		
		<div class="form-group row">                
		<label for="cpwd" class="col-sm-2 col-form-label"></label> 
		<div class="col-sm-10">         
		<button id="btnAddItem" name="btnAddItem" type="submit" class="btn btndefault" >Submit</button>        
		</div>      
		</div>   
		<div id="divStsMsgAddItem"></div> 
	</form>  
	</div>  
	<hr> 
</body>
</html>