require "test_helper"

class ToolsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tool = tools(:one)
  end

  test 'should get index' do
    get tools_url, as: :json
    assert_response :success
  end

  test 'should create tool' do
    assert_difference('Tool.count') do
      post tools_url, params: { title: 'New Tool', link: 'https://newtool.com', description: 'New tool description', tags: ['tag1', 'tag2'] }, as: :json
    end

    assert_response :created
  end

  test 'should show tool' do
    get tool_url(@tool), as: :json
    assert_response :success
  end

  test 'should update tool' do
    patch tool_url(@tool), params: { title: 'Updated Tool', link: 'https://updatedtool.com', description: 'Updated tool description', tags: ['tag3', 'tag4'] }, as: :json
    assert_response :success
  end

  test 'should destroy tool' do
    assert_difference('Tool.count', -1) do
      delete tool_url(@tool), as: :json
    end

    assert_response :no_content
  end
end
