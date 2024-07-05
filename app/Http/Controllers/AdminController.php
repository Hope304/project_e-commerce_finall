<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class AdminController extends Controller
{
    public function showProduct($id)
{ // Thay Product bằng tên model của bạn

    return inertia('AdminProduct', [
        'product_id' => $id// Truyền dữ liệu sản phẩm sang view AdminProduct
    ]);
}

}
