import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content bg-base-200 pt-10 pl-10">
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-[180px] bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <NavLink to="/dashboard/addProduct">Add Product</NavLink>
                    </li>
                    <li>
                        <NavLink className="mt-2" to="/dashboard/addReview">Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink className="mt-2" to="/dashboard/myItems">Add Review</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;