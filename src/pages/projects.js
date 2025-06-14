import ImageSlider from "@/components/Slider";
import Layout from "@/layout/Layout";
import Image from "next/image";

export default function Projects(){
    return(
        <>
        <Layout>
                      <div className="max-w-7xl mx-auto py-12 px-4">

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
             <Image
               src="/Images/projects/irb-project.png"
               width={400}
               height={250}
               className="w-full object-cover h-50"
             />
             <div className="p-4">

               <a href ="https://drive.google.com/drive/folders/13tuJWWt2dwEI9KbnEBK8o21PADhR6Cgs" target="blank" className="text-lg  text-gray-700 hover:underline">
                Pitch Deck and Valuation Model for IRB Infrastructure Pvt Ltd using Discounted Cash Flow Valuation Model.
               </a>
               
               
             </div>
           </div>
       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
             <Image
               src="/Images/projects/gold-project.webp"
               width={400}
               height={250}
               className="w-full object-cover h-50"
             />
             <div className="p-4">

               <a href ="https://drive.google.com/drive/folders/13tuJWWt2dwEI9KbnEBK8o21PADhR6Cgs" target="blank" className="text-lg  text-gray-700 hover:underline">
Is gold a good hedge against stock market? A report for different economies.
               </a>
               
               
             </div>
           </div>
       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
             <Image
               src="/Images/projects/interglobe-aviation.webp"
               width={400}
               height={250}
               className="w-full object-cover h-50"
             />
             <div className="p-4">

               <a href ="https://drive.google.com/drive/folders/13tuJWWt2dwEI9KbnEBK8o21PADhR6Cgs" target="blank" className="text-lg  text-gray-700 hover:underline">
Pitch Deck for Interglobe Aviation   
               </a>
               
               
             </div>
           </div>
           </div>
           </div>
        </Layout>


        </>
    )
}