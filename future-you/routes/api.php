<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExerciseController;
use App\Http\Controllers\WorkoutExerciseController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/exercises',[ExerciseController::class,'index']);
Route::post('/exercises',[ExerciseController::class,'store']);
Route::get('/exercises/{id}',[ExerciseController::class,'show']);
Route::patch('/exercises/{id}',[ExerciseController::class,'update']);
Route::delete('/exercises/{id}',[ExerciseController::class,'destroy']);
Route::get('/workoutexercises',[WorkoutExerciseController::class,'index']);
Route::post('/workoutexercises',[WorkoutExerciseController::class,'store']);
Route::get('workoutexercises/{id}',[WorkoutExerciseController::class,'show']);
Route::patch('workoutexercises/{id}',[WorkoutExerciseController::class,'update']);
Route::delete('workoutexercises/{id}',[WorkoutExerciseController::class,'destroy']);
