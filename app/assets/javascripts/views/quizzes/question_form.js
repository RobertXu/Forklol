Forklol.Views.QuizQuestionForm  = Backbone.View.extend({
  template: JST['quizzes/question_form'],

  initialize: function(){
     this.i=1;
  },

  events: {
    'click .input-area': 'updateModel',
    'click #add_row': 'addRow',
    'click #delete_row': 'deleteRow',
    'click .btn-submit': 'submitQuiz'
  },
    
  submitQuiz: function(){
     var questions={};
    $('table').find('tr').each(function(){
        var id=$(this).attr('id');
        var row={};

        $(this).find('input').each(function(){
            row[$(this).attr('name')]=$(this).val();
        });

        if (!jQuery.isEmptyObject(row)){ 
            questions[id]=row;
        }
    });
      
      var quiz_table = this.model.quiz_table.attributes;
      var quiz = this.model.attributes;
      var attributes = {};
      attributes['quiz'] = quiz;
      attributes['quiz_table'] = quiz_table;
      attributes['questions'] = questions;
      
      Forklol.quizzes.create(attributes, {
      success: function(userSession, response) {
        console.log('success');
      },
      error: function(userSession, response) {
        console.log('failure');
      }
    });
  },
  addRow: function(){
         this.$('#addr'+this.i).html("<td>"+ (this.i+1) +"</td><td><input name='hint' type='text' placeholder='Hint' class='form-control input-md'  /> </td><td><input  name='answer' type='text' placeholder='Answer'  class='form-control input-md'></td><td><input  name='triggers' type='text' placeholder='Alternate Answers'  class='form-control input-md'></td>");

         this.$('#tab_logic').append('<tr id="addr'+(this.i+1)+'"></tr>');
         this.i++;
     },
    
  deleteRow: function(){
       	 if(this.i>1){
   		 this.$("#addr"+(this.i-1)).html('');
   		 this.i--;
   		 }
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