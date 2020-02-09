class AddIconToAds < ActiveRecord::Migration[5.2]
  def change
    add_column :ads, :icon, :string
  end
end
