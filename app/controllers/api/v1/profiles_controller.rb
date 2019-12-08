class Api::V1::LocationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  before_action :authenticate_user

  def index
    profiles = Profile.all
    render json: profiles
  end

  def show
    profile = Profile.find(params["id"])
    render json: profile
  end

  def create
    profile = Profile.new
    if profile.save
      render json: profile
    else
      render json: {error: "There was an error."}
    end
  end
