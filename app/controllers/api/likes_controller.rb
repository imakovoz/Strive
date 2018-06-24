class Api::LikesController < ApplicationController
  # before_action :set_post, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @likes = Like.all
  end

  def create
    if !!params[:postable][:activity]
      post = Workout.find(params[:postable][:id])
      type = "Workout"
    else
      post = Post.find(params[:postable][:id])
      type = "Post"
    end

    if !!(Like.find_by userid: current_user.id, postable_type: type, postable_id: params[:postable][:id])
      (Like.find_by userid: current_user.id, postable_type: type, postable_id: params[:postable][:id]).destroy
      respond_to do |format|
        format.html { redirect_to likes_url, notice: 'Like was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      @like = Like.new(userid: current_user.id)
      debugger
      @like.update_attribute(:postable, post)
      @like.save!
      render :show
    end
  end

  def destroy
    @like.destroy
    respond_to do |format|
      format.html { redirect_to likes_url, notice: 'Like was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_like
      @like = Like.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def like_params
      params.require(:postable).permit(:title, :body, :privacy, :user_id, :distance, :distance_uom, :duration, :elevation, :elevation_uom, :date, :activity, :subactivity, :id)
    end
end
