function display(num) {
    $("#screen").val($("#screen").val() + num);
  }
  function result() {
    $("#screen").val(eval($("#screen").val()));
  }
  function clearData() {
    $("#screen").val(" ");
  }
  
  