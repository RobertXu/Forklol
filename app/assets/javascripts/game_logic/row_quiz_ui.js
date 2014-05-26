Forklol.GameLogic.RowUI = {
  initialize: function(view, questions){
    this.view = view;
    this.questions = questions;
    this.answeredQ = new Forklol.Collections.Questions();
    this.remainingQ = questions.clone();
    this.initializeDomElements();
    this.initializeListeners();
  },

  initializeDomElements: function(){
    this.$input = this.view.$('#submit_box');
    this.$progress = this.view.$("#progress-bar");
    this.$progressText = this.view.$('#progress-text');
    this.$playButton = this.view.$('#play_button');
  },

  initializeListeners: function(){
    that = this;

    this.$input.on('keyup',function(event) {
        that.checkAnswer($(event.target).val());
    });

    this.$playButton.on('click', function(){
      that.$input.prop('disabled', false);
      that.$playButton.prop('disabled', true);

        that.$timer = $('#timer_display');
        that.$input.focus();

        that.$interval = setInterval(that.updateTimer.bind(that),1000)
    });
  },

  updateTimer: function(){
      var oldTime = this.$timer.html();
      var newTimes = this.decrementTime(oldTime.split(":"));
      var min = newTimes[0].toString();
      var sec = newTimes[1].toString();

      sec = this.addZero(sec);

      this.$timer.html(min + ":" + sec);

      if (min === "0" && sec === "00"){
          clearInterval(this.$interval);
          this.$input.prop('disabled', true);
          alert("Time is up");
          this.displayMissed();
      }
  },

  decrementTime : function(oldTime){
    var min = parseInt(oldTime[0]);
    var sec = parseInt(oldTime[1]);
    if (oldTime[0] === ""){
      min = 0;
    }

    if(sec === 0){
        min -= 1;
        sec = 59;
    } else{
      sec -= 1;
    }

    return [min, sec];
  },

  addZero: function(sec){
        if (sec.length === 1){
            sec = "0" + sec;
        }
        return sec;
    },

  findQuestion: function(response){
    var that = this;

    var actualQuestion = undefined;

    this.remainingQ.each(function(question){
      var index = question.triggers.indexOf(response);

      if ( index >= 0){
        that.answeredQ.add(question);
        that.remainingQ.remove(question);
        actualQuestion = question;
      };

    });

    return actualQuestion;
  },

  checkAnswer : function(response){
     var question = this.findQuestion(response.trim());

    while (question){
        var $element = this.view.$('#' + question.id);
        $element.append(question.get('answer'));
        $element.addClass('success');
        this.$input.val('');

        this.updateProgress();

        if (this.answeredQ.length === this.questions.length){
            alert("Congrats!");
            clearInterval(this.$interval);
            this.$input.prop('disabled', true);
        }

        question = this.findQuestion(response)
    }
  },

  updateProgress : function(){
    var fraction = this.answeredQ.length/this.questions.length;

    this.$progressText.html(this.answeredQ.length + '/' + this.questions.length);

    var percentage = Math.floor(fraction*100);

    this.$progress.width(percentage+'%');
  },

  displayMissed : function(){
    this.remainingQ.each(function(question){
      var $el = $('#' + question.id);
      $el.html(question.get('answer'));
      $el.addClass('warning');
    })
  }
}

