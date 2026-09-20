<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

public function register(Request $request){
    $validated = $request->validate([
        'name' => 'required|string',
        'email' => ['required', 'string', 'email', Rule::unique('users', 'email')],
        'password' => 'required|string|min:8|confirmed',

    ]);
    $validated['password'] = Hash::make($validated['password']);
    $user = User::create($validated);
    return response()->json([
        'User' => $user,
        'message' => 'User successfully registered',
    ],201);
}

public function login(Request $request){
    $validated = $request->validate([
        'email' => ['required','string','email'],
        'password' => ['required','string']
    ]);
    $user = User::where('email',$validated['email'])->first();
    if (!$user){ return response()->json(
        ['message' => 'Invalid credentials']
    ,401);
    }
    if(!Hash::check($validated['password'],$user->password)){
        return response()->json(
            ['message' => 'Invalid credentials']
        ,401);
    }
    $token = $user->createToken('Future You API');
    return response()->json([
        'Usertoken' => $token->plainTextToken,
        'message' => 'logged in'
    ],200);
}
public function logout(Request $request){
   $token = $request->user()->currentAccessToken();
   $token->delete();
   return response()->json([
    'message' => 'successfully logged out'
   ],200);
}
}
