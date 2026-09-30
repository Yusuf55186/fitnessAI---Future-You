<?php
namespace App\Models;
use App\Models\Exercise;
use App\Models\WorkoutTemplate;
use Illuminate\Database\Eloquent\Model;

class WorkoutTemplateExercise extends Model
{
    protected $fillable = [
        "workout_template_id",
        "exercise_id"
    ];
    public function workoutTemplate(){
        return $this->belongsTo(WorkoutTemplate::class);
    }
    public function exercise() {
        return $this->belongsTo(Exercise::class);
    }
    //
}
