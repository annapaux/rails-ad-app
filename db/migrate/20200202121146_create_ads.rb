class CreateAds < ActiveRecord::Migration[5.2]
  def change
    create_table :ads do |t|
      t.string :text
      t.string :background
      t.integer :clicks, default: 0

      t.timestamps
    end
  end
end
