// new_prospect.js

// making radio button to toggle  between indivial and bulk when check
function toggleBulkUpload() {
  const bulkUploadContainer = document.getElementById("bulkUploadContainer");
  const prospectContainer = document.getElementById("prospect");
  const individualRadio = document.querySelector(
    'input[name="creation-type"][value="individual"]'
  );
  const bulkUploadRadio = document.querySelector(
    'input[name="creation-type"][value="bulk-upload"]'
  );
  const cancel = document.getElementById("cancel");
  const myProspect = document.getElementById("myProspect");

  if (bulkUploadRadio.checked) {
    bulkUploadContainer.style.display = "block";
    prospectContainer.style.display = "none";
  } else if (individualRadio.checked) {
    bulkUploadContainer.style.display = "none";
    prospectContainer.style.display = "block";
  }
  // else if (cancel.click()){
  //     myProspect.style.display = 'none';
  //     bulkUploadContainer.style.display = 'block';
  // }
}

// implementing the cancel button on new prospect upload document page  so that wjen clicked it takes you back to bulk upload
function switchToBulkUpload() {
  const bulkUploadContainer = document.getElementById("bulkUploadContainer");
  const myProspect = document.getElementById("myProspect");
  const prospectContainer = document.getElementById("prospect");

  if (myProspect) {
    myProspect.style.display = "none";
  }

  if (bulkUploadContainer) {
    bulkUploadContainer.style.display = "block";

    if (prospectContainer) {
      prospectContainer.style.display = "none";
    }
  }
}
document.getElementById("cancel").addEventListener("click", switchToBulkUpload);

// file upload logic

function handleFileInputChange() {
  const fileInput = document.getElementById("fileInput");
  if (fileInput && fileInput.files && fileInput.files.length > 0) {
    console.log("File selected");
    // Simulate page load
    // alert("File selected. Page would load now.");
    loadPage("../pages/prospectsNew_pros_doc_upload.html"); // Uncomment this line if loadPage is defined
  } else {
    console.log("No file selected");
  }
}
