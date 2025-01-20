// import React from 'react';
// import ChildComponentcategory from './ChildComponentcategory';
// import Image from 'next/image';

// const ArrayMap = () => {
//   const ParentComponentcategory = [
//     { 
//       image: <Image src="/dining.png" alt="dining" width={381} height={480} />, 
//       furName: "Dining room",
//     },
//     { 
//       image: <Image src="/living.png" alt="living" width={381} height={480} />,
//       furName: "Living room",
//     },



//     { 
//       image: <Image src="/bedroom.png" alt="bedroom" width={381} height={480} />,
//       furName: "Bedroom",  
//     },




//     { 
//       image: <Image src="/grifoo.png" alt="accessories" width={381} height={480} />,
//       furName: "Accessories",  
//     }



//   ];

//   return (
//     <div className="flex justify-center space-x-8 mt-10">    
//       {ParentComponentcategory.map((fur, index) => {
//         return (
//           <div key={index} className="flex flex-col items-center">
//             <div>{fur.image}</div>
//             <h4 className="mt-2 text-lg font-semibold">{fur.furName}</h4>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ArrayMap;





// ParentComponentcategory.tsx
// import React from 'react';
// import Link from 'next/link';  // Import Link for navigation
// import Image from 'next/image';

// const ArrayMap = () => {
//   const ParentComponentcategory = [
//     { 
//       image: <Image src="/dining.png" alt="dining" width={381} height={480} />, 
//       furName: "Dining room",
//       categorySlug: "dining-room"
//     },
//     { 
//       image: <Image src="/living.png" alt="living" width={381} height={480} />,
//       furName: "Living room",
//       categorySlug: "living-room"
//     },
//     { 
//       image: <Image src="/bedroom.png" alt="bedroom" width={381} height={480} />,
//       furName: "Bedroom",  
//       categorySlug: "bedroom"
//     },
//     { 
//       image: <Image src="/grifoo.png" alt="accessories" width={381} height={480} />,
//       furName: "Accessories",  
//       categorySlug: "accessories"
//     }
//   ];

//   return (
//     <div className="flex justify-center space-x-8 mt-10">    
//       {ParentComponentcategory.map((fur, index) => {
//         return (
//           <div key={index} className="flex flex-col items-center">
//             <div>{fur.image}</div>
//             <Link href={`/category/${fur.categorySlug}`}>
//               <h4 className="mt-2 text-lg font-semibold cursor-pointer">{fur.furName}</h4>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ArrayMap;
