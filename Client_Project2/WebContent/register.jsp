<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Register</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="Controllers/controllerMain.js" type="text/javascript"></script>
</head>
<body>
	<br><br>
	<div class="container">    
	<h2>Register</h2>    
	<hr>
	<form  id="formRegister" action="register.jsp" method="post" class="form-horizontal">      
		<div class="form-group row">        
		<label for="username" class="col-sm-2 col-form-label">Username*</label> 
		<div class="col-sm-10">                
		<input type="text" class="form-control" id="username" placeholder="" name="username" onchange="emptyCheck('username',username)" onclick="emptyCheck('username',username)">     
		<small id="usernameHelp" class="form-text text-muted">Username can contain any letters or numbers, without spaces</small>       
		</div> 
		</div>
		
		<div class="form-group row">        
		<label for="email" class="col-sm-2 col-form-label">Email*</label>   
		<div class="col-sm-10">       
		<input type="email" class="form-control" id="email" placeholder="" name="email" onchange="emptyCheck('email',email)" onclick="emptyCheck('email',email)">
		<small id="emailHelp" class="form-text text-muted">Please provide your email</small>               
		</div>  
		</div>   
		
		<div class="form-group row">        
		<label for="nic" class="col-sm-2 col-form-label">NIC*</label>   
		<div class="col-sm-10">       
		<input type="text" class="form-control" id="nic" placeholder="" name="nic" onchange="emptyCheck('nic',nic)" onclick="emptyCheck('nic',nic)">  
		<small id="nicHelp" class="form-text text-muted">Please provide your NIC number</small>             
		</div>  
		</div>  
		
		<div class="form-group row">        
		<label for="mobile" class="col-sm-2 col-form-label">Mobile*</label>   
		<div class="col-sm-10">       
		<input type="text" class="form-control" id="mobile" placeholder="" name="mobile" onchange="emptyCheck('mobile',mobile)" onclick="emptyCheck('mobile',mobile)">   
		<small id="mobileHelp" class="form-text text-muted">Please provide your mobile number</small>            
		</div>  
		</div>  
		
		<div class="form-group row">        
		<label for="pwd" class="col-sm-2 col-form-label">Password*</label> 
		<div class="col-sm-10">                      
		<input type="password" class="form-control" id="pwd" placeholder="" name="pwd" onchange="emptyCheck('pwd',pwd)" onclick="emptyCheck('pwd',pwd)">
		<small id="pwdHelp" class="form-text text-muted">Password should be atleast 4 characters</small>              
		</div>
		</div>   
		
		<div class="form-group row">        
		<label for="cpwd" class="col-sm-2 col-form-label">Password(Confirm)*</label> 
		<div class="col-sm-10">                      
		<input type="password" class="form-control" id="cpwd" placeholder="" name="cpwd" onchange="emptyCheck('cpwd',cpwd)" onclick="emptyCheck('cpwd',cpwd)"> 
		<small id="cpwHelp" class="form-text text-muted">Please confirm password</small>             
		</div>
		</div>   
                 
		<div class="form-group row">                
		<label for="cpwd" class="col-sm-2 col-form-label"></label> 
		<div class="col-sm-10">         
		<button id="btnRegister" name="btnRegister" type="submit" class="btn btndefault" >Submit</button>        
		</div>      
		</div>   
		<div id="divStsMsgRegister"></div> 
	</form>  
	</div>  
	<hr> 
</body>
</html>