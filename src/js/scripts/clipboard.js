(function copyToClipBoard() {
  const VIN_LIST = document.querySelectorAll(".personal-area__car-status-description");

  VIN_LIST.forEach(vin => {
    vin.addEventListener('click', event => {
      let target = event.target;

      const textArea = document.createElement("textarea");
      textArea.value = target.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      textArea.remove();
      alert('Copied successfully');
    })
  })
})();
