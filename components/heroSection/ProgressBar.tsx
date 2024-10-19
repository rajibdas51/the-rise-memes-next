import React from 'react';

const ProgressBar = () => {
    return (
        <div>
            
            <div className="flex justify-center mt-1 ">
              <div className="w-[88%] ">
                <div className="">
                  <div
                    className="w-[115%] h-3 bg-gradient-to-b from-[#230203] to-[#430109] pt-[3px] "
                    style={{
                      clipPath: "polygon(2% 0, 85% 2%, 87% 100%, 0 100%)",
                    }}
                  >
            
                  </div>

                  <div
                    className="w-[115%]  h-3 bg-gradient-to-t from-[#230203] to-[#430109] pb-[14px] "
                    style={{
                      clipPath: "polygon(0 0, 87% 0, 85% 100%, 2% 100%)",
                    }}
                  >
                   
                  </div>
                </div>

                <div className=" mt-[-25px] pt-[2px] pl-[4px]">
                <div
                      className="bg-gradient-to-r from-[#C68B37] to-[#EED199] w-[60%]  h-[10px] "
                      style={{
                        clipPath: "polygon(3% 0, 82% 2%, 86% 100%, 0 100%)",
                      }}
                    ></div> 
                    <div
                      className="bg-gradient-to-r from-[#C68B37] to-[#EED199] w-[60%] h-[10px] "
                      style={{
                        clipPath: "polygon(0 0, 86% 0, 82% 100%, 3% 100%)",
                      }}
                    ></div> 
                  </div>
           
              </div>
      
            </div>

        </div>
  );
};

export default ProgressBar;
