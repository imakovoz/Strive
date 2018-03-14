# == Schema Information
#
# Table name: routes
#
#  id                 :integer          not null, primary key
#  workout_id         :integer
#  title              :string           not null
#  description        :string
#  estimated_duration :float
#  distance           :float
#  elevation_gain     :float
#  polyline           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  user_id            :integer          not null
#  activity           :string
#

class Route < ApplicationRecord
  validates :title, presence: true

  belongs_to :workout, optional: true

end
