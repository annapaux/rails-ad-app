json.extract! activity_log, :id, :ad_id, :user_id, :action, :click, :created_at, :updated_at
json.url activity_log_url(activity_log, format: :json)
