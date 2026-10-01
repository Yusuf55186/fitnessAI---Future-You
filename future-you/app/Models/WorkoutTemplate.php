<?php

namespace App\Models;
use App\Models\WorkoutTemplateExercise;
use App\Models\User;
use App\Models\WorkoutSession;
use Illuminate\Database\Eloquent\Model;

class WorkoutTemplate extends Model
{
    protected $fillable = [
        'name',
        'user_id'
    ];
    public function user() {
        return $this->belongsTo(User::class);   

        }
        public function workoutTemplateExercises(){
            return $this->hasMany(WorkoutTemplateExercise::class);
        }
        public function workoutSessions() {
            return $this->hasMany(WorkoutSession::class);
        }
        
    //
}
