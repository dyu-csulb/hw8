
var siteController = {

    
}

$( document ).ready(function() {
	
    hideRequirementModal();
    hideQuestionModal();

    $("#btnOverLay").click(function () {
        showRequirementModal();
    });
    
    $(".btnOverLayClose").click(function () {
        hideRequirementModal();
        hideQuestionModal()
    });

    $("#btnShowQuestion").click(function () {
        showQuestionModal();
    });

    
    function showRequirementModal() {
        $("#myOverlay").removeClass('hidden');
        $("#myOverlay").addClass('overlay');
        $("#requirementModal").removeClass('hidden');
        $("#requirementModal").addClass('progressModal');
    }
    
    function hideRequirementModal() {
        $("#myOverlay").removeClass('overlay');
        $("#myOverlay").addClass('hidden');
        $("#requirementModal").removeClass('progressModal');
        $("#requirementModal").addClass('hidden');
    }


    function showQuestionModal() {
        $("#myOverlay").removeClass('hidden');
        $("#myOverlay").addClass('overlay');
        $("#questionModal").removeClass('hidden');
        $("#questionModal").addClass('progressModal');
    }
    
    function hideQuestionModal() {
        $("#myOverlay").removeClass('overlay');
        $("#myOverlay").addClass('hidden');
        $("#questionModal").removeClass('progressModal');
        $("#questionModal").addClass('hidden');
    }


});


