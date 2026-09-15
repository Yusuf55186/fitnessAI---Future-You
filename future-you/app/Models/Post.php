<?php

namespace App\Models;
use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function user(){
        return $this->belongsTo(User::class);
        }
        public function category(){
            return $this->belongsTo(Category::class);
        }
    //
}
