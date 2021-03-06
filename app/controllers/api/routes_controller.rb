class Api::RoutesController < ApplicationController
  before_action :set_route, only: [:show, :edit, :update, :destroy]

  def index
    @routes = Route.all
  end

  def show
  end

  def new
    @route = Route.new
  end

  def create
    @route = Route.new(route_params)
    @route.user_id = current_user.id
    @route.save!
    render :show
  end


  # PATCH/PUT /routes/1
  # PATCH/PUT /routes/1.json
  def update
    @route.update(route_params)
    render :show
  end

  # DELETE /routes/1
  # DELETE /routes/1.json
  def destroy
    @route.destroy
    respond_to do |format|
      format.html { redirect_to routes_url, notice: 'Route was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def filter_index
    @routes = []
    params[:user_id].map {|user| @routes.concat(Route.where("user_id = #{user}"))}
    render :index
  end

  def search_index
    @routes = Route.where("title LIKE ? or body LIKE ?", "%#{params[:search]}%", "%#{params[:search]}%")
    render :index
  end

  private
  def set_route
    @route = Route.find(params[:id])
  end
  # Never trust parameters from the scary internet, only allow the white list through.
  def route_params
    params.require(:route).permit(:title, :workout_id, :description, :estimated_duration, :distance, :elevation_gain, :polyline, :activity)
  end
end
