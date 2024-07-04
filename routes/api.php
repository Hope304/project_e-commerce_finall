<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/product', [ProductController::class,'store']);
Route::get('/product', [ProductController::class,'index']);
Route::get('product/{id}', [ProductController::class,'show']);
Route::put('product/{id}', [ProductController::class,'update']);
Route::delete('product/{id}', [ProductController::class,'destroy']);

Route::post('cart/{user_id}/{product_id}', [CartController::class,'store']);
Route::get('cart/{user_id}', [CartController::class,'show']);
Route::put('cart/{id}', [CartController::class,'update']);
Route::delete('cart/{id}', [CartController::class,'destroy']);