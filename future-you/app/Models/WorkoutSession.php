<?php

namespace App\Models;
use App\Models\User;
use App\Models\WorkoutExercise;
use Illuminate\Database\Eloquent\Model;

class WorkoutSession extends Model
{
    protected $fillable = [
        'name',
        'note',
        'user_id',
        'date',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }

public function exercise(){
    return $this->hasMany(WorkoutExercise::class);
}
}
