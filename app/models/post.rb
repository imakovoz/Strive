# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string
#  body       :text             not null
#  privacy    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :author, :body, presence: true

  has_many :likes, as: :postable
  has_many :comments, as: :commentable

  belongs_to :author,
    class_name: :User,
    foreign_key: :user_id

end
