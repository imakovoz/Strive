class Api::CommentsController < ApplicationController
  # before_action :set_post, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @comments = Comment.all
  end

  def create
    if !!params[:post][:activity]
      post = Workout.find(params[:post][:id])
    else
      post = Post.find(params[:post][:id])
    end

    @comment = Comment.new(userid: current_user.id, body: params[:comment])
    @comment.update_attribute(:commentable, post)
    @comment.save!

    render :show
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    @comments = Comment.all
    render :index
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:commentable).permit(:title, :body, :privacy, :user_id, :distance, :distance_uom, :duration, :elevation, :elevation_uom, :date, :activity, :subactivity, :id)
    end
end
