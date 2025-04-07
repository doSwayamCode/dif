var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Form validate
(function() {
  'use strict';
  
  // Fetches forms we want to apply validation 
  var forms = document.querySelectorAll('.needs-validation');
  
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        
        form.classList.add('was-validated');
      }, false);
    });
})();

// Image preview for upload
function previewImage(input, previewId) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      document.getElementById(previewId).src = e.target.result;
    }
    
    reader.readAsDataURL(input.files[0]);
  }
}

// sidebar on mobile
document.addEventListener('DOMContentLoaded', function() {
  const sidebarToggle = document.querySelector('[data-bs-toggle="collapse"][data-bs-target="#sidebarMenu"]');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      document.body.classList.toggle('sidebar-open');
    });
  }
});

// Confirm delete
function confirmDelete(event, itemName) {
  if (!confirm(`Are you sure you want to delete this ${itemName}?`)) {
    event.preventDefault();
  }
}

// Dynamic content loading
function loadContent(url, targetId) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading content:', error);
    });
}
