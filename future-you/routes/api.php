<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExerciseController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/exercises',[ExerciseController::class,'index']);
Route::post('/exercises',[ExerciseController::class,'store']);
Route::get('/exercises/{id}',[ExerciseController::class,'show']);
Route::patch('/exercises/{id}',[ExerciseController::class,'update']);
Route::delete('/exercises/{id}',[ExerciseController::class,'destroy']);