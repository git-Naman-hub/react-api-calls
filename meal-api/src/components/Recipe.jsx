import React from 'react'

const Recipe = ({data,isLoading,index}) => {

  return (
    <div className="min-h-[60vh] w-full bg-slate-950 text-slate-100 flex items-center justify-center p-6">
        <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/30 backdrop-blur">
            <h1 className="text-2xl font-semibold tracking-tight text-white">Recipe {index+1}</h1>
            <div className="mt-4 mb-3.5">
                {isLoading ? (
                    <div className="space-y-3">
                        <div className="h-6 w-40 animate-pulse rounded-md bg-white/10" />
                        <div className="h-4 w-72 animate-pulse rounded-md bg-white/10" />
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 mb-3">
                        <h2 className="text-lg font-medium text-slate-200">
                            {data?.strMeal ?? 'No recipe found.'}
                        </h2>

                        <div className="rounded-2xl shadow-2xl border-2 w-fit">
                            <img
                                src={data?.strMealThumb}
                                alt="image"
                                className="rounded-2xl"
                            />
                        </div>

                        <ul className="list-disc pl-5 space-y-2">
                            {data?.strInstructions
                                ?.split("\r\n\r\n")
                                .map((step,index) => (
                                <li key={index} className="text-sm text-slate-300">
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                )}
            </div>
        </div>
    </div>
  )
}

export default Recipe