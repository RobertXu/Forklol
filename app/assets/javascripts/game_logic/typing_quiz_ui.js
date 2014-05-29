Forklol.GameLogic.TypingUI = Object.create(Forklol.GameLogic.UI);

Forklol.GameLogic.TypingUI.initialize = function(view, questions){
  Forklol.GameLogic.UI.initialize.call(this, view, questions);
};

Forklol.GameLogic.TypingUI.initializeListeners = function(){
  that = this;

  this.$input.on('keyup',function(event) {
      that.checkAnswer($(event.target).val());
  });

  this.$playButton.on('click', function(){
    that.$playButton.prop('disabled', true);
    that.$quizStart.hide();
    that.$quizTyping.show();

    that.$timer = $('#timer_display');
    that.$input.focus();

    that.$interval = setInterval(that.updateTimer.bind(that),1000);

    //Clear timer when the user navigates to a different page
    $('a').one('click', function() {
      clearInterval(that.$interval);
    });
  });
};

Forklol.GameLogic.TypingUI.displayMissed = function(){
    this.remainingQ.each(function(question){
      var $el = $('#' + question.id);
      $el.html(question.get('answer'));
      $el.addClass('danger');
    })
  }

Forklol.GameLogic.TypingUI.findQuestion = function(response){
  var that = this;

  var actualQuestion = undefined;

  this.remainingQ.each(function(question){
    var index = question.triggers.indexOf(response);

    if ( index >= 0){
      if (actualQuestion === undefined){
        that.answeredQ.add(question);
        that.remainingQ.remove(question);
        actualQuestion = question;
      }
    };

  });

  return actualQuestion;
};

Forklol.GameLogic.TypingUI.checkAnswer = function(response){
   var question = this.findQuestion(response.trim());

  while (question){
      var $element = this.view.$('#' + question.id);
      $element.append(question.get('answer'));
      $element.addClass('info');
      this.$input.val('');

      this.updateProgress();

      if (this.answeredQ.length === this.questions.length){
        clearInterval(this.$interval);
        this.updateQuestions();
        this.updateQuiz();
        $gameComplete = $("<div class='alert alert-info'> Congratulations! </div>")
        this.updateDisplay($gameComplete, this.$quizTyping);
      }

      question = this.findQuestion(response)
  }
};