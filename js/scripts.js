function List(list){
  this.taskList = list;
  this.finishedList = "";
}
// List.protot
List.prototype.removeTask = function() {
  this.finishedList = this.taskList;
  this.taskList = "";
}

$(function(){
  var done = []
  $("form").submit(function(event){
    event.preventDefault();
    var inputTask = $("#task").val();
    var toDo = new List(inputTask);
    $("#show-to-do").append("<li>" + toDo.taskList + "</li>");
    $("li").last().click(function(){
      $("#done").show();
      $(this).remove();
      toDo.removeTask();
      done.push(this);
      $("#finished").append("<li>" + toDo.finishedList + "</li>");
     })
  });
});
