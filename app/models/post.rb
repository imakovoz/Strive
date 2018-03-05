# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  body       :text             not null
#  privacy    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :author, :title, :body, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id
    
end