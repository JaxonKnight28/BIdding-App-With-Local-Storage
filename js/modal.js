function showError(title, content) {
    //creates a variable with the HTML modal and takes the title and content from the specific function
    let theModal = `<div class="modal fade" id="errorModalMessage" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">${title}</h5>
          </button>
        </div>
        <div class="modal-body">
          ${content}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick='closeModal()'>Close</button>
        </div>
      </div>
    </div>
  </div>`;
    //gets the spot for the modal and shows it
    console.log(theModal)
    document.getElementById('modalSpot').innerHTML = theModal;
    $('#errorModalMessage').modal('toggle');
    $('#errorModalMessage').modal('show');
}

function closeModal() {
    $('#errorModalMessage').modal('hide');
}