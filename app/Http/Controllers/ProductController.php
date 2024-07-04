<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json([
            'status' => 'success',
            'data' => $products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'model' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            // 'image' => 'required',
        ]);
        $product = new Product();
        $product->name = $request->input('name');
        $product->model = $request->input('model');
        $product->price = $request->input('price');
        $product->quantity = $request->input('quantity');
        $product->save();
        // return Redirect::route('product.store')->with('success','product created successfully');
        return response()->json([
            'status'=>200,
            'message'=> 'ok'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);
        return response()->json([
            'status'=> 'success',
            'data'=> $product
            ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);
        if(!$product){
            return response()->json([  
                'status'=> 'error',
                'message'=> 'product not found'
                ]);
        }
        $request->validate([
            'name'=> 'required',
            'model'=> 'required',
            'price'=> 'required',
            'quantity'=> 'required'
        ]);
        $product->name = $request->input('name');
        $product->model = $request->input('model');
        $product->price = $request->input('price');
        $product->quantity = $request->input('quantity');
        $product->save();
        return response()->json([
            'status'=> 200,
            'message'=> 'product update',
            'data'=> $product
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        if(!$product){
            return response()->json([
                'status'=> 'error',
                'message'=> 'product not found'
                ]);
        }
        $product->delete();
        return response()->json([
            'status'=> 200,
            'message'=> 'product deleted successfully'
            ]);
    }
}
