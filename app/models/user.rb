# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#  firstname       :string           not null
#  lastname        :string           not null
#  prof_pic_id     :integer
#

class User < ApplicationRecord
  validates :email, uniqueness: true, presence: true
  validates :password_digest, :session_token, :firstname, :lastname, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def self.generate_random_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_random_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_random_token
  end

end
