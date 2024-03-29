Forklol.Views.QuizShow = Support.CompositeView.extend({
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);	  
  },

  className: 'container',

  template: JST['quizzes/show'],

  grabQuestions: function(tableArr){
    var questions = new Forklol.Collections.Questions([], {});

    tableArr.each(function(quiz_table){
      questions.add(quiz_table.questions().models);
    })

    return questions;
  },
  //Places divs in DOM to hold quiz tables
  generateTableDivs :function(tableArr){
    var occupiedSpace = 4*tableArr.length;
    var $tableHolder = this.$('#quiz_tables_go_here');

    var tableDivs = [];

    //Make a div the size of offset to center the tables
    // var offset = Math.floor((12-occupiedSpace)/2);
    tableArr.each(function(quiz_table){
      var $currentDiv = $("<div id='table" + quiz_table.id +"'class='col-xs-12'></div>")
      $tableHolder.append($currentDiv);
      tableDivs.push($currentDiv);
    })

    return tableDivs;
  },

  render: function(){
    var questions = this.grabQuestions(this.model.quiz_tables());

    var content = this.template({
      quiz: this.model,
      numQuestions: questions
    });

    this.$el.html(content);

    if (this.model.quiz_tables().length > 0){
        var tableDivs = this.generateTableDivs(this.model.quiz_tables());

        for (var i = 0; i < tableDivs.length; i++){

          var childView = new Forklol.Views.QuizTableShow({
            model: this.model.quiz_tables().at(i),
            quiz: this.model
          });
          this.renderChildInto(childView, tableDivs[i]);
        }
        if (this.model.get('input_type') === 'typing'){
          Forklol.GameLogic.TypingUI.initialize(this, questions);
        } else {
           Forklol.GameLogic.ClickingUI.initialize(this, questions);
        }
    }

    return this;
  },

  renderChildInto: function(view, container) {
     this.renderChild(view);
     container.html(view.el);
   }
});
