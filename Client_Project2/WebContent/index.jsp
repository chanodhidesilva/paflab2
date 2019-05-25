<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
<meta name="viewport" content="width=device-width, initial-scale=1" >
 <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="Controllers/controllerMain.js" type="text/javascript"></script>
</head>
<body>
<div class="container">    
	<h2>Login</h2>    
	<hr>
<br><br><br>
		<form id="formLogin" action="index.jsp" method="post" class="form-horizontal">
		<div class="form-group row">        
			<label for="username" class="col-sm-2 col-form-label">UserName</label> 
			<div class="col-sm-10">
				<input class="form-control" id="txtUserName" name="txtUserName" type="text" >
			</div>
		</div>
		<div class="form-group row">  
		<label for="password" class="col-sm-2 col-form-label">Password </label> 
		<div class="col-sm-10">
			<input class="form-control" id = "txtPassword" name="txtPassword" type="password">
		</div>
		</div>
		<div class="col-sm-10"> 
		<input id="btnLogin" name="btnLogin" type="submit" value="Login"><br>
		</div>
		<div id="divStsMsgLogin"></div>
	
	</form>  
	</div>
</body>
</html>