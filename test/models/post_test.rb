# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  user_id  :integer          not null
#  title      :string
#  body       :text             not null
#  privacy    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
