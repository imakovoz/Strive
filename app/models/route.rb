# == Schema Information
#
# Table name: routes
#
#  id                 :integer          not null, primary key
#  workout_id         :integer
#  title              :string           not null
#  description        :string
#  estimated_duration :integer
#  distance           :integer
#  elevation_gain     :integer
#  polyline           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Route < ApplicationRecord
  validates :title, presence: true

  belongs_to :workout, optional: true

end
