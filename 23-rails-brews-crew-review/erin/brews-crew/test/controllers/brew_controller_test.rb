require 'test_helper'

class BrewControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get brew_index_url
    assert_response :success
  end

  test "should get show" do
    get brew_show_url
    assert_response :success
  end

  test "should get destroy" do
    get brew_destroy_url
    assert_response :success
  end

  test "should get new" do
    get brew_new_url
    assert_response :success
  end

  test "should get create" do
    get brew_create_url
    assert_response :success
  end

  test "should get edit" do
    get brew_edit_url
    assert_response :success
  end

  test "should get update" do
    get brew_update_url
    assert_response :success
  end

  test "should get strongest" do
    get brew_strongest_url
    assert_response :success
  end

end
