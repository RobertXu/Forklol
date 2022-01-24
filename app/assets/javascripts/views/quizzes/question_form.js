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

  parseTriggers: function(str, $tr){
    var values = str.split(",");
    var triggers = [];

    for (var i = 0; i < values.length; i++){
      if (values[i].trim() !== ""){
        triggers.push(values[i].trim());
      }
    }

    triggers.push($tr.find('input[name="answer"]').val().trim());

    return JSON.stringify(triggers);
  },

  parseQuestions: function(){
    var questions={};
    var index = 0;
    var view = this;
   this.$('table').find('tr').each(function(){
       var id=$(this).attr('id');
       var $tr = $(this);
       var row={};

       $(this).find('input').each(function(){
         if ($(this).attr('name') === 'triggers'){
           row[$(this).attr('name')] = view.parseTriggers($(this).val(), $tr);
         }
         else{
           row[$(this).attr('name')] = $(this).val();
         }
       });

       if (!jQuery.isEmptyObject(row)){
           questions[index]=row;
       }
       index++;
   });

   return questions;
  },

  submitQuiz: function(){
      var quiz_table = this.model.quiz_table.attributes;
      var quiz = this.model.attributes;
      var attributes = {};
      attributes['quiz'] = quiz;
      attributes['quiz_table'] = quiz_table;

      attributes['questions'] = this.parseQuestions();

      Forklol.quizzes.create(attributes, {
      success: function(response) {
        Backbone.history.navigate('#quizzes/' + response.id, {trigger: true})
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
