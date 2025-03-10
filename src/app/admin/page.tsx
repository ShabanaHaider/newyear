// import React from 'react'

// const Admin = () => {
//   return (
//     <div>Admin</div>
//   )
// }

// export default Admin

// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
// const Admin = () => {
//     return (
//         <div>
//             {/* Simple unstyled Sign out button */}
//             {/* <SignedIn>
//                 <SignOutButton />
//             </SignedIn> */}
//             {/* Signout Button with styling */}
            
            
//             <SignedOut>
//                 <div className="flex items-center justify-center h-screen bg-gray-100">
//                     <SignInButton>
//                         <button
//                             className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
//                         >
//                             Sign In
//                         </button>
//                     </SignInButton>
//                 </div>
//             </SignedOut>
//             <SignedIn>
//                 <div className="flex items-center justify-end p-4 bg-gray-50 shadow">
//                     <UserButton
//                         appearance={{
//                             elements: {
//                                 userButtonTrigger:
//                                     "px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition",
//                             },
//                         }}
//                     />
//                 </div>
//             </SignedIn>
//             Admin
//         </div>
//     )
// }
// export default Admin


import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Admin = () => {
    return (
        <div>
            {/* Sign-in Button */}
            <SignedOut>
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <SignInButton>
                        <button
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                        >
                            Sign In
                        </button>
                    </SignInButton>
                </div>
            </SignedOut>

            {/* Signed-in User Navbar */}
            <SignedIn>
                <div className="flex items-center justify-between p-4 bg-gray-50 shadow">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    <UserButton
                        appearance={{
                            elements: {
                                userButtonTrigger:
                                    "px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition",
                            },
                        }}
                    />
                </div>

                {/* Admin Navigation */}
                <div className="p-6">
                    <ul className="space-y-4">
                        <li>
                            <Link href="/admin/orders" className="text-blue-500 underline text-lg font-medium">
                                Manage Orders
                            </Link>
                            
                        </li>

                        <Link href="/admin/customers" className="text-blue-500 underline text-lg font-medium">
                                Manage Customers
                            </Link>

                        {/* Add more admin links here if needed */}
                    </ul>
                </div>
            </SignedIn>
        </div>
    );
};

export default Admin;


