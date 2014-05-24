Forklol.Views.QuizQuestionForm  = Backbone.View.extend({
  template: JST['quizzes/question_form'],

  initialize: function(){
    var i=1;
        $("#add_row").click(function(){
         $('#addr'+i).html("<td>"+ (i+1) +"</td><td><input name='name"+i+"' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='mail"+i+"' type='text' placeholder='Mail'  class='form-control input-md'></td><td><input  name='mobile"+i+"' type='text' placeholder='Mobile'  class='form-control input-md'></td>");

         $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
         i++;
     });
        $("#delete_row").click(function(){
       	 if(i>1){
   		 $("#addr"+(i-1)).html('');
   		 i--;
   		 }
   	 });
  }

  events: {
    'click .input-area': 'updateModel'
  },

  className: 'panel panel-default',

  updateModel: function(event){
    $(event.currentTarget).addClass('panel-primary');

    $('.input-area').each(function(){
      if (!$(this).is($(event.currentTarget))){
        $(this).removeClass('panel-primary');
      }
    })
  },

  render: function(){
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})