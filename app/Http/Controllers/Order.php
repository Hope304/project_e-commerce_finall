<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Order extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */

    //  public function create()
    // {
    //     $products = Product::all();
    //     return view('orders.create', compact('products'));
    // }

    public function store(Request $request)
    {
        $order = Order::create([
            'quantity' => $request->quantity,
            'total_price' => $request->total_price,
        ]);

        foreach ($request->product_id as $index => $productId) {
            $order->product()->attach($productId,[
                'quantity' => $request->product_quantity[$index],
                'total_price' => $request->product_price[$index],
            ]);
        }
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
}
