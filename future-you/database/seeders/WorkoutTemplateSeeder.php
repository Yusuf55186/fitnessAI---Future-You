<?php

namespace Database\Seeders;
use App\Models\WorkoutTemplateExercise;
use App\Models\WorkoutTemplate;
use App\Models\Exercise;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
class WorkoutTemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $templates = [
    "Push" => [
        "Bench Press",
        "Incline Dumbbell Press",
        "Dumbbell Shoulder Press",
        "Cable Lateral Raise",
        "Triceps Pushdown",
        "Overhead Triceps Extension",
    ],

    "Pull" => [
        "Lat Pulldown",
        "Pull-Up",
        "Barbell Row",
        "Seated Cable Row",
        "Face Pull", // Voeg deze oefening eerst toe aan ExerciseSeeder
        "Hammer Curl",
        "Preacher Curl",
    ],

    "Legs" => [
        "Back Squat",
        "Romanian Deadlift",
        "Leg Press",
        "Bulgarian Split Squat",
        "Leg Extension",
        "Seated Leg Curl",
        "Standing Calf Raise",
    ],

    "Upper" => [
        "Bench Press",
        "Lat Pulldown",
        "Dumbbell Shoulder Press",
        "Seated Cable Row",
        "Lateral Raise",
        "Barbell Curl",
        "Triceps Pushdown",
    ],

    "Lower" => [
        "Back Squat",
        "Romanian Deadlift",
        "Leg Press",
        "Leg Curl",
        "Leg Extension",
        "Seated Calf Raise",
        "Cable Crunch",
    ],

    "Full Body" => [
        "Back Squat",
        "Bench Press",
        "Lat Pulldown",
        "Romanian Deadlift",
        "Dumbbell Shoulder Press",
        "Hammer Curl",
        "Cable Crunch",
    ],
];
        foreach($templates as $templateName => $exerciseNames){
            
            $workoutTemplate = WorkoutTemplate::firstOrCreate([
            "name" => $templateName
        ]);
            foreach($exerciseNames as $name){
        $exercise = Exercise::where("name",$name)->firstOrFail();
         WorkoutTemplateExercise::firstOrCreate([
            "exercise_id" => $exercise->id,
           "workout_template_id" => $workoutTemplate->id,
        ]);
            }
        }
        
    }
}
