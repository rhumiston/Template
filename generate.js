jQuery.each(jQuery('textarea[data-autoresize]'), function() {
    var offset = this.offsetHeight - this.clientHeight;
 
    var resizeTextarea = function(el) {
        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
});

$(document).ready(function()
{
    $("#generate").click(function(){
		var infoMissing = false;
		var $alertMessage = "";
        var $user = $("#user").val();
		var $networkID = $("#networkID").val();
		var $contactNum = $("#contactNum").val();
		var $hostname = $("#hostName").val();
		var $location = $("#location").val(); 
		var $department = $("#department").val(); 
		var $issue = $("#issue").val(); 
		var $steps = $("#steps").val();
		var $queue = $("#queue").val();
		var $printerIP = $("#printerIP").val();
		var $affected = $("input#affected").val();
		var $start = $("#start").val();
		var $worked = $("#worked").val();
		var $changed = $("#changed").val();
		var $errorMessage = $("#errorMessage").val();
		var	$kb = $("#kb").val();
		var $phone = "";
		
		if ($user == "" || $networkID =="") $alertMessage += "User name and Network id are required\r\n";
		if ($hostname == "" && $printerIP =="" && $queue =="" && $phone =="") $alertMessage +=  "Device info is required\r\n";
		if ($alertMessage !=  "") alert($alertMessage);
		var $template = "--------------User Info-------------------\r\nName: " + $user + " \r\n";
		$template += "User ID: " + $networkID + " \r\nPhone: " + $contactNum + " \r\n";
		if ($hostname != "") $template += "Device Hostname Impacted: " + $hostname +" \r\n\r\n";
		if ($queue !="") $template += "Printer NT Name: " + $queue + "\r\n";
		if ($printerIP !="") $template += "Printer IP: " + $printerIP + "\r\n";
		$template += "Location (Floor/Suite/Room): " + $location + "\r\n";
		$template += "Department: " + $department + " \r\n\r\n";
		$template += "-------------Reason for Call-------------\r\nIssue:\r\n" + $issue +" \r\n";
		$template += "Steps Taken to Resolve:\r\n" + $steps + "\r\n"; 

		if ($("input[name=ticketType]:checked").val() == "2")
		{
			$template += "------------Required Questions:-----------\r\n";
			if ($affected !="") $template += "Who is this affecting?" + $affected + " \r\n";
			if ($start != "") $template += "When did this start?"  + $start + " \r\n";
			if ($worked !="") $template += "Did this work before?" + $worked + " \r\n";
			if ($changed !="") $template += "Has anything changed since it last worked?" + $changed + " \r\n";
			if ($errorMessage !="") $template += "List any error messages:" +  $errorMessage + " \r\n";
			if ($kb !="") $template += "KB:" +  $kb + " \r\n";

		}

		$("#template").val($template);
		$("#template").select();
		document.execCommand("copy");
    });

	$("input[name=ticketType]").click(function(){
		if ($(this).val() == "2")
		{
			$(".incident").removeClass("hidden");
		}else{
			$(".incident").addClass("hidden");
		}
	
	
	});


	$(".contract").click(function()
	{
		console.log($(this).html());
		$(".form-horizontal").addClass("hidden");
		$("."+$(this).html()).removeClass("hidden");
		$(".contract").removeClass("active");
		$(this).addClass("active");
	});
	

});

function resetForm()
{
	var $contract = $(".contract.active").html();
	console.log($contract);
	$("input[class*='"+ $contract + "']").val("");
	$("textarea[class*='"+ $contract + "']").val("");
	$("#request").prop( "checked" );
}
