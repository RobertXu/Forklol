module Api
  class QuizzesController < ApplicationController

    def index
      @quizzes = Quiz.includes(:questions, :quiz_tables).all
    end

    def show
      @quiz = Quiz.find(params[:id])
      render partial: "api/quizzes/quiz", locals: {quiz: @quiz}
    end

    def create
      logger = Logger.new(STDOUT)

      @quiz = current_user.quizzes.build(quiz_params)
      @table = @quiz.quiz_tables.build(quiz_table_params)
      @questions = @table.questions.build(question_params)

      @good_questions = Question.create(question_params)

      @questions.save
      logger.error(@good_questions)

      if @quiz.save
        (0..@questions.length).each do |score|
          QuizPlay.create!({quiz_id: @quiz.id, score: score, num_plays: 0,
                            user_id: current_user.id})
        end
        render partial: "api/quizzes/quiz", locals: { quiz: @quiz}
      else

        logger.error(@quiz.errors)
        logger.error(@table.errors)
        logger.error(@questions)
        render json: { errors: @quiz.errors }, status: 422
      end
    end

    def update

    end

    def destroy

    end

    private

    def quiz_params
      params.require(:quiz).permit(:title, :description, :time_limit, :category, :input)
    end

    def quiz_table_params
        params.require(:quiz_table).permit(:hint_header, :answer_header)
    end

    def question_params
          params.permit(:questions => [:hint, :answer, :triggers])
                .require(:questions)
                .values
    end
  end
end
