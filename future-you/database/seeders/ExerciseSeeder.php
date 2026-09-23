<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Exercise;

class ExerciseSeeders extends Seeder
{
    use WithoutModelEvents;
    /**
     * Run the database seeds.
     */
    public function run(): void{
   $exercises = [
    // Chest
    "Bench Press",
    "Incline Bench Press",
    "Dumbbell Bench Press",
    "Incline Dumbbell Press",
    "Machine Chest Press",
    "Cable Fly",

    // Back
    "Lat Pulldown",
    "Pull-Up",
    "Barbell Row",
    "Seated Cable Row",
    "Chest Supported Row",
    "Single-Arm Dumbbell Row",

    // Shoulders
    "Overhead Press",
    "Dumbbell Shoulder Press",
    "Lateral Raise",
    "Cable Lateral Raise",
    "Reverse Pec Deck",

    // Biceps
    "Barbell Curl",
    "Dumbbell Curl",
    "Hammer Curl",
    "Preacher Curl",

    // Triceps
    "Triceps Pushdown",
    "Overhead Triceps Extension",
    "Skull Crusher",
    "Close-Grip Bench Press",

    // Legs
    "Back Squat",
    "Leg Press",
    "Leg Extension",
    "Romanian Deadlift",
    "Leg Curl",
    "Bulgarian Split Squat",
    "Calf Raise",

    // Core
    "Cable Crunch",
    "Hanging Leg Raise",
    "Ab Wheel",

    // Other
    "Deadlift",
];
    foreach ($exercises as $exerciseName){
        Exercise::firstOrCreate([
       "name" => $exerciseName,
        ]);
        
    }

    
    
}
}

    

        
        //
    

