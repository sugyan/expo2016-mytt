# coding: utf-8
class ApiController < ApplicationController
  def timetable
    @data = Rails.cache.read('main') || []
  end

  def generate
    p params[:json]
  end
end
