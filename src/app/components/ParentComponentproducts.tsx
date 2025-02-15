
import React from 'react';
import Image from 'next/image';
import ChildComponentproducts from './ChildComponentproducts';

const ArrayMap = () => {
  const ParentComponent = [
    { 
      image: <Image src="/Sylterine.png" alt="syltherine" width={285} height={446} />, 
      
    },
    { 
      image: <Image src="/Leviosaclear(5).png" alt="leviosa" width={285} height={446} />,
      
    },
    { 
      image: <Image src="/Lolito(1).png" alt="lolito" width={285} height={446} />,
        
    },
    { 
      image: <Image src="/respira.png" alt="respira" width={285} height={446} />,
     
    },
    { 
      image: <Image src="/grifo.png" alt="griffo" width={285} height={446} />,
    },
      
    { 
      image: <Image src="/Muugonew.png" alt="muggo" width={285} height={446} />,
        
    },
    { 
      image: <Image src="/Pingky.png" alt="pingky" width={285} height={446} />,
        
    },
    { 
      image: <Image src="/potty.png" alt="potty" width={285} height={446} />,
        
    },

    
  ];

 
  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {ParentComponent.map((fur, index) => (
        <div key={index} className="flex flex-col items-center">
          <div>{fur.image}</div>
          
        </div>
      ))}
    </div>
  );
};

export default ArrayMap;








