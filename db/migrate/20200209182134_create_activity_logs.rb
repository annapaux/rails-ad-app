class CreateActivityLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :activity_logs do |t|
      t.integer :ad_id
      t.integer :user_id
      t.string :action
      t.integer :click

      t.timestamps
    end
  end
end
