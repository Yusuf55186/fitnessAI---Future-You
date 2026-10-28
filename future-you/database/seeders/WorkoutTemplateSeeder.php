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
        "Dumbbell Shoulder Press",
        "Triceps Pushdown",
        "Skull Crusher",
        "Cable Lateral Raise",
    ],
    "Pull" => [
        "Lat Pulldown",
        "Hammer Curl",
        "Preacher Curl",
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
