<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExerciseController;
use App\Http\Controllers\WorkoutExerciseController;
use App\Http\Controllers\WorkoutSessionController;
use App\Http\Controllers\WorkoutSetController;
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
Route::get('/workout-sessions', [WorkoutSessionController::class, 'index']);
Route::post('/workout-sessions', [WorkoutSessionController::class, 'store']);
Route::get('workout-sessions/{id}',[WorkoutSessionController::class,'show']);
Route::patch('workout-sessions/{id}',[WorkoutSessionController::class,'update']);
Route::delete('workout-sessions/{id}',[WorkoutSessionController::class,'destroy']);
Route::post('/workout-sets',[WorkoutSetController::class,'store']);
Route::get('/workout-sets/{id}',[WorkoutSetController::class,'show']);
Route::patch('/workout-sets/{id}',[WorkoutSetController::class,'update']);
Route::delete('/workout-sets/{id}',[WorkoutSetController::class,'destroy']);









