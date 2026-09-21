<?php

namespace App\Models;
use App\Models\WorkoutExercise;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
class Exercise extends Model
{
    protected $fillable = [
        'name',
        'user_id'
    ];
    public function workoutLogs(){
        return $this->hasMany(WorkoutExercise::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    //
}
