# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
tools = [
  {
    id: 1,
    title: "Notion",
    link: "https://notion.so",
    description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
    tags: [
      "organization",
      "planning",
      "collaboration",
      "writing",
      "calendar"
    ]
  },
  {
    id: 2,
    title: "json-server",
    link: "https://github.com/typicode/json-server",
    description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
    tags: [
      "api",
      "json",
      "schema",
      "node",
      "github",
      "rest"
    ]
  },
  {
    id: 3,
    title: "fastify",
    link: "https://www.fastify.io/",
    description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
    tags: [
      "web",
      "framework",
      "node",
      "http2",
      "https",
      "localhost"
    ]
  }
]

tools.each do |tool|
  Tool.create!(tool)
end