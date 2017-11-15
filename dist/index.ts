// Prepare Form
$("#otherMediaChannel").hide();
validateSubmit();

// Validation
$("#firstName").keyup(function() {
    if($(this).val()) {
        $("#firstNameMandatory").hide();
        validateSubmit();
    } else {
        $("#firstNameMandatory").show();
    } 
});

$("#lastName").keyup(function() {
    if($(this).val()) {
        $("#lastNameMandatory").hide();
        validateSubmit();
    } else {
        $("#lastNameMandatory").show();
    }
});

$("#emailMandatory").hide();
$("#email").keyup(function() {
    if($(this).val()) {
        $("#emailMandatory").hide();
        validateSubmit();
    } else {
        if($("#newsletter").prop('checked')) {
            $("#emailMandatory").show();
        }
    }
});

$("#newsletter").change(function() {
    if($(this).prop('checked')) {
        if(!$("#email").val()) {
            $("#emailMandatory").show();
        }
    } else {
        $("#emailMandatory").hide();
    }
    validateSubmit();
});

$("#mediaChannelSelect").change(function() {
    if($(this).val() === "Other") {
        $("#otherMediaChannel").show();
    } else {
        $("#otherMediaChannel").hide();
    }
});

function validateSubmit() {
    /* 
    // I tried to find out whether all children of the alert class are visible or not, but unfortunately it doesn't work at all
    if($("div.alert").children(':visible').length == 0) {
        $("button.btn").attr("enabled", "enabled");
    } else {
        $("button.btn").attr("disabled", "disabled");
    }
    */

    if($("#firstNameMandatory").is(":hidden") && $("#lastNameMandatory").is(":hidden") && $("#emailMandatory").is(":hidden")) {
        $("button.btn").removeAttr("disabled");
    } else {
        $("button.btn").attr("disabled", "disabled");
    }
}
