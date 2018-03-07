@workouts.each do |workout|
  json.set! workout.id do
    json.partial! 'workout', workout: workout
  end
end
