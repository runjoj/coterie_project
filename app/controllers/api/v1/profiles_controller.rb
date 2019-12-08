class Api::V1::ProfilesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    profiles = Profile.all
    render json: profiles
  end

  def show
    profile = Profile.find(params["id"])
    render json: profile
  end

  def create
    profile = Profile.new(profile_params)
    if profile.save
      render json: profile, status: :created
    else
      render json: {error: profile.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:name, :birthday, :address, :email, :salary, :coverage)
  end
end
