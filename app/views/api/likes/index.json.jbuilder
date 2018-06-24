@likes.each do |like|
  json.set! post.id do
    json.partial! 'like', like: like
  end
end
