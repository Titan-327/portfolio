"use client";

export function Button({ content }: { content: string }) {
  return (
    <button className="bg-[#EAB41E] text-center text-white text-md py-2 px-4 rounded-lg shadow-md hover:bg-[#d99c1b] hover:shadow-lg transition duration-300 ease-in-out cursor-auto">
      {content}
    </button>
  );
}
