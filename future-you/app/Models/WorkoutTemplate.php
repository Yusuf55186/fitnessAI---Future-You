<?php

namespace App\Models;
use App\Models\WorkoutTemplateExercise;
use App\Models\User;
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
        
    //
}
