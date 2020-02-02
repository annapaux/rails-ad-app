require 'test_helper'

class ClickLogsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @click_log = click_logs(:one)
  end

  test "should get index" do
    get click_logs_url
    assert_response :success
  end

  test "should get new" do
    get new_click_log_url
    assert_response :success
  end

  test "should create click_log" do
    assert_difference('ClickLog.count') do
      post click_logs_url, params: { click_log: { ad_id: @click_log.ad_id, click: @click_log.click, user_id: @click_log.user_id } }
    end

    assert_redirected_to click_log_url(ClickLog.last)
  end

  test "should show click_log" do
    get click_log_url(@click_log)
    assert_response :success
  end

  test "should get edit" do
    get edit_click_log_url(@click_log)
    assert_response :success
  end

  test "should update click_log" do
    patch click_log_url(@click_log), params: { click_log: { ad_id: @click_log.ad_id, click: @click_log.click, user_id: @click_log.user_id } }
    assert_redirected_to click_log_url(@click_log)
  end

  test "should destroy click_log" do
    assert_difference('ClickLog.count', -1) do
      delete click_log_url(@click_log)
    end

    assert_redirected_to click_logs_url
  end
end
