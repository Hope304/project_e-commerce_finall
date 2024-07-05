<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class CartController extends Controller
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
    public function store($userId,$productId)
    {
        $cart = Cart::where('user_id', $userId)
                    ->where('product_id', $productId)
                    ->first();

        // Lấy giá của sản phẩm từ bảng products
        $product = Product::findOrFail($productId);
        $price = $product->price;
        if ($product->quantity <= 0) {
            return response()->json([
                'status' => 400,
                'message' => 'Sản phẩm đã hết hàng.'
            ]);
        }
        // Nếu giỏ hàng không tồn tại, tạo mới
        if (!$cart) {
            $cart = new Cart();
            $cart->user_id = $userId;
            $cart->product_id = $productId;
            $cart->quantity = 1;
            $cart->total_price = $price;
        } else {
            // Nếu giỏ hàng đã tồn tại, cập nhật số lượng và tổng giá
            $cart->quantity += 1;
            $cart->total_price += $price;
        }
        $cart->save();

        $product->quantity -=1;
        $product->save();

        return response()->json([
            'status'=>200,
            'data'=>$cart,
            'product'=>$product
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $user_id)
    {
        $products = DB::table('carts')
                ->where('user_id',$user_id)
                ->join('products','carts.product_id','=','products.id')
                ->select('carts.product_id','products.name','products.price','products.model','products.image','carts.quantity','carts.total_price','carts.id')
                ->get();
        return response()->json([
            'status' => 200,
            'data' => $products
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(string $id)
    {
        $cart = Cart::find($id);
        $productId = Cart::find($id)->product_id;
        $product = Product::findOrFail($productId);
        $price = $product->price;

        $cart->quantity -= 1;
        $cart->total_price -= $price;

        if ($cart->quantity == 0) {
            $cart->delete();
        }else{
            $cart->save();
        }
        $product->quantity += 1;
        $product->save();

        return response()->json([
            'status'=>200,
            'data'=>$cart,
            'product' =>$product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cart = Cart::find($id);
        $productId = Cart::find($id)->product_id;
        $product = Product::findOrFail($productId);

        $product->quantity += $cart->quantity;
        $product->save();
        $cart->delete();

        return response()->json([
            'status'=>200,
            'data'=>$cart,
            'product' =>$product
        ]);
    }
}
