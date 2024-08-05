// new_prospect.js

// making radio button to toggle  between indivial and bulk when check
function toggleBulkUpload() {
    const bulkUploadContainer = document.getElementById('bulkUploadContainer');
    const prospectContainer = document.getElementById('prospect');
    const individualRadio = document.querySelector('input[name="creation-type"][value="individual"]');
    const bulkUploadRadio = document.querySelector('input[name="creation-type"][value="bulk-upload"]');
    const cancel = document.getElementById('cancel')
    const myProspect = document.getElementById('myProspect');
    

    if (bulkUploadRadio.checked) {
        bulkUploadContainer.style.display = 'block';
        prospectContainer.style.display = 'none';

    } else if (individualRadio.checked) {
        bulkUploadContainer.style.display = 'none';
        prospectContainer.style.display = 'block';

    }
    // else if (cancel.click()){
    //     myProspect.style.display = 'none';
    //     bulkUploadContainer.style.display = 'block';
    // }
}

function switchToBulkUpload() {
    const bulkUploadContainer = document.getElementById('bulkUploadContainer');
    const myProspect = document.getElementById('myProspect');
    const prospectContainer = document.getElementById('prospect');


    if (myProspect) {
        myProspect.style.display = 'none';
    }

    if (bulkUploadContainer) {
        bulkUploadContainer.style.display = 'block';

        if (prospectContainer) {
            prospectContainer.style.display = 'none';
        }
    }
}


document.getElementById('cancel').addEventListener('click', switchToBulkUpload);