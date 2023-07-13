import React from "react";

async function getData() {
  const res = await fetch(
    "https://mocki.io/v1/12a1fa4f-3ced-4bc6-9d5d-d6af33a937e2",{
      cache:"no-cache"
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto px-4 py-6">
      <p className=" font-bold text-2xl uppercase mb-3">Skills..</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        data.map((item:any,index:number)=>(
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700" key={index}>
      
          <div className="flex flex-col items-center pt-14 pb-10">
            <img
              className="w-48 h-24 mb-3 object-fill rounded-2xl shadow-lg"
              src={item.Img}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">
              {item.Type}
            </h5>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href={`https://www.google.com/search?q=${item.Type}&source=hp&ei=NdCuZIyFEIbh-Abkh7GADA&iflsig=AD69kcEAAAAAZK7eRVgOs7C7DDWGE9anr6KeejIqDrQO&ved=0ahUKEwjM84KEx4mAAxWGMN4KHeRDDMAQ4dUDCAo&uact=5&oq=next&gs_lcp=Cgdnd3Mtd2l6EAMyDgguEIAEELEDEMcBENEDMgUIABCABDILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgUIABCABDILCAAQgAQQsQMQgwEyBQgAEIAEMgsIABCKBRCxAxCDATIFCAAQgAQyCwgAEIAEELEDEIMBOgsILhCKBRCxAxCDAToFCC4QgAQ6EQguEIoFELEDEIMBEMcBENEDOggILhCABBCxAzoQCC4QAxCPARDqAhCMAxDlAjoQCAAQAxCPARDqAhCMAxDlAjoLCC4QgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOggIABCABBCxAzoLCAAQgAQQsQMQyQM6CAgAEIoFEJIDUABY1w9gvxNoAnAAeACAAXeIAZwFkgEDMC42mAEAoAEBsAEK&sclient=gws-wiz`}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View
              </a>
             
            </div>
          </div>
        </div>
        ))
      }
   </div>
    </div>
  );
};


export default page;



