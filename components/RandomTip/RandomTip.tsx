"use client"

export default function RandomTip() {

    return (
        <div className="flex flex-col items-center justify-center p-3 bg-gray-100 border-b-2 border-gray-200">
            <p className="text-gray-400 font-semibold">Random tip</p>
            <p className="text-center bg-orange-100 p-3 rounded-2xl shadow-lg text-lg italic border-l-4 border-orange-500 font-semibold max-w-3xl mx-auto mt-2">tip here</p>
        </div>
    );
}
