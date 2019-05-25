//==CONTROLLER======================
//--User--------------------

//==CLIENT-MODEL===================
//--User------------------------
function isValidFormLogin()
{
	if($.trim($("#txtUserName").val())=="")
	{ return "Enter Username";  }
	
	if($.trim($("#txtPassword").val())=="")
	{ return "Enter Password";  }
	
	return true;
}

// --Login--------------------------------------
$(document).on("click", "#btnLogin", function()
{
	$("#divStsMsgLogin").html("");
	var result = isValidFormLogin(); // use client-Model
	if (result == "true")
	 {
		$.ajax(
		 {
			 type : "post",
			 url : "http://localhost:8091/login",
			 data : $("#formLogin").serialize(),
			 complete : function(response, status)
			 {
				 onLogingComplete(response.responseText, status);
			 }
		 });
	 }
	else
	 {
		$("#divStsMsgLogin").html(result);
	 }
});
function onLogingComplete(response, status)
{

	if (status == "success")
	 {
		 if (response == "SUCCESS")
		 {
			 document.location = "register.jsp";
		 }
		 else
		 {
			 $("#divStsMsgLogin").html(response);
		 }
	 }
	else if (status == "error")
	 {
		$("#divStsMsgLogin").html("Error while authenticating");
	 }
	else
	 {
		$("#divStsMsgLogin").html("Unknown error while authenticating");
	 }
}

//===user registration ===========
//==CLIENT-MODEL===================
//--User------------------------
function isValidFormRegister()
{
	if($.trim($("#username").val())=="")
	{ return "Enter Username";  }
	
	if($.trim($("#email").val())=="")
	{ return "Enter Email";  }
	
	if($.trim($("#nic").val())=="")
	{ return "Enter nic";  }
	
	if($.trim($("#mobile").val())=="")
	{ return "Enter mobile number";  }
	
	if($.trim($("#pwd").val())=="")
	{ return "Enter password";  }
	
	if($.trim($("#cpwd").val())=="")
	{ return "Enter Confirm Password";  }
	
	
	// --Register--------------------------------------
	$(document).on("click", "#btnRegister", function()
	{
		$("#divStsMsgRegister").html("");
		var result = isValidFormRegister(); // use client-Model
		if (result == "true")
		 {
			$.ajax(
			 {
				 type : "post",
				 url : "http://localhost:8091/register",
				 data : $("#formRegister").serialize(),
				 complete : function(response, status)
				 {
					 onRegisterComplete(response.responseText, status);
				 }
			 });
		 }
		else
		 {
			$("#divStsMsgRegister").html(result);
		 }
	});
	function onRegisterComplete(response, status)
	{

		if (status == "success")
		 {
			 if (response == "SUCCESS")
			 {
				 document.location = "items.jsp";
			 }
			 else
			 {
				 $("#divStsMsgRegister").html(response);
			 }
		 }
		else if (status == "error")
		 {
			$("#divStsMsgRegister").html("Error while registering user");
		 }
		else
		 {
			$("#divStsMsgRegister").html("Unknown error while registering user");
		 }
	}

	
	
	return true;
}

//===== Add item

function isValidFormAddItem()
{
	if($.trim($("#itmname").val())=="")
	{ return "Enter item name";  }
	
	if($.trim($("#itmdesc").val())=="")
	{ return "Enter item Description";  }
	
	if($.trim($("#itmprice").val())=="")
	{ return "Enter Item price";  }
	
	if($.trim($("#itmweight").val())=="")
	{ return "Enter Item Weight";  }
	
	if($.trim($("#itmqty").val())=="")
	{ return "Enter Item Quantity";  }
	
	}
	
	
	// --------------------------------------------
	$(document).on("click", "#btnAddItem", function()
	{
		$("#divStsMsgAddItem").html("");
		var result = isValidFormAddItem(); // use client-Model
		if (result == "true")
		 {
			$.ajax(
			 {
				 type : "post",
				 url : "http://localhost:8093/api/items/create",
				 data : $("#formAddItem").serialize(),
				 complete : function(response, status)
				 {
					 onAddItemComplete(response.responseText, status);
				 }
			 });
		 }
		else
		 {
			$("#divStsMsgAddItem").html(result);
		 }
	});
	
	function onAddItemComplete(response, status)
	{

		if (status == "success")
		 {
			 if (response == "SUCCESS")
			 {
				 document.location = "viewitems.jsp";
			 }
			 else
			 {
				 $("#divStsMsgAddItem").html(response);
			 }
		 }
		else if (status == "error")
		 {
			$("#divStsMsgAddItem").html("Error while registering item");
		 }
		else
		 {
			$("#divStsMsgAddItem").html("Unknown error while registering item");
		 }
		return true;
	}

	
	
	//===== Edit item

	function isValidFormEditItem()
	{
		if($.trim($("#itmname").val())=="")
		{ return "Enter item name";  }
		
		if($.trim($("#itmdesc").val())=="")
		{ return "Enter item Description";  }
		
		if($.trim($("#itmprice").val())=="")
		{ return "Enter Item price";  }
		
		if($.trim($("#itmweight").val())=="")
		{ return "Enter Item Weight";  }
		
		if($.trim($("#itmqty").val())=="")
		{ return "Enter Item Quantity";  }
		
		}
		
		
		// --------------------------------------------
		$(document).on("click", "#btnEditItem", function()
		{
			$("#divStsMsgEditItem").html("");
			var result = isValidFormEditItem(); // use client-Model
			if (result == "true")
			 {
				$.ajax(
				 {
					 type : "put",
					 url : "http://localhost:8093/api/items/item/1",
					 data : $("#formEditItem").serialize(),
					 complete : function(response, status)
					 {
						 onEditItemComplete(response.responseText, status);
					 }
				 });
			 }
			else
			 {
				$("#divStsMsgEditItem").html(result);
			 }
		});
		
		function onEditItemComplete(response, status)
		{

			if (status == "success")
			 {
				 if (response == "SUCCESS")
				 {
					 document.location = "viewitems.jsp";
				 }
				 else
				 {
					 $("#divStsMsgEditItem").html(response);
				 }
			 }
			else if (status == "error")
			 {
				$("#divStsMsgEditItem").html("Error while updating item");
			 }
			else
			 {
				$("#divStsMsgEditItem").html("Unknown error while updating item");
			 }
			return true;
		}
		

		//===== View item

		function isValidFormViewItem()
		{
			if($.trim($("#itmname").val())=="")
			{ return "Enter item name";  }
			
			}
			
			
			// --------------------------------------------
			$(document).on("click", "#btnViewItem", function()
			{
				$("#divStsMsgViewItem").html("");
				var result = isValidFormViewItem(); // use client-Model
				if (result == "true")
				 {
					$.ajax(
					 {
						 type : "get",
						 url : "http://localhost:8093/api/items/item/1",
						 data : $("#formViewItem").serialize(),
						 complete : function(response, status)
						 {
							 onViewItemComplete(response.responseText, status);
						 }
					 });
				 }
				else
				 {
					$("#divStsMsgViewItem").html(result);
				 }
			});
			
			function onViewItemComplete(response, status)
			{

				if (status == "success")
				 {
					 if (response == "SUCCESS")
					 {
						 document.location = "viewitems.jsp";
					 }
					 else
					 {
						 $("#divStsMsgViewItem").html(response);
					 }
				 }
				else if (status == "error")
				 {
					$("#divStsMsgViewItem").html("Error while viewing item");
				 }
				else
				 {
					$("#divStsMsgViewItem").html("Unknown error while viewing item");
				 }
				return true;
			}

			//===== Delete item

			function isValidFormDeleteItem()
			{
				if($.trim($("#itmname").val())=="")
				{ return "Enter item name";  }
				
				}
				
				
				// --------------------------------------------
				$(document).on("click", "#btnDeleteItem", function()
				{
					$("#divStsMsgDelteItem").html("");
					var result = isValidFormDeleteItem(); // use client-Model
					if (result == "true")
					 {
						$.ajax(
						 {
							 type : "delete",
							 url : "http://localhost:8093/api/items/item/1",
							 data : $("#formDeleteItem").serialize(),
							 complete : function(response, status)
							 {
								 onDeleteItemComplete(response.responseText, status);
							 }
						 });
					 }
					else
					 {
						$("#divStsMsgDeleteItem").html(result);
					 }
				});
				
				function onViewItemComplete(response, status)
				{

					if (status == "success")
					 {
						 if (response == "SUCCESS")
						 {
							 document.location = "viewitems.jsp";
						 }
						 else
						 {
							 $("#divStsMsgViewItem").html(response);
						 }
					 }
					else if (status == "error")
					 {
						$("#divStsMsgViewItem").html("Error while viewing item");
					 }
					else
					 {
						$("#divStsMsgViewItem").html("Unknown error while viewing item");
					 }
					return true;
				}

			
			
		
	