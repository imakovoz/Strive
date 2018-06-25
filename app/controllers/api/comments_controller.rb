class Api::CommentsController < ApplicationController
  # before_action :set_post, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @comments = Comment.all
  end

  def create
    if !!params[:commentable][:activity]
      post = Workout.find(params[:commentable][:id])
      type = "Workout"
    else
      post = Post.find(params[:commentable][:id])
      type = "Post"
    end

    if !!(Comment.find_by userid: current_user.id, commentable_type: type, commentable_id: params[:commentable][:id])
      (Comment.find_by userid: current_user.id, commentable_type: type, commentable_id: params[:commentable][:id]).destroy
    else
      comment = Comment.new(userid: current_user.id)
      comment.update_attribute(:commentable, post)
      comment.save!
    end
    @comments = Comment.all
    render :index
  end

  def destroy
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to comments_url, notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
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
