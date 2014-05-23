Forklol.Views.QuizShow = Support.CompositeView.extend({
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['quizzes/show'],

  grabQuestions: function(tableArr){
    var questions = [];

    tableArr.each(function(quiz_table){
      questions = questions.concat(quiz_table.questions());
    })

    return questions;
  },
  //Places divs in DOM to hold quiz tables
  generateTableDivs :function(tableArr){
    var occupiedSpace = 4*tableArr.length;
    var $tableHolder = this.$('#quiz_tables_go_here');

    var tableDivs = [];

    //Make a div the size of offset to center the tables
    var offset = Math.floor((12-occupiedSpace)/2);

    $tableHolder.append($("<div class='col-xs-" + offset +"'></div>"));

    tableArr.each(function(quiz_table){
      var $currentDiv = $("<div id='table" + quiz_table.id +"'class='col-xs-4'></div>")
      $tableHolder.append($currentDiv);
      tableDivs.push($currentDiv);
    })

    return tableDivs;
  },

  render: function(){

    var content = this.template({
      quiz: this.model,
      questions: this.grabQuestions(this.model.quiz_tables())
    });

    this.$el.html(content);

    if (this.model.quiz_tables().length > 0){
        var tableDivs = this.generateTableDivs(this.model.quiz_tables());

        for (var i = 0; i < tableDivs.length; i++){
          var childView = new Forklol.Views.QuizTableShow({
            model: this.model.quiz_tables().at(i)
          });
          this.renderChildInto(childView, tableDivs[i]);
        }
    }

    return this;
  },

  renderChildInto: function(view, container) {
     this.renderChild(view);
     container.html(view.el);
   }
});