<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Exercise;
use App\Models\WorkoutSession;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('workout_exercises', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignIdFor(Exercise::class);
            $table->foreignIdFor(WorkoutSession::class);
            $table->decimal('weight',5,2);
            $table->integer('sets');
            $table->integer('reps');
        
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workout_excersice');
    }
};
