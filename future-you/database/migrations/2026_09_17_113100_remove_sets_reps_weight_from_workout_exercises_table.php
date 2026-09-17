<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('workout_exercises', function (Blueprint $table) {
            $table->dropColumn('reps');
            $table->dropColumn('weight');
            $table->dropColumn('sets');
            //
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('workout_exercises', function (Blueprint $table) {
            //
            $table->integer('reps');
            $table->decimal('weight',5,2);
            $table->integer('sets');
        });
    }
};
