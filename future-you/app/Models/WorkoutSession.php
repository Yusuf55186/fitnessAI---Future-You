<?php

namespace App\Models;
use App\Models\User;
use App\Models\WorkoutExercise;
use Illuminate\Database\Eloquent\Model;
use App\Models\WorkoutTemplate;
class WorkoutSession extends Model
{
    protected $fillable = [
        'name',
        'note',
        'user_id',
        'date',
        'workout_template_id',
        
    ];
    public function user(){
    return $this->belongsTo(User::class);
    }

public function workoutExercises(){
    return $this->hasMany(WorkoutExercise::class);
}
public function workoutTemplate() {
    return $this->belongsTo(WorkoutTemplate::class);
}
}
