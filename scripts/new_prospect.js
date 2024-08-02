// new_prospect.js

// making radio button to toggle  between indivial and bulk when check
function toggleBulkUpload() {
    const bulkUploadContainer = document.getElementById('bulkUploadContainer');
    const prospectContainer = document.getElementById('prospect');
    const individualRadio = document.querySelector('input[name="creation-type"][value="individual"]');
    const bulkUploadRadio = document.querySelector('input[name="creation-type"][value="bulk-upload"]');

    if (bulkUploadRadio.checked) {
        bulkUploadContainer.style.display = 'block';
        prospectContainer.style.display = 'none';

    } else if (individualRadio.checked) {
        bulkUploadContainer.style.display = 'none';
        prospectContainer.style.display = 'block';

    }
}
