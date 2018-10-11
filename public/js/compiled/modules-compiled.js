"use strict";
"use strict";
"use strict";

function handleOnChange() {
  var input = document.getElementById('test-upload');
  var button = document.getElementById('test-upload-label');
  button.innerText = input.files.item(0).name;
}
