json.extract! click_log, :id, :user_id, :ad_id, :click, :created_at, :updated_at
json.url click_log_url(click_log, format: :json)
