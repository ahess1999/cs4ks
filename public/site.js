window.addEventListener('load', (event) => {
getAllButtons();
})
      function Show(b) {
        var wrapper = b.parentElement;
        var div = wrapper.querySelectorAll('.hidden')
        div.forEach(function(index) {
          index.classList.toggle('show');
        });
      }

      function getAllButtons() {
        var button = document.querySelectorAll(".hide");
        button.forEach(function(button, i) {
          button.addEventListener('click', function() {
            this.classList.toggle('active');
          });
          button.onclick = function() {
            Show(button);
          };
        });
      }