module Api
  class QuizPlaysController < ApplicationController
    def update
      @quiz_play = QuizPlay.find(params[:id]);

      if @quiz_play.update_attributes(quiz_play_params)
        render partial: "api/quiz_plays/quiz_play", locals: {quiz_play: @quiz_play}
      else
        render json: {errors: @quiz_play.errors.full_messages}, status: 422
      end
    end

    private

    def quiz_play_params
      params.require(:quiz_play).permit(:score, :num_plays, :user_id, :quiz_id)
    end
  end
end
