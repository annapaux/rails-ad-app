require "application_system_test_case"

class ClickLogsTest < ApplicationSystemTestCase
  setup do
    @click_log = click_logs(:one)
  end

  test "visiting the index" do
    visit click_logs_url
    assert_selector "h1", text: "Click Logs"
  end

  test "creating a Click log" do
    visit click_logs_url
    click_on "New Click Log"

    fill_in "Ad", with: @click_log.ad_id
    fill_in "Click", with: @click_log.click
    fill_in "User", with: @click_log.user_id
    click_on "Create Click log"

    assert_text "Click log was successfully created"
    click_on "Back"
  end

  test "updating a Click log" do
    visit click_logs_url
    click_on "Edit", match: :first

    fill_in "Ad", with: @click_log.ad_id
    fill_in "Click", with: @click_log.click
    fill_in "User", with: @click_log.user_id
    click_on "Update Click log"

    assert_text "Click log was successfully updated"
    click_on "Back"
  end

  test "destroying a Click log" do
    visit click_logs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Click log was successfully destroyed"
  end
end
