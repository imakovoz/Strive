class Api::LikesController < ApplicationController
  # before_action :set_post, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @likes = Like.all
  end

  def create
    debugger
    @like = Like.new(post_params)
    @like.user_id = current_user.id
    @like.save!
    render :show
  end

  def destroy
    @like.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Like was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @like = Like.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      debugger
      params.require(:post).permit(:userId, :postable)
    end
end
