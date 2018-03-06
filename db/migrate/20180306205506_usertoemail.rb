class Usertoemail < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :email, :email
  end
end
