<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExerciseController;
use App\Http\Controllers\WorkoutExerciseController;
use App\Http\Controllers\WorkoutSessionController;
use App\Http\Controllers\WorkoutSetController;
use App\Http\Controllers\AuthController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/exercises',[ExerciseController::class,'index'])->middleware('auth:sanctum');
Route::post('/exercises',[ExerciseController::class,'store'])->middleware('auth:sanctum');
Route::get('/exercises/{id}',[ExerciseController::class,'show'])->middleware('auth:sanctum');
Route::patch('/exercises/{id}',[ExerciseController::class,'update'])->middleware('auth:sanctum');
Route::delete('/exercises/{id}',[ExerciseController::class,'destroy'])->middleware('auth:sanctum');
Route::get('/workoutexercises',[WorkoutExerciseController::class,'index'])->middleware('auth:sanctum');
Route::post('/workoutexercises',[WorkoutExerciseController::class,'store'])
->middleware('auth:sanctum');
Route::get('workoutexercises/{id}',[WorkoutExerciseController::class,'show'])
->middleware('auth:sanctum');
Route::patch('workoutexercises/{id}',[WorkoutExerciseController::class,'update'])
->middleware('auth:sanctum');
Route::delete('workoutexercises/{id}',[WorkoutExerciseController::class,'destroy'])
->middleware('auth:sanctum');
Route::get('/workout-sessions', [WorkoutSessionController::class, 'index'])->middleware('auth:sanctum');
Route::post('/workout-sessions', [WorkoutSessionController::class, 'store'])
->middleware('auth:sanctum');
Route::get('workout-sessions/{id}',[WorkoutSessionController::class,'show'])
->middleware('auth:sanctum');
Route::patch('workout-sessions/{id}',[WorkoutSessionController::class,'update'])
->middleware('auth:sanctum');
Route::delete('workout-sessions/{id}',[WorkoutSessionController::class,'destroy'])
->middleware('auth:sanctum');
Route::get('/workout-sets',[WorkoutSetController::class,'index'])->middleware('auth:sanctum');
Route::post('/workout-sets',[WorkoutSetController::class,'store'])->middleware('auth:sanctum');
Route::get('/workout-sets/{id}',[WorkoutSetController::class,'show'])->middleware('auth:sanctum');
Route::patch('/workout-sets/{id}',[WorkoutSetController::class,'update'])->middleware('auth:sanctum');
Route::delete('/workout-sets/{id}',[WorkoutSetController::class,'destroy'])->middleware('auth:sanctum');
Route::post('/user/register',[AuthController::class,'register']);
Route::post('/user/login',[AuthController::class,'login']);
Route::post('/user/logout',[AuthController::class,'logout'])->middleware('auth:sanctum');









